import { useDispatch, useSelector } from "react-redux";
import Image from "../assets/ring4.jpg";
import { useEffect, useState } from "react";
import { getProduct } from "../utils/api";
import { convertPrice } from "../utils/helpers";
import { useNavigate, useParams } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";
import { addToCart } from "../redux/favoritesCartSlice";
import ReviewsList from "../components/ReviewsList";

function Product() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const { user } = useUser();
  const dbId = user?.publicMetadata?.dbId;
  const { currency, country, INR_rate, GBP_rate } = useSelector(
    (state) => state.localization
  );
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getProduct(id).then((res) => {
      setProduct(res.data[0]);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const [activeTab, setActiveTab] = useState("earring");

  const handleClick = () => {
    dispatch(
      addToCart({
        userId: dbId,
        productId: product.product_id,
        diamondId: null,
        ringStyleId: null,
        quantity: 1,
      })
    );
    navigate("/cart");
  };

  return (
    <>
      <button
        className="justify-start w-full flex ms-20"
        onClick={() => navigate("/product")}
      >
        {"< "}
        Go back to Products
      </button>
      <div className="flex flex-col md:flex-row items-center gap-8">
        {/* Left Side - Image Grid */}
        <div className="w-full md:w-3/5 grid grid-cols-2 gap-4">
          <img
            src={Image}
            alt="Ring 1"
            className="w-full h-auto rounded-lg shadow-md"
          />
          <img
            src={Image}
            alt="Ring 2"
            className="w-full h-auto rounded-lg shadow-md"
          />
          <img
            src={Image}
            alt="Ring 3"
            className="w-full h-auto rounded-lg shadow-md"
          />
          <img
            src={Image}
            alt="Ring 4"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Right Side - Content */}
        <div className="w-full md:w-2/5 space-y-4">
          <h2 className="text-2xl font-semibold">{product?.name}</h2>
          <p className="text-gray-600">{product?.description}</p>
          <div className="text-xl font-bold text-gray-900">
            {currency}
            {convertPrice(product?.total_cost, country, INR_rate, GBP_rate)}
          </div>
          {/* <div className="text-lg text-red-500 font-semibold">$435</div> */}
          <p className="text-sm text-gray-500">(Setting Price)</p>
          <div className="border-t pt-4 space-y-2 text-gray-700">
            <p>
              <strong>Flexible Payment Options:</strong> Buy now pay later with{" "}
              <span className="text-blue-500 cursor-pointer">Klarna</span>{" "}
              <span className="text-sm text-gray-500">Learn More</span>
            </p>
            <button
              onClick={handleClick}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700"
            >
              Add to Cart
            </button>
          </div>
          <div className="text-sm text-gray-600">
            <p>
              <strong>Real-Time Ring Inspection</strong>
            </p>
            <p>
              <strong>Ships by:</strong> Friday, February 28
            </p>
          </div>
          <div className="text-sm text-gray-700 border-t pt-4">
            <p className="font-semibold">Risk-Free Retail</p>
            <p>✔ Free 2-Day Shipping, Hassle-Free Returns</p>
          </div>
        </div>
      </div>

      {/* Product Description Section */}
      <div className="mt-8 p-6 bg-white shadow-lg rounded-2xl">
        <h3 className="text-2xl font-semibold mb-4 text-gray-900">
          Product Description
        </h3>
        <div className="">
          <p className="text-gray-700 font-medium">SKU: 28008W141B</p>
          <p className="text-gray-600 mt-2">
            Two perfectly matched round brilliant diamonds set into a refined
            14K white gold four-prong mounting with standard friction backs.
          </p>
          <div className="bg-yellow-100 p-3 rounded-lg my-4 border-l-4 border-yellow-500">
            <p className="text-yellow-800 font-medium">
              <strong>DISCLAIMER:</strong> Earring backings are provided as
              shown and cannot be altered.
            </p>
          </div>

          {/* Tabs Navigation */}
          <div className="flex justify-start border-b pb-2 relative">
            <button
              className={`px-6 py-2 text-gray-600 font-semibold transition-all duration-300 rounded-t-lg ${
                activeTab === "earring"
                  ? "text-gray-900 border-b-4 border-gray-900"
                  : "hover:text-gray-900 hover:border-b-4 hover:border-gray-300"
              }`}
              onClick={() => setActiveTab("earring")}
            >
              Earring Information
            </button>

            <button
              className={`px-6 py-2 text-gray-600 font-semibold transition-all duration-300 rounded-t-lg ${
                activeTab === "setting"
                  ? "text-gray-900 border-b-4 border-gray-900"
                  : "hover:text-gray-900 hover:border-b-4 hover:border-gray-300"
              }`}
              onClick={() => setActiveTab("setting")}
            >
              Setting Information
            </button>

            {/* Decorative Highlight Bar */}
           
          </div>

          {/* Tab Content */}
          <div className="mt-4">
            {activeTab === "earring" && (
              <table className="w-full border-collapse text-left">
                <tbody>
                  {[
                    ["Metal", "14K White Gold"],
                    ["Backing", "Push Back"],
                    ["Rhodium Finish", "Yes"],
                    ["Diamond Shape", "Round"],
                    ["Quantity", "2"],
                    ["Average Total Carat", "0.25"],
                    ["Average Color", "H-I"],
                    ["Average Clarity", "SI1-SI2"],
                    ["Setting Type", "Prong"],
                  ].map(([label, value], index) => (
                    <tr
                      key={label}
                      className={`${
                        index % 2 === 0 ? "bg-gray-100" : "bg-white"
                      }`}
                    >
                      <td className="py-2 px-4 font-semibold text-gray-700">
                        {label}
                      </td>
                      <td className="py-2 px-4 text-gray-700">{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}

            {activeTab === "setting" && (
              <table className="w-full border-collapse text-left">
                <tbody>
                  {[
                    ["Metal", "14K White Gold"],
                    ["Width", "2.00mm"],
                    ["Rhodium Finish", "Yes"],
                  ].map(([label, value], index) => (
                    <tr
                      key={label}
                      className={`${
                        index % 2 === 0 ? "bg-gray-100" : "bg-white"
                      }`}
                    >
                      <td className="py-2 px-4 font-semibold text-gray-700">
                        {label}
                      </td>
                      <td className="py-2 px-4 text-gray-700">{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>

      {/* Reviews List */}
      <ReviewsList product_id={product?.product_id} />
    </>
  );
}

export default Product;
