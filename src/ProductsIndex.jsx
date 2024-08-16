export function ProductsIndex({ products }) {
  return (
    <div className="bg-warmGray-100 min-h-screen py-10">
      <h1 className="text-3xl font-bold text-warmGray-800 text-center mb-8">All Products</h1>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={product.primary_image_url} alt={product.name} className="w-full h-64 object-cover" />
            <div className="p-6">
              <h2 className="text-xl font-semibold text-warmGray-900 mb-2">{product.name}</h2>
              <p className="text-warmGray-700 mb-4">Price: ${product.price}</p>
              <p className="text-warmGray-600">{product.description}</p>
              {/* <button onClick={() => onShow(product)}>More info</button> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
