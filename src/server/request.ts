import { Request as ExpressRequest, Response } from "express";

export default function createFetchRequest(req: ExpressRequest, res: Response) {
  const origin = `${req.protocol}://${req.get("host")}`;

  // URL 생성
  const url = new URL(req.originalUrl || req.url, origin);

  const controller = new AbortController();
  res.on("close", () => controller.abort());
  const headers = new Headers();

  // 요청 헤더 설정
  for (const [key, values] of Object.entries(req.headers)) {
    if (values) {
      if (Array.isArray(values)) {
        for (const value of values) {
          headers.append(key, value);
        }
      } else {
        headers.set(key, values);
      }
    }
  }

  const init: RequestInit = {
    method: req.method as string, // req.method의 타입을 string으로 명시
    headers,
    signal: controller.signal,
  };

  // GET 또는 HEAD가 아닌 경우 본문을 JSON 문자열로 변환
  if (req.method !== "GET" && req.method !== "HEAD") {
    init.body = req.body ? JSON.stringify(req.body) : undefined; // req.body가 존재하면 JSON 문자열로 변환
  }

  return new Request(url.href, init);
}
