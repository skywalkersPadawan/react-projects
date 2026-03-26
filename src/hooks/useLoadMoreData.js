import { useEffect, useState } from "react";

// Custom hook to fetch products and manage load-more pagination
// Move data fetching and side-effect logic into hook file for reusability; keep UI-related state in the component
export default function useLoadMoreData() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [disableButton, setDisableButton] = useState(false);
  const [error, setError] = useState(null);

  // move logic here
  async function fetchProducts() {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`,
      );

      const result = await response.json();

      if (result?.products?.length) {
        setProducts((prevData) => [...prevData, ...result.products]);
        setLoading(false);
      }
    } catch (e) {
      setError(e);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, [count]);

  useEffect(() => {
    if (products && products.length === 100) setDisableButton(true);
  }, [products]);

  return {
    data: products,
    loading,
    error,
    disableButton,
    loadMore: () => setCount((prev) => prev + 1),
  };
}
