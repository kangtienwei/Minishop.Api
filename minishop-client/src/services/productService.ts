import type { Product } from "../types/Product";
import { apiFetch } from "./api";

const API_URL = "https://localhost:7039/api/products";


export interface CreateProductRequest {
  name: string;
  description: string;
  price: number;
  stock: number;
}

export async function getProducts(): Promise<Product[]> {
  const response = await apiFetch(API_URL);

  if (!response.ok) {
    throw new Error("Failed to load products.");
  }

  return await response.json();
}

export async function createProduct(
  product: CreateProductRequest
): Promise<Product> {
  const response = await apiFetch(API_URL, {
    method: "POST",
    body: JSON.stringify(product),
  });

  if (!response.ok) {
    throw new Error("Failed to create product.");
  }

  return await response.json();
}

export interface UpdateProductRequest {
  name: string;
  description: string;
  price: number;
  stock: number;
  isActive: boolean;
}

export async function updateProduct(
  id: number,
  product: UpdateProductRequest
): Promise<void> {
  const response = await apiFetch(`${API_URL}/${id}`, {
    method: "PUT",
    body: JSON.stringify(product),
  });

  if (!response.ok) {
    throw new Error("Failed to update product.");
  }
}

export async function deleteProduct(
  id: number
): Promise<void> {
  const response = await apiFetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Failed to delete product.");
  }
}