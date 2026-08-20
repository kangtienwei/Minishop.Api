import { useState } from "react";
import type { Product } from "../types/Product";
import {updateProduct,  type UpdateProductRequest,} from "../services/productService";

interface EditProductFormProps {
  product: Product;
  onUpdated: () => void;
  onCancel: () => void;
}

function EditProductForm({
  product,
  onUpdated,
  onCancel,
}: EditProductFormProps) {
    const [name, setName] = useState(product.name);
    const [description, setDescription] = useState(product.description);
    const [price, setPrice] = useState(product.price.toString());
    const [stock, setStock] = useState(product.stock.toString());
    const [isActive, setIsActive] = useState(product.isActive);
    const [error, setError] = useState("");

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) 
    {
      event.preventDefault();
      setError("");

      const updatedProduct: UpdateProductRequest = {
        name,
        description,
        price: Number(price),
        stock: Number(stock),
        isActive,
      };

    try {
      await updateProduct(
        product.id,
        updatedProduct
      );

      onUpdated();
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Failed to update product."
      );
    }
  }

  return (
    <div>
      <h2>Edit Product</h2>

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

        <div>
          <label>
            <input
              type="checkbox"
              checked={isActive}
              onChange={(e) =>
                setIsActive(e.target.checked)
              }
            />

            {" "}Active
          </label>
        </div>

        <br />

        <button type="submit">
          Save
        </button>

        {" "}

        <button
          type="button"
          onClick={onCancel}
        >
          Cancel
        </button>

        {error && <p>{error}</p>}
      </form>
    </div>
  );
}

export default EditProductForm;