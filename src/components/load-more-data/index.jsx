import "./styles.css";
import useLoadMoreData from "../../hooks/useLoadMoreData";

// file 1 component UI layer

export default function LoadMoreData() {
  const { data, loading, error, disableButton, loadMore } = useLoadMoreData();

  if (loading) {
    return <div>Loading data ! Please wait.</div>;
  }

  if (error) return <div>Error loading products</div>;

  return (
    <div className="load-more-container">
      <div className="product-container">
        {data && data.length
          ? data.map((item) => (
              <div
                className="product"
                key={item.id}
              >
                <img
                  src={item.thumbnail}
                  alt={item.title}
                />
                <p>{item.title}</p>
              </div>
            ))
          : null}
      </div>
      <div className="button-container">
        <button
          disabled={disableButton}
          onClick={loadMore}
        >
          Load More Products
        </button>
        {disableButton ? <p>You have reached to 100 products</p> : null}
      </div>
    </div>
  );
}
