import { useEffect, useState } from "react";
import Login from "./components/Login";
import ProductForm from "./components/ProductForm";
import ProductList from "./components/ProductList";
import EditProductForm from "./components/EditProductForm";

import type { Product } from "./types/Product";

import {
  getProducts,
  deleteProduct,
} from "./services/productService";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    !!localStorage.getItem("token")
  );

  const [products, setProducts] = useState<Product[]>([]);

  const [editingProduct, setEditingProduct] =
    useState<Product | null>(null);

  const [error, setError] = useState("");

  const role = localStorage.getItem("role");

  async function loadProducts() {
    try {
      setError("");

      const data = await getProducts();

      setProducts(data);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Failed to load products."
      );
    }
  }

  useEffect(() => {
    if (isLoggedIn) {
      loadProducts();
    }
  }, [isLoggedIn]);

  function handleLoginSuccess() {
    setIsLoggedIn(true);
  }

  function handleLogout() {
    localStorage.removeItem("token");
    localStorage.removeItem("role");

    setIsLoggedIn(false);
  }

  async function handleDelete(id: number) {
    const confirmed = window.confirm(
      "Are you sure you want to delete this product?"
    );

    if (!confirmed) {
      return;
    }

    try {
      await deleteProduct(id);

      await loadProducts();
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Failed to delete product."
      );
    }
  }

  if (!isLoggedIn) {
    return (
      <Login
        onLoginSuccess={handleLoginSuccess}
      />
    );
  }

  const isAdmin = role === "Admin";

  return (
  <div className="app">
    <header>
      <h1>MiniShop</h1>

      <div>
        Logged in as: <strong>{role}</strong>

        {" "}

        <button onClick={handleLogout}>
          Logout
        </button>
      </div>
    </header>

    <main>
      {isAdmin && !editingProduct && (
        <ProductForm
          onProductCreated={loadProducts}
        />
      )}

      {isAdmin && editingProduct && (
        <EditProductForm
          product={editingProduct}
          onUpdated={async () => {
            setEditingProduct(null);
            await loadProducts();
          }}
          onCancel={() => {
            setEditingProduct(null);
          }}
        />
      )}

      {error && <p>{error}</p>}

      <ProductList
        products={products}
        isAdmin={isAdmin}
        onEdit={setEditingProduct}
        onDelete={handleDelete}
      />
    </main>
  </div>
);
}

export default App;