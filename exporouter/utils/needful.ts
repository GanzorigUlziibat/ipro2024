// utils/needful.ts

export interface ResponseInterface {
  action: string;
  resultCode: number;
  resultMessage: string;
  size: number;
  curdate: string;
  data: any[]; // You can replace `any` with a more specific type
}

type FetchDataParams = {
  url: string;
  body: object;
  method?: "GET" | "POST" | "PUT" | "DELETE"; // default to POST
};

export const fetchData = async ({
  url,
  body,
  method = "POST",
}: FetchDataParams): Promise<ResponseInterface> => {
  const response = await fetch(url, {
    method,
    headers: { "Content-Type": "application/json" },
    body: method !== "GET" ? JSON.stringify(body) : undefined,
  });

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  const result: ResponseInterface = await response.json();
  return result;
};
