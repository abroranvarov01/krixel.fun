export async function POST(req: Request) {
  const clientHeaders: Record<string, string> = {};

  // Собираем все заголовки из запроса браузера
  req.headers.forEach((value, key) => {
    clientHeaders["HTTP_" + key.toUpperCase().replace(/-/g, "_")] = value;
  });

  // Добавляем IP
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("x-real-ip") ||
    "0.0.0.0";
  clientHeaders["REMOTE_ADDR"] = ip;

  const urlencoded = new URLSearchParams();
  urlencoded.append("cmp", "8652947b03cbf186ff6a820910901b3b");
  urlencoded.append("adapi", "2.2");
  urlencoded.append("sv", "18780.3");

  for (const [key, value] of Object.entries(clientHeaders)) {
    urlencoded.append(`headers[${key}]`, String(value));
  }

  const response = await fetch("http://check.magicchecker.com/v2.2/index.php", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: urlencoded,
  });

  const text = await response.text();
  return new Response(text, { status: response.status });
}
