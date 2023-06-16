export function safeToString(x: unknown): string {
  if (!x) return String(x);
  switch (typeof x) {
    case 'object':
      if (x.toString() != '[object Object]') return x.toString();
      return JSON.stringify(x);
    case 'function':
      return x.toString();
    default:
      return String(x);
  }
}
