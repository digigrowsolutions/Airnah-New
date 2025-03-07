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
      <div className="mt-8 p-6">
        <h3 className="text-2xl font-semibold mb-4">Product Description</h3>
        <div className="border p-4 rounded-lg">
          <p className="text-gray-700">SKU: 28008W141B</p>
          <p className="text-gray-700">
            Two perfectly matched round brilliant diamonds set into a refined
            14K white gold four prong mounting with standard friction backs.
          </p>
          <div className="bg-yellow-200 p-3 rounded-lg my-4">
            <p className="text-yellow-800 font-light">
              <strong>DISCLAIMER:</strong> Earring backings are provided as
              shown and cannot be altered.
            </p>
          </div>
          <h4 className="text-lg font-semibold mt-4">Earring Information</h4>
          <table className="w-full mt-2">
            <tbody>
              <tr className="border-b">
                <td className="py-2 font-semibold text-gray-700">Metal</td>
                <td className="py-2 text-gray-700">14K White Gold</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 font-semibold text-gray-700">Backing</td>
                <td className="py-2 text-gray-700">Push Back</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 font-semibold text-gray-700">
                  Rhodium Finish
                </td>
                <td className="py-2 text-gray-700">Yes</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 font-semibold text-gray-700">
                  Diamond Shape
                </td>
                <td className="py-2 text-gray-700">Round</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 font-semibold text-gray-700">Quantity</td>
                <td className="py-2 text-gray-700">2</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 font-semibold text-gray-700">
                  Average Total Carat
                </td>
                <td className="py-2 text-gray-700">0.25</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 font-semibold text-gray-700">
                  Average Color
                </td>
                <td className="py-2 text-gray-700">H-I</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 font-semibold text-gray-700">
                  Average Clarity
                </td>
                <td className="py-2 text-gray-700">SI1-SI2</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 font-semibold text-gray-700">
                  Setting Type
                </td>
                <td className="py-2 text-gray-700">Prong</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Reviews List */}
      <ReviewsList product_id={product?.product_id} />
    </>
  );
}

export default Product;
