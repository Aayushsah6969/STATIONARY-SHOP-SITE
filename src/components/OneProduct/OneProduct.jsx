import { useState } from "react";
import "./OneProduct.css";
import { useLocation } from "react-router-dom";
import { products } from "../Data/Data";
// import FeaturedProducts from "../FeaturedProducts/FeaturedProducts";

const OneProduct = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [orderDetails, setOrderDetails] = useState({
    productId: "",
    productName: "",
    // Add other order details here
  });

  let location = useLocation();
  let currentId = location.pathname.split("/")[2];
  let currentData = products.find((product) => product.id == currentId);

  const handleBuyNow = () => {
    setOrderDetails({
      productId: currentData.id,
      productName: currentData.title,
      // Add other order details here
    });
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOrderDetails({
      ...orderDetails,
      [name]: value,
    });
  };

  return (
    <>
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        {/* Product details */}
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img
            alt={currentData.title}
            className="lg:w-1/2 w-full h-auto  object-cover object-center rounded"
            src={currentData.images[0]}
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h1 className="text-gray-900 text-3xl font-medium mb-1">
              {currentData.title}
            </h1>
            <p className="leading-relaxed">{currentData.description}</p>
            <p className="leading-relaxed">Brand: {currentData.brand}</p>
            <p className="leading-relaxed">Category: {currentData.category}</p>
            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
              {/* Add options/buttons */}
            </div>
            <div className="flex">
              <span className="font-medium text-2xl text-gray-900">
                Rs. {currentData.price}
              </span>
              <button
                onClick={handleBuyNow}
                className="flex ml-auto text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded"
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>

        {/* Modal for placing order */}
        {isModalOpen && (
          <div className="modal-overlay">
            <div className="modal">
              <span className="modal-close" onClick={handleCloseModal}>
                &times;
              </span>
              <h2>Place Order</h2>
              <form>
 
                  
                {/* <label htmlFor="Name">Name:</label> */}
                <input type="text" placeholder="Your Name" />
          

                
            
               <label htmlFor="Product ID">Product Id:</label>
                <input
                  type="text"
                  name="productId"
                  value={orderDetails.productId}
                  onChange={handleChange}
                  readOnly
                />
                <label htmlFor="Product Name">Product Name:</label>

                <input
                  type="text"
                  name="productName"
                  value={orderDetails.productName}
                  onChange={handleChange}
                  readOnly
                />
               

                {/* <label htmlFor="email">Email:</label> */}
                <input type="email" placeholder="Your email" />

                {/* <label htmlFor="Phone">Phone:</label> */}
                <input type="text" placeholder="YOur Contact Number" />

                {/* <label htmlFor="Address">Address:</label> */}
                <input type="text" placeholder="Your Address" />

                {/* Add other input fields for order details */}
                <button type="submit">Place Order</button>
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
    <div className="featured">
      {/* <FeaturedProducts/> */}
    </div>
    </>
  );
};

export default OneProduct;
