import { useState } from "react";
import {
  createProduct,
  type CreateProductRequest,
} from "../services/productService";

interface ProductFormProps {
  onProductCreated: () => void;
}

function ProductForm({
  onProductCreated,
}: ProductFormProps) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    setError("");

    const product: CreateProductRequest = {
      name,
      description,
      price: Number(price),
      stock: Number(stock),
    };

    try {
      await createProduct(product);

      setName("");
      setDescription("");
      setPrice("");
      setStock("");

      onProductCreated();
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Failed to create product."
      );
    }
  }

  return (
    <div>
      <h2>Add Product</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <br />
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <br />

        <div>
          <label>Description</label>
          <br />
          <textarea
            value={description}
            onChange={(e) =>
              setDescription(e.target.value)
            }
          />
        </div>

        <br />

        <div>
          <label>Price</label>
          <br />
          <input
            type="number"
            step="0.01"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>

        <br />

        <div>
          <label>Stock</label>
          <br />
          <input
            type="number"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
            required
          />
        </div>

        <br />

        <button type="submit">
          Add Product
        </button>

        {error && <p>{error}</p>}
      </form>
    </div>
  );
}

export default ProductForm;