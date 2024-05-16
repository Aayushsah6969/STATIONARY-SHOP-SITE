import { useState } from 'react';
 
const productsPerPage = 16;

import { products } from '../Data/Data';
  
  export default function Example() {
    const [currentPage, setCurrentPage] = useState(1);

  // Calculate the index of the first and last product to be displayed on the current page
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  // Logic to handle pagination
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
    return (
      <div className="bg-white">
      <h1 className="text-center mt-2 text-2xl font-bold">Shop the Stationaries</h1>
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {currentProducts.map((product) => (
            <a key={product.id} href={product.href} className="group">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
            </a>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex  items-center mt-8 overflow-auto">
        <hr />
          <button
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
            className="mr-4 px-4 py-2 bg-blue-500 text-white rounded-md disabled:bg-gray-400"
          >
            Previous
          </button>
          {Array.from({ length: Math.ceil(products.length / productsPerPage) }, (_, i) => i + 1).map((number) => (
            <button
              key={number}
              onClick={() => paginate(number)}
              className={`mx-2 px-4 py-2 rounded-md ${currentPage === number ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800 hover:bg-blue-500 hover:text-white'}`}
            >
              {number}
            </button>
          ))}
          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage === Math.ceil(products.length / productsPerPage)}
            className="ml-4 px-4 py-2 bg-blue-500 text-white rounded-md disabled:bg-gray-400"
          >
            Next
          </button>
        </div>
        <hr />
      </div>
    </div>
    )
  }
  