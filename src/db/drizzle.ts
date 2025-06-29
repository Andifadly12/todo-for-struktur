import { drizzle } from "drizzle-orm/better-sqlite3";
import Database from "better-sqlite3";

// Koneksi ke SQLite
const sqlite = new Database("sqlite.db");
export const db = drizzle(sqlite);

// Spam 50 data dummy
