import { randomUUID } from "node:crypto";
import { mkdir, readFile, rename, rm, writeFile } from "node:fs/promises";
import { dirname } from "node:path";
import { isTokenData } from "./token.ts";
import type { TokenCached } from "./types/index.ts";

export async function writeCache(
  destination: string,
  data: string,
): Promise<void> {
  const dir = dirname(destination);
  await mkdir(dir, {
    recursive: true,
    mode: 0o700,
  });

  const tmpDir = `${destination}.${randomUUID()}.tmp`;
  try {
    await writeFile(tmpDir, data, {
      mode: 0o600,
      encoding: "utf-8",
      flag: "wx",
    });
    await rename(tmpDir, destination);
  } finally {
    rm(tmpDir, {
      force: true,
    }).catch(() => {});
  }
}

export async function readCache(dir: string): Promise<TokenCached | null> {
  try {
    const content = await readFile(dir, "utf-8");
    const data = JSON.parse(content);

    return isTokenData(data) ? data : null;
  } catch (error) {
    if (error instanceof Error && "code" in error && error.code === "ENOENT") {
      return null;
    }
    throw new Error(`Error while reading "${dir}": ${error}`, { cause: error });
  }
}

export async function deleteCache(path: string): Promise<void> {
  await rm(path, { force: true });
}
