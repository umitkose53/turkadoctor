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

export function buildMetadata({
  title,
  description,
  path,
  ogImage,
  noindex,
}: BuildMetadataArgs): Metadata {
  const url = path.startsWith("http") ? path : `${SITE_URL}${path}`;
  return {
    title,
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
