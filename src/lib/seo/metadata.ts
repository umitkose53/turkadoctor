/**
 * Sayfa metadata helper'ları — Next.js Metadata API ile uyumlu.
 */

import type { Metadata } from "next";
import { SITE_NAME, SITE_URL } from "./title";

type BuildMetadataArgs = {
  title: string;
  description?: string;
  path: string;
  ogImage?: string;
  noindex?: boolean;
};

// Google SERP genelde 60-70 karakter görüntüler; sonrası `...` ile kesilir.
// Title + " | TurkaDoctor" (14 char) toplamı bu sınırı geçerse suffix atlanır.
const SERP_MAX_TITLE_LENGTH = 60;
const SUFFIX_LENGTH = ` | ${SITE_NAME}`.length;

/**
 * Title sufix politikası: root layout `title.template = "%s | TurkaDoctor"` ile
 * her sayfa otomatik suffix alır. Uzun başlıklarda kesilmeyi önlemek için
 * `title.absolute` döndürerek template'i bypass ediyoruz.
 */
function titleField(title: string): Metadata["title"] {
  if (title.length + SUFFIX_LENGTH > SERP_MAX_TITLE_LENGTH) {
    return { absolute: title };
  }
  return title;
}

export function buildMetadata({
  title,
  description,
  path,
  ogImage,
  noindex,
}: BuildMetadataArgs): Metadata {
  const url = path.startsWith("http") ? path : `${SITE_URL}${path}`;
  const t = titleField(title);
  // openGraph + twitter title'ında suffix'i otomatik manuel ekleyemeyiz
  // (Metadata API SiteName separately, root layout zaten siteName ekliyor)
  return {
    title: t,
    description,
    alternates: { canonical: url },
    robots: noindex ? { index: false, follow: true } : undefined,
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      locale: "tr_TR",
      type: "website",
      images: ogImage ? [{ url: ogImage }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ogImage ? [ogImage] : undefined,
    },
  };
}
