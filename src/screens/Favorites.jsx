import { useEffect } from "react";
import mainImage from "../assets/editedring.jpg";

import { useUser, SignInButton } from "@clerk/clerk-react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchUserFavorites,
  removeFromFavorites,
} from "../redux/favoritesCartSlice";
import { convertPrice } from "../utils/helpers";

const Favorites = () => {
  const { user, isSignedIn } = useUser();
  const dbId = user?.publicMetadata?.dbId;
  const dispatch = useDispatch();
  const { favorites, loading } = useSelector((state) => state.favoritesCart);
  const { currency, country, INR_rate, GBP_rate } = useSelector(
    (state) => state.localization
  );

  // Dummy data for testing
  const dummyFavorites = [
	
		{
		  favorite_id: 1,
		  image: "https://via.placeholder.com/150",
		  diamond_name: "Round Brilliant Diamond",
		  diamond_price: 150,
		  product_type: 2,
		},
		{
		  favorite_id: 2,
		  image: "https://via.placeholder.com/150",
		  diamond_name: "Princess Cut Diamond",
		  diamond_price: 500,
		  product_type: 2,
		},
		{
		  favorite_id: 3,
		  image: "https://via.placeholder.com/150",
		  ring_style_name: "Classic Solitaire Ring",
		  ring_style_price: 300,
		  product_type: 3,
		},
		{
		  favorite_id: 4,
		  image: "https://via.placeholder.com/150",
		  ring_style_name: "Vintage Diamond Ring",
		  ring_style_price: 550,
		  product_type: 3,
		},
		{
		  favorite_id: 5,
		  image: "https://via.placeholder.com/150",
		  pendant_name: "Heart-Shaped Diamond Pendant",
		  pendant_price: 350,
		  product_type: 4,
		},
		{
		  favorite_id: 6,
		  image: "https://via.placeholder.com/150",
		  pendant_name: "Infinity Diamond Pendant",
		  pendant_price: 400,
		  product_type: 4,
		},
		{
		  favorite_id: 7,
		  image: "https://via.placeholder.com/150",
		  ring_style_name: "Rose Gold Engagement Ring",
		  ring_style_price: 450,
		  product_type: 3,
		},
		{
		  favorite_id: 8,
		  image: "https://via.placeholder.com/150",
		  pendant_name: "Teardrop Diamond Pendant",
		  pendant_price: 420,
		  product_type: 4,
		}
	  ];
	  
  useEffect(() => {
    if (isSignedIn && user?.id) {
      dispatch(fetchUserFavorites(dbId));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleRemove = (productId) => {
    dispatch(removeFromFavorites({ userId: dbId, productId }));
    dispatch(fetchUserFavorites(dbId));
  };

  if (!isSignedIn) {
    return (
      <div className="h-80 flex flex-col items-center justify-center bg-gray-50">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          Please log in to view your Favorites
        </h2>
        <SignInButton mode="modal">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            Log In
          </button>
        </SignInButton>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Your Favorites</h1>

      {loading ? (
        <p>Loading favorites...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-2 gap-8">
          {dummyFavorites.map((item) => (
            <div
              key={item.favorite_id}
              className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
            >
              <img
                src={mainImage || "default-image.jpg"}
                className="w-full h-50 object-cover rounded-lg mb-4"
              />
              <h2 className="text-lg font-semibold text-gray-800">
                {item.product_name ||
                  item.diamond_name ||
                  item.ring_style_name ||
                  "Default Product Name"}
              </h2>
              <p className="text-gray-600 mb-4">
                {item.description ||
                  "This is a sample description for the product."}
              </p>
              <p className="text-xl font-bold text-grey-500">
                {currency}
                {convertPrice(
                  item.product_price ||
                    item.diamond_price ||
                    item.ring_style_price ||
                    0, // Provide a default price of 0 if price is missing
                  country,
                  INR_rate,
                  GBP_rate
                )}
              </p>
              <div className="flex space-x-4 mt-4">
                <button className="px-4 py-2 bg-black text-white rounded-md border border-solid border-grey hover:bg-white hover:text-black transition duration-300 ease-in-out">
                  View
                </button>
                <button
                  onClick={() => handleRemove(item.favorite_id)}
                  className="px-4 py-2 bg-white text-black rounded-md hover:bg-black border border-solid border-grey hover:text-white transition duration-300 ease-in-out"
                >
                  Remove from Favorites
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;
