export function ProductsIndex({ products }) {
  return (
    <div>
      <h1>All Products</h1>
      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>

          <p>Price: {product.price}</p>
          <p>Description {product.description}</p>
          {/* <button onClick={() => onShow(product)}>More info</button> */}
          <img src={product.primary_image_url} />
        </div>
      ))}
    </div>
  );
}
