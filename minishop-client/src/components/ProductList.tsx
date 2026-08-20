import type { Product } from "../types/Product";

interface ProductListProps {
  products: Product[];
  isAdmin: boolean;
  onEdit: (product: Product) => void;
  onDelete: (id: number) => void;
}

function ProductList({
  products,
  isAdmin,
  onEdit,
  onDelete,
}: ProductListProps) {
  if (products.length === 0) {
    return <p>No products found.</p>;
  }

  return (
    <div className="product-grid">
      {products.map((product) => (
        <div
          className="product-card"
          key={product.id}
        >
          <h3>{product.name}</h3>

          <p className="description">
            {product.description}
          </p>

          <p className="price">
            RM {product.price.toFixed(2)}
          </p>

          <p>
            Stock: {product.stock}
          </p>

          {isAdmin && (
            <div className="product-actions">
              <button
                onClick={() => onEdit(product)}
              >
                Edit
              </button>

              <button
                onClick={() => onDelete(product.id)}
              >
                Delete
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default ProductList;