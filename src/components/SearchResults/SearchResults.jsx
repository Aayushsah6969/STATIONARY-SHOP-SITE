import { useParams, Link } from 'react-router-dom';
import { products } from "../Data/Data"

const SearchResults = () => {
  const { query } = useParams();
  const lowercasedQuery = query.toLowerCase();

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(lowercasedQuery)
  );

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Search Results for "{query}"
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <Link to={`/shop/${product.id}`} key={product.id} className="group relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img
                    src={product.thumbnail}
                    alt={product.title}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.title}
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{product.brand}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">Rs.{product.price}</p>
                </div>
              </Link>
            ))
          ) : (
            <p className="text-sm text-gray-500">No products found for "{query}".</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
