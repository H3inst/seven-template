export function env(key: string): string {
    return process.env[key] ?? "";
}
