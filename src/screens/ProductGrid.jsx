import React, { useState } from "react";
import diamondImage from '../assets/ring2.jpg'; // Import the default image from the assets folder
import diamondHoverImage from '../assets/Wedding-rings.jpg'; // Import the hover image from the assets folder
import gemstoneImage from '../assets/ring1.jpg'; // Import the default image for gemstones
import gemstoneHoverImage from '../assets/Wedding-rings.jpg'; // Import the hover image for gemstones

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
    // Add more diamond products as needed
];

const gemstones = [
    {
        name: "Platinum Halo Setting",
        totalCaratWeight: "2.68",
        price: "₹75,000",
        sku: "17973P",
        gemstone: "2.04 carat Sapphire, Oval",
        customize: true,
        image: gemstoneImage,
        hoverImage: gemstoneHoverImage
    },
    {
        name: "14K White Gold Sapphire Engagement Ring",
        totalCaratWeight: "1.50",
        price: "₹60,000",
        sku: "18294W",
        gemstone: "1.20 carat Sapphire, Round",
        customize: true,
        image: gemstoneImage,
        hoverImage: gemstoneHoverImage
    },
    {
        name: "18K Yellow Gold Ruby Engagement Ring",
        totalCaratWeight: "1.80",
        price: "₹65,000",
        sku: "19345Y",
        gemstone: "1.50 carat Ruby, Oval",
        customize: true,
        image: gemstoneImage,
        hoverImage: gemstoneHoverImage
    },
    {
        name: "Platinum Emerald Engagement Ring",
        totalCaratWeight: "2.00",
        price: "₹80,000",
        sku: "20456P",
        gemstone: "1.75 carat Emerald, Rectangular",
        customize: true,
        image: gemstoneImage,
        hoverImage: gemstoneHoverImage
    },
    {
        name: "14K Rose Gold Amethyst Engagement Ring",
        totalCaratWeight: "1.20",
        price: "₹55,000",
        sku: "21567R",
        gemstone: "1.00 carat Amethyst, Oval",
        customize: true,
        image: gemstoneImage,
        hoverImage: gemstoneHoverImage
    },
    // Add more gemstone products as needed
];

const filterOptions = [
    { label: "Diamond Type", options: ["All", "Natural", "Lab Grown"] },
    { label: "Budget", options: ["All Budgets"] },
    { label: "Style", options: ["All Ring Styles"] },
    { label: "Shape", options: ["All Diamond Shapes"] },
    { label: "Metal", options: ["All Metal Types"] },
    { label: "Total Carat", options: ["View All"] }
];

export default function ProductGrid() {
    const [showDiamonds, setShowDiamonds] = useState(true);
    const [hoveredImage, setHoveredImage] = useState(null);

    const products = showDiamonds ? diamonds : gemstones;

    return (
        <div className="min-h-screen bg-white flex flex-col items-center">
            <h1 className="text-3xl font-bold text-black">READY TO SHIP DIAMOND ENGAGEMENT RINGS</h1>
            <p className="text-lg text-black mb-6">Browse our collection of ready to ship diamond engagement rings.</p>

            <div className="flex items-center justify-center my-6">
                <div className="flex space-x-4">
                    <button
                        onClick={() => setShowDiamonds(true)}
                        className={`py-2 px-4 rounded-lg font-semibold transition-colors duration-300 ease-in-out ${showDiamonds ? 'bg-[#be9080] text-white' : 'bg-white text-[#be9080] hover:bg-gray-200'
                            }`}
                    >
                        Diamond
                    </button>
                    <button
                        onClick={() => setShowDiamonds(false)}
                        className={`py-2 px-4 rounded-lg font-semibold transition-colors duration-300 ease-in-out ${!showDiamonds ? 'bg-[#be9080] text-white' : 'bg-white text-[#be9080] hover:bg-gray-200'
                            }`}
                    >
                        Gemstone
                    </button>
                </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mb-6">
                {filterOptions.map((option, index) => (
                    <select key={index} className="p-2 border rounded-lg bg-white text-[#be9080] border-[#be9080]">
                        <option>{option.label}</option>
                        {option.options.map((opt, idx) => (
                            <option key={idx}>{opt}</option>
                        ))}
                    </select>
                ))}
            </div>

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

            <footer className="w-full bg-white text-[#be9080] text-center py-6 mt-8">
                <p className="text-black">Diamond Engagement Rings - Viewable In 360° HD</p>
                <p className="text-black">Looking for engagement ring inspiration? Let our customers’ custom creations spur your imagination. Browse a huge selection of diamond engagement rings for women in every shape, style, and metal imaginable. And to top it all off, set the ring of your dreams with a sparkling natural or lab grown diamond.</p>
                <p className="text-black">Start designing your own engagement ring.</p>
            </footer>
        </div>
    );
}