import { loadEnvFile } from "node:process";
import type { Credentials } from "./types/index.ts";

loadEnvFile()

export function getCredentials(envKeys: Record<keyof Credentials, string>): Credentials {
    const creds: Partial<Credentials> = {};
    const missing: string[] = [];

    for (const key of Object.keys(envKeys) as (keyof Credentials)[]) {
        const envName = envKeys[key];
        const value = process.env[envName];

        value ? creds[key] = value : missing.push(envName);
    }


    if (missing.length > 0)
        throw new Error(`Missing environment variables: ${missing.join(', ')}`);

    return creds as Credentials;
}