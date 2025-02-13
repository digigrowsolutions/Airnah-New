// StepOne.jsx
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setStep } from '../../redux/ringCustomizationSlice';
import diamondImage from '../../assets/ring2.jpg';
import diamondHoverImage from '../../assets/Wedding-rings.jpg';
import gemstoneImage from '../../assets/ring1.jpg';
import gemstoneHoverImage from '../../assets/Wedding-rings.jpg';

const diamonds = [
  {
    name: "14K White Gold Petite Pavé Engagement Ring (Flush Fit)",
    price: "₹50,000",
    settingPrice: "₹25,000",
    rating: "☆☆☆☆☆",
    reviews: "1,125",
    customize: true,
    image: diamondImage,
    hoverImage: diamondHoverImage
  },
  {
    name: "18K Yellow Gold Solitaire Engagement Ring",
    price: "₹60,000",
    settingPrice: "₹30,000",
    rating: "☆☆☆☆☆",
    reviews: "980",
    customize: true,
    image: diamondImage,
    hoverImage: diamondHoverImage
  },
  {
    name: "Platinum Halo Engagement Ring",
    price: "₹70,000",
    settingPrice: "₹35,000",
    rating: "☆☆☆☆☆",
    reviews: "750",
    customize: true,
    image: diamondImage,
    hoverImage: diamondHoverImage
  },
  {
    name: "14K Rose Gold Three Stone Engagement Ring",
    price: "₹55,000",
    settingPrice: "₹27,500",
    rating: "☆☆☆☆☆",
    reviews: "1,000",
    customize: true,
    image: diamondImage,
    hoverImage: diamondHoverImage
  },
  {
    name: "18K White Gold Channel Set Engagement Ring",
    price: "₹65,000",
    settingPrice: "₹32,500",
    rating: "☆☆☆☆☆",
    reviews: "850",
    customize: true,
    image: diamondImage,
    hoverImage: diamondHoverImage
  },
  {
    name: "14K White Gold Petite Pavé Engagement Ring (Flush Fit)",
    price: "₹50,000",
    settingPrice: "₹25,000",
    rating: "☆☆☆☆☆",
    reviews: "1,125",
    customize: true,
    image: diamondImage,
    hoverImage: diamondHoverImage
  },
  {
    name: "18K Yellow Gold Solitaire Engagement Ring",
    price: "₹60,000",
    settingPrice: "₹30,000",
    rating: "☆☆☆☆☆",
    reviews: "980",
    customize: true,
    image: diamondImage,
    hoverImage: diamondHoverImage
  },
  {
    name: "Platinum Halo Engagement Ring",
    price: "₹70,000",
    settingPrice: "₹35,000",
    rating: "☆☆☆☆☆",
    reviews: "750",
    customize: true,
    image: diamondImage,
    hoverImage: diamondHoverImage
  },
  {
    name: "14K Rose Gold Three Stone Engagement Ring",
    price: "₹55,000",
    settingPrice: "₹27,500",
    rating: "☆☆☆☆☆",
    reviews: "1,000",
    customize: true,
    image: diamondImage,
    hoverImage: diamondHoverImage
  },
  {
    name: "18K White Gold Channel Set Engagement Ring",
    price: "₹65,000",
    settingPrice: "₹32,500",
    rating: "☆☆☆☆☆",
    reviews: "850",
    customize: true,
    image: diamondImage,
    hoverImage: diamondHoverImage
  },
  // Add more diamond products as needed
];
const gemstones = [
  {
    name: "14K White Gold Petite Pavé Engagement Ring (Flush Fit)",
    price: "₹50,000",
    settingPrice: "₹25,000",
    rating: "☆☆☆☆☆",
    reviews: "1,125",
    customize: true,
    image: diamondImage,
    hoverImage: diamondHoverImage
  },
  {
    name: "18K Yellow Gold Solitaire Engagement Ring",
    price: "₹60,000",
    settingPrice: "₹30,000",
    rating: "☆☆☆☆☆",
    reviews: "980",
    customize: true,
    image: diamondImage,
    hoverImage: diamondHoverImage
  },
  {
    name: "Platinum Halo Engagement Ring",
    price: "₹70,000",
    settingPrice: "₹35,000",
    rating: "☆☆☆☆☆",
    reviews: "750",
    customize: true,
    image: diamondImage,
    hoverImage: diamondHoverImage
  },
  {
    name: "14K Rose Gold Three Stone Engagement Ring",
    price: "₹55,000",
    settingPrice: "₹27,500",
    rating: "☆☆☆☆☆",
    reviews: "1,000",
    customize: true,
    image: diamondImage,
    hoverImage: diamondHoverImage
  },
  {
    name: "18K White Gold Channel Set Engagement Ring",
    price: "₹65,000",
    settingPrice: "₹32,500",
    rating: "☆☆☆☆☆",
    reviews: "850",
    customize: true,
    image: diamondImage,
    hoverImage: diamondHoverImage
  },
  // Add more diamond products as needed
];



const filterOptions = [
  { label: "Diamond Type", options: ["All", "Natural", "Lab Grown"] },
  { label: "Budget", options: ["All Budgets"] },
  { label: "Style", options: ["All Ring Styles"] },
  { label: "Shape", options: ["All Diamond Shapes"] },
  { label: "Metal", options: ["All Metal Types"] },
  { label: "Total Carat", options: ["View All"] }
];

const StepOne = () => {
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState('Natural');
  const [cut, setCut] = useState(50);
  const [color, setColor] = useState(50);
  const [carat, setCarat] = useState(50);
  const [clarity, setClarity] = useState(50);
  const [price, setPrice] = useState(50);
  const [value, setValue] = useState(1);
  const labels = ["M", "L", "K", "J", "I", "H", "G", "F", "E", "D"];

  const [showDiamonds, setShowDiamonds] = useState(true);
  const [hoveredImage, setHoveredImage] = useState(null);

  const products = showDiamonds ? diamonds : gemstones;

  return (
    <div className="flex flex-col items-center gap-2 p-2 min-h-screen text-black">
      {/* Tabs */}
      <div className="flex space-x-4 mb-4">
        <button
          onClick={() => setActiveTab('Natural')}
          className={`px-4 py-2 border border-black shadow-md ${activeTab === 'Natural' ? 'bg-black text-white' : 'bg-white text-black'}`}
        >
          Natural
        </button>
        <button
          onClick={() => setActiveTab('Lab Grown')}
          className={`px-4 py-2 border border-black shadow-md ${activeTab === 'Lab Grown' ? 'bg-black text-white' : 'bg-white text-black'}`}
        >
          Lab Grown
        </button>
      </div>

      {/* Filters */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full text-center">
        <div className="p-4">
          <h3 className="text-left">Shape</h3>
          <div className="grid grid-cols-10 gap-2 mt-2 relative">
            {['Round', 'Princess', 'Oval', 'Marquise', 'Cushion', 'Emerald', 'Heart', 'Pear', 'Asscher', 'Radiant'].map((shape, index) => (
              <div key={shape} className="relative">
                <div className="p-2 border border-black rounded text-black text-sm flex items-center justify-center">
                  <i className="fas fa-gem mr-2 text-black"></i> {/* Example icon, you can replace it with your own */}
                  {index + 1}
                </div>
                <span className="absolute bottom-0 left-0 w-full text-center text-black text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">{shape}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="p-4">
          <h3 className="text-left">Cut</h3>
          <div className="mt-2 relative">
            <input
              type="range"
              min="1"
              max="4"
              value={cut}
              onChange={(e) => setCut(e.target.value)}
              className="w-full h-1 bg-black appearance-none cursor-pointer"
              style={{
                background: `linear-gradient(to right, #000000 0%, #000000 ${cut}%, #ffffff ${cut}%, #ffffff 100%)`,
              }}
            />
            <div className="absolute top-full left-0 w-full flex justify-between px-4 text-black text-xs">
              <span>Good</span>
              <span>Very Good</span>
              <span>Ideal</span>
              <span>True Hearts</span>
            </div>
          </div>
        </div>

        <div className="p-4">
          <h3 className="text-left">Color</h3>
          <div className="relative">
            <input
              type="range"
              min="1"
              max="20"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              className="w-full h-2 rounded-lg appearance-none cursor-pointer outline-none"
              style={{
                background: `linear-gradient(to right, #000000 0%, #000000 ${value * 5}%, #ffffff ${value * 5}%, #ffffff 100%)`,
              }}
            />
            <div className="flex justify-between mt-2 text-sm text-gray-700">
              {labels.map((label, index) => (
                <span key={index} className="text-center w-full">
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="p-4">
          <h3 className="text-left">Carat</h3>
          <input
            type="range"
            min="1"
            max="100"
            value={carat}
            onChange={(e) => setCarat(e.target.value)}
            className="w-full h-1 bg-black appearance-none cursor-pointer"
            style={{
              background: `linear-gradient(to right, #000000 0%, #000000 ${carat}%, #ffffff ${carat}%, #ffffff 100%)`,
            }}
          />
          <div className="mt-2 text-black text-xs">
            <span>Selected Carat: {(carat / 100).toFixed(2)} carats</span>
          </div>
        </div>

        <div className="p-4">
          <h3 className="text-left">Clarity</h3>
          <div className="mt-2 relative">
            <input
              type="range"
              min="1"
              max="9"
              value={clarity}
              onChange={(e) => setClarity(e.target.value)}
              className="w-full h-1 bg-black appearance-none cursor-pointer"
              style={{
                background: `linear-gradient(to right, #000000 0%, #000000 ${clarity}%, #ffffff ${clarity}%, #ffffff 100%)`,
              }}
            />
            <div className="absolute top-full left-0 w-full flex justify-between px-4 text-black text-xs">
              <span>I1</span>
              <span>SI2</span>
              <span>SI1</span>
              <span>VS2</span>
              <span>VS1</span>
              <span>VVS2</span>
              <span>VVS1</span>
              <span>IF</span>
              <span>FL</span>
            </div>
          </div>
        </div>

        <div className="p-4">
          <h3 className="text-left">Price</h3>
          <input
            type="range"
            min="1"
            max="100"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full h-1 bg-black appearance-none cursor-pointer"
            style={{
              background: `linear-gradient(to right, #000000 0%, #000000 ${price}%, #ffffff ${price}%, #ffffff 100%)`,
            }}
          />
          <div className="mt-2 text-black text-xs">
            <span>Selected Price: ${price * 10}</span>
          </div>
        </div>
      </div>

      {/* Next Step Button */}
      <button
        onClick={() => dispatch(setStep(2))}
        className="px-6 py-2 bg-black text-white shadow-md hover:bg-gray-700"
      >
        Next Step
      </button>
      <div className="min-h-screen flex flex-col items-center">
          

            

            

            <main className="flex-1 w-full  p-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                    {products.map((product, index) => (
                        <div key={index} className="bg-white shadow-lg text-center transition-transform transform hover:scale-105 hover:shadow-xl border border-[#be9080]">
                            <img
                                src={hoveredImage === index ? product.hoverImage : product.image}
                                alt={product.name}
                                className="w-full h-72 object-cover border-b border-[#be9080] transition duration-1000 ease-in-out"
                                onMouseEnter={() => setHoveredImage(index)}
                                onMouseLeave={() => setHoveredImage(null)}
                            />
                            <div className="p-4">
                                <h2 className="text-xl font-light mb-2 text-[#be9080]">{product.name}</h2>
                                {showDiamonds ? (
                                    <>
                                        <p className="text-[#be9080] mb-4 text-lg font-light">{product.price}</p>
                                        <p className="text-[#be9080] mb-4 text-sm font-light">Setting Price: {product.settingPrice}</p>
                                        <p className="text-[#be9080] mb-4 text-sm font-light">{product.rating} ({product.reviews})</p>
                                    </>
                                ) : (
                                    <>
                                        <p className="text-[#be9080] mb-4 text-lg font-light">Total carat weight: {product.totalCaratWeight}</p>
                                        <p className="text-[#be9080] mb-4 text-lg font-light">{product.price}</p>
                                        <p className="text-[#be9080] mb-4 text-sm font-light">SKU: {product.sku}</p>
                                        <p className="text-[#be9080] mb-4 text-sm font-light">{product.gemstone}</p>
                                    </>
                                )}
                                {product.customize && (
                                    <a href="#" className="inline-block text-[#be9080] underline hover:text-[#a07060] transition">Customize</a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </main>

       
        </div>
    </div>
  );
};

export default StepOne;