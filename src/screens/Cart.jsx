import { useEffect, useState } from "react";
import mainImage from "../assets/editedring.jpg";
import overlayImage from "../assets/download.png";
import { FaGem, FaRing } from "react-icons/fa"; // Icons for Diamond & Ring

import { useUser, SignInButton } from "@clerk/clerk-react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchUserCartItems,
  removeFromCart,
} from "../redux/favoritesCartSlice";
import { convertPrice } from "../utils/helpers";
import {
  setCustomization,
  setShowDiamond,
  setShowRing,
} from "../redux/ringCustomizationSlice";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [selectedSize, setSelectedSize] = useState("6"); // Default ring size

  const [productImage, setProductImage] = useState(mainImage);
  const [overlay, setOverlay] = useState(overlayImage);

  const handleImageSwap = () => {
    setProductImage(overlay);
    setOverlay(productImage);
  };

  const { user, isSignedIn } = useUser();
  const { currency, country, INR_rate, GBP_rate } = useSelector(
    (state) => state.localization
  );
  const dbId = user?.publicMetadata?.dbId;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cartItems, loading } = useSelector((state) => state.favoritesCart);

  useEffect(() => {
    if (isSignedIn && dbId) {
      // dispatch(fetchUserCartItems(dbId));
    }
  }, [isSignedIn, dbId]);

  const handleRemove = (productId) => {
    // dispatch(removeFromCart({ userId: dbId, productId }));
    // dispatch(fetchUserCartItems(dbId));
  };

  const handleView = (item) => {
    if (item.product_id !== null) {
      // navigate(`/products/${item.product_id}`);
    } else {
      // dispatch(setCustomization({
      //   diamond: { product_id: item.diamond_id, diamond_price: item.diamond_price },
      //   ring: { product_id: item.ring_style_id, ring_price: item.ring_style_price },
      //   total_cost: +item.diamond_price + +item.ring_style_price,
      // }));
      // dispatch(setShowDiamond(true));
      // dispatch(setShowRing(true));
      // navigate('/customize');
    }
  };

  const staticCartItems = [
    {
      product_id: "1",
      product_name: "Engagement ring",
      product_image: "https://example.com/product1.jpg",
      product_price: 100,
      cart_id: "cart1",
    },
  ];

  if (!isSignedIn) {
    return (
      <div className="h-80 flex flex-col items-center justify-center bg-gray-50">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          Please log in to view your cart
        </h2>
        <SignInButton mode="modal">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition  border border-solid border-gray-300">
            Log In
          </button>
        </SignInButton>
      </div>
    );
  }

  return (
    <div className=" p-8 grid grid-cols-[70%_30%] gap-2">
      <div className="bg-white  rounded-lg overflow-hidden px-8   ">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">
          My Cart (
          {staticCartItems.length === 1
            ? `${staticCartItems.length} Item`
            : `${staticCartItems.length} Items`}
          )
        </h1>

        {loading ? (
          <p>Loading Cart...</p>
        ) : staticCartItems.length === 0 ? (
          <p className="text-gray-600 p-4">Your Cart is empty.</p>
        ) : (
          <div className="grid grid-cols-1 gap-4">
            {staticCartItems.map((item) => (
              <div key={item.cart_id} className="p-4 border-b">
                <div className="flex gap-4">
                  {/* Product Image and Info */}
                  <div className="w-1/3 relative group cursor-pointer">
                    <div className="relative w-full h-50 group">
                      {/* Main Product Image */}
                      <img
                        src={productImage} // Use the updated productImage state
                        alt="Product"
                        className="w-50 h-50 object-cover rounded-md mb-2 group-hover:grayscale-0 transition duration-300"
                      />

                      {/* Overlay Image (Clickable to Swap) */}
                      <img
                        src={overlay}
                        alt="Overlay"
                        className="absolute top-2 left-2 w-12 h-12 opacity-80 rounded-md cursor-pointer hover:opacity-100 transition duration-200"
                        onClick={handleImageSwap} // Ensure it's correctly triggering
                      />
                    </div>
                    <h2 className="text-lg  text-gray-800  ">
                      {item.product_name || "Default Product Name"}
                    </h2>
                  </div>
                  {/* Buttons */}

                  {/* Diamond & Ring Info */}
                  <div className="w-2/3">
                    <div className="grid grid-cols-1 gap-4">
                      {/* Diamond */}
                      <div>
                        <h2 className="text-lg font-semibold text-gray-800 flex items-center  gap-2">
                          <FaGem className="text-grey" />
                          {item.diamond_name || "IGI 1.00 Carat Round Diamond"}
                        </h2>
                        <p className="text-gray-600 text-sm">
                          {item.diamond_description ||
                            "H Color SI1 Clarity Excellent Cut"}
                        </p>
                        <p className="text-xl font-bold text-gray-500">
                          {currency}
                          {convertPrice(
                            item.diamond_price || 0,
                            country,
                            INR_rate,
                            GBP_rate
                          )}
                        </p>
                        <button className="text-blue-600 text-sm underline hover:text-blue-800 transition">
                          Change
                        </button>
                      </div>

                      {/* Ring */}
                      <div>
                        <h2 className="text-lg font-semibold text-gray-800 flex items-center  gap-2">
                          <FaRing className="text-grey" />
                          {item.ring_style_name ||
                            "14K White Gold Petite Pavé Engagement Ring (Flush Fit)"}
                        </h2>
                        <p className="text-gray-600 text-sm">
                          {item.ring_description || "1.50 Total Carat Weight"}
                        </p>
                        <p className="text-xl font-bold text-gray-500">
                          {currency}
                          {convertPrice(
                            item.ring_style_price || 0,
                            country,
                            INR_rate,
                            GBP_rate
                          )}
                        </p>
                        <button className="text-blue-600 text-sm underline hover:text-blue-800 transition">
                          Change
                        </button>

                        {/* Ring Size Selection */}
                        <div className="flex flex-wrap gap-2 mt-2">
                          {["4", "5", "6", "7", "8", "9", "10", "11", "12"].map(
                            (size) => (
                              <button
                                key={size}
                                onClick={() => setSelectedSize(size)}
                                className={` py-4 px-6 text-sm border rounded-md transition ${
                                  selectedSize === size
                                    ? "bg-black text-white border-black"
                                    : "bg-white text-black border-gray-400 hover:bg-gray-100"
                                }`}
                              >
                                {size}
                              </button>
                            )
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-start mt-4">
                      <button
                        onClick={() => handleView(item)}
                        className="w-1/3 mx-1 py-2 bg-black text-white rounded-md  hover:bg-gray-800 transition"
                      >
                        View
                      </button>
                      <button
                        onClick={() => handleRemove(item.cart_id)}
                        className="w-1/3 mx-1 py-2 bg-white text-black rounded-md border  border-black  hover:bg-black hover:text-white transition"
                      >
                        Remove from Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="bg-white shadow-md rounded-lg overflow-hidden border border-solid border-gray-300 px-4 py-4 w-full max-w-md">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Summary</h2>

        {/* Subtotal */}
        <div className="flex justify-between items-center mb-3">
          <p className="text-lg font-medium text-gray-700">Subtotal</p>
          <p className="text-xl font-semibold text-gray-900">$1,970</p>
        </div>

        {/* Shipping */}
        <div className="flex justify-between items-center mb-3">
          <p className="text-lg font-medium text-gray-700">
            US & Int. Shipping
          </p>
          <p className="text-xl font-semibold text-gray-900">Free</p>
        </div>

        {/* Taxes */}
        <div className="flex justify-between items-center mb-3">
          <p className="text-lg font-medium text-gray-700">
            Taxes/Duties Estimate
          </p>
          <p className="text-xl font-semibold text-gray-900">$TBD</p>
        </div>

        {/* Promo Code Input */}
        <div className="mb-3">
          <p className="text-lg font-medium text-gray-700 mb-1">Promo Code</p>
          <input
            type="text"
            placeholder="Enter code"
            className="w-full px-3 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800"
          />
        </div>

        {/* Total */}
        <div className="flex justify-between items-center border-t pt-3 mb-3">
          <p className="text-lg font-semibold text-gray-900">Total</p>
          <p className="text-xl font-semibold text-gray-900">$1,970</p>
        </div>

        {/* Interest-Free Payments */}
        <div className="flex justify-between items-center mb-3">
          <p className="text-lg font-medium text-gray-700">
            3 Interest-Free Payments of
          </p>
          <p className="text-xl font-semibold text-gray-900">$656.67</p>
        </div>

        {/* Shipping Notice */}
        <div className="text-gray-600 text-sm mb-4">
          <p className="font-medium">
            Free Overnight Shipping, Hassle-Free Returns
          </p>
          <p>
            Ships by: For an exact shipping date, please select a ring size
            first.
          </p>
        </div>

        {/* Checkout Button (Black & White with Effects) */}
        <button className="w-full py-3 bg-black text-white font-semibold rounded-md transition hover:bg-gray-800 active:scale-95">
          Checkout
        </button>

        {/* Accepted Payment Methods */}
        <div className="mt-6">
          <p className="text-lg font-semibold text-gray-900 mb-2 ">We Accept</p>
          <div className="flex justify-center space-x-2  ">
            <img
              src="https://ion.r2net.com/images/ShoppingCart/pay_by_visa.svg"
              alt="Visa"
              className="h-12 transition"
            />
            <img
              src="https://ion.r2net.com/images/ShoppingCart/pay_by_master_card.svg"
              alt="MasterCard"
              className="h-12  transition"
            />
            <img
              src="https://ion.r2net.com/images/ShoppingCart/pay_by_american_express.svg"
              alt="American Express"
              className="h-12  transition"
            />
            <img
              src="https://ion.r2net.com/images/ShoppingCart/pay_by_discover.svg"
              alt="Discover"
              className="h-12  transition"
            />
            <img
              src="https://ion.r2net.com/images/ShoppingCart/pay_by_paypal.svg"
              alt="PayPal"
              className="h-12  transition"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
