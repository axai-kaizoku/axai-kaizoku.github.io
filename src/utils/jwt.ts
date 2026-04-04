export function decodeJWT(token: string) {
  const payloadBase64Url = token.split(".")[1];

  if (payloadBase64Url === undefined) return;

  const payloadBase64 = payloadBase64Url
    .replace(/-/g, "+")
    .replace(/_/g, "/")
    .padEnd(
      payloadBase64Url.length + ((4 - (payloadBase64Url.length % 4)) % 4),
      "="
    );

  const payloadJson = atob(payloadBase64);
  return JSON.parse(payloadJson);
}
