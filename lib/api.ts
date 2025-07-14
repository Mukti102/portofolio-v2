// lib/api.ts
import axios, { AxiosRequestConfig } from "axios";

// Gunakan env, fallback ke localhost.
const baseURL =
  process.env.NEXT_PUBLIC_API_BASE_URL ?? "https://portofolio.genera.my.id/api";

// 1⃣  Instance utama
export const api = axios.create({
  baseURL,
});

// 2⃣  Interceptor optional → sisipkan Bearer token bila ada
api.interceptors.request.use((config) => {
  if (typeof window !== "undefined") {
    const token = localStorage.getItem("token");
    if (token) config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// 3⃣  Helper fetch generik (mirip swr/fetcher)
export async function fetcher<T = any>(
  url: string,
  config: AxiosRequestConfig = {}
): Promise<T> {
  const { data } = await api.request<T>({ url, ...config });
  return data;
}


export const BASE_URL_IMAGE = "https://portofolio.genera.my.id/storage/"
