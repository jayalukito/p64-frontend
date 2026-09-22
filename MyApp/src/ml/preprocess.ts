export function preprocessSms(text: string): string {
  return text
    .trim()
    .replace(/https?:\/\/\S+|www\.\S+/g, " URLTOKEN ")
    .replace(/\S+@\S+/g, " EMAILTOKEN ")
    .replace(/\s+/g, " ");
}