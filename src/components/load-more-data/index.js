import { useState, useEffect } from "react";
import "./styles.css";

export default function LoadMoreData() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [disableBtn, setDisableBtn] = useState(false);

  async function fetchProducts() {
    try {
      setLoading(true);
      const res = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`
      );
      const data = await res.json();

      if (data) {
        setProducts((prev) => [...prev, ...data.products]);

        setLoading(false);
      }
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, [count]);

  useEffect(() => {
    if (products && products.length === 100) setDisableBtn(true);
  }, [products]);

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="load-container">
      <div className="product-container">
        {products && products.length
          ? products.map((product, i) => {
              return (
                <div className="product" key={i}>
                  {product.thumbnail && (
                    <img src={product.thumbnail} alt={product.title} />
                  )}
                  <p>{product.title}</p>
                </div>
              );
            })
          : null}
      </div>
      <div className="button-container">
        <button disabled={disableBtn} onClick={() => setCount(count + 1)}>
          Load More Data
        </button>
        {disableBtn ? <p>You have reached the max allowed products</p> : null}
      </div>
    </div>
  );
}
