/**
 * DB client. Neon production'da, lokal/dev'de standart postgres driver.
 * Bu dosya sadece Server Component / Route Handler / Server Action içinde import edilmeli.
 */

import { drizzle as drizzleNeon } from "drizzle-orm/neon-http";
import { drizzle as drizzlePg } from "drizzle-orm/postgres-js";
import { neon } from "@neondatabase/serverless";
import postgres from "postgres";

import * as schema from "./schema";

const DATABASE_URL = process.env.DATABASE_URL;

if (!DATABASE_URL) {
  // Dev'de schema migration yazılıp test edilmeden DB URL şart değil — uyarı yeterli.
  // Routelar DB'ye dokunmadan önce process.env.DATABASE_URL kontrolü yapmalı.
  console.warn(
    "[db] DATABASE_URL tanımlı değil. DB kullanan route'lar runtime'da hata verir.",
  );
}

function createDb() {
  if (!DATABASE_URL) {
    // Boş bir tablo proxy döndür — runtime'da kullanılırsa hata fırlat.
    return null as unknown as ReturnType<typeof drizzlePg>;
  }

  // Neon URL'leri içerir bu pattern — production'da serverless driver
  if (DATABASE_URL.includes("neon.tech")) {
    const sql = neon(DATABASE_URL);
    return drizzleNeon({ client: sql, schema, casing: "snake_case" });
  }

  // Lokal Postgres
  const client = postgres(DATABASE_URL, { prepare: false });
  return drizzlePg({ client, schema, casing: "snake_case" });
}

export const db = createDb();
export { schema };
