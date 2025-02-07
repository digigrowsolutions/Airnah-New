import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import EngagementRing from '../assets/banner.webp';
import WeddingRing from '../assets/banner2.webp';
import ring1 from '../assets/ring1.jpg'; // Adjust the path as needed
import ring2 from '../assets/ring2.jpg';
import ring3 from '../assets/ring3.jpg';
import ring4 from '../assets/ring4.jpg';
import ring5 from '../assets/ring4.jpg';
import bannerring from '../assets/Prong2.png';
import model from '../assets/Wedding-rings.jpg';
import bgImage from '../assets/twy_BG.png'; // Path to your background image
import leftImage from '../assets/twy.png'; 


function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const diamonds = [
    {
      image: ring1,
      title: "Round Cut Diamond",
      description:
        "A classic round cut diamond, known for its brilliance and timeless appeal.",
    },
    {
      image: ring1,
      title: "Princess Cut Diamond",
      description:
        "A square shape with pointed corners, offering a modern and sophisticated look.",
    },
    {
      image: ring1,
      title: "Emerald Cut Diamond",
      description:
        "An elegant cut with long lines and a sophisticated step cut appearance.",
    },
    {
      image: ring1,
      title: "Cushion Cut Diamond",
      description:
        "A blend of square and round cuts, offering a vintage-inspired yet romantic style.",
    },
  ];
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === diamonds.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? diamonds.length - 1 : prevIndex - 1
    );
  };
  const rings = [
    { img: ring1, text: 'Ring 1' },
    { img: ring2, text: 'Ring 2' },
    { img: ring3, text: 'Ring 3' },
    { img: ring4, text: 'Ring 4' },
    { img: ring5, text: 'Ring 5' },
    { img: ring1, text: 'Ring 6' },
    { img: ring2, text: 'Ring 7' },
    { img: ring3, text: 'Ring 8' },
    { img: ring4, text: 'Ring 9' },
    { img: ring5, text: 'Ring 10' },
  ];


  const [activeIndex, setActiveIndex] = useState(0);

  // Autoplay functionality for the carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % rings.length); // Loop back to the first ring after the last one
    }, 3000); // Change ring every 3 seconds

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, [rings.length]);
  const brands = [
    "Nike", "Adidas", "Gucci", "Prada", "Rolex", "Versace", "Chanel", "Puma", "Reebok", "Fendi",
    "Louis Vuitton", "Zara", "Hermès", "Burberry", "Cartier"
  ];
  const [currentSlide, setCurrentSlide] = useState(0);

  // Define the slides with imported images
  const slides = [
    {
      image: EngagementRing,
      heading: "New Modern Collection",
      subheading: "Elegance isn't solely defined by what you wear. It's how you carry yourself, how you speak, what you read.",
    },
    {
      image: WeddingRing,
      heading: "Meet the lines of the millennium",
      subheading: "Fashion is to please your eye. Shapes and proportions are for your intellect. I have an obsession with details and pattern.",
    },
  ];

  // Function to go to the next slide
  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  // Function to go to the previous slide
  const goToPrevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + slides.length) % slides.length
    );
  };

  // Set up auto-slide interval when the component mounts
  useEffect(() => {
    const intervalId = setInterval(goToNextSlide, 5000); // Change slide every 5 seconds

    // Clear interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      {/* Hero Section with Carousel */}
      <section className="relative w-full h-[100vh]">
        {/* Carousel */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          {slides.map((slide, index) => (
           <div
           key={index}
           className={`absolute inset-0 w-full h-full transition-all duration-500 ease-in-out ${
             currentSlide === index ? "opacity-100" : "opacity-0"
           }`}
           style={{
             backgroundImage: `url(${slide.image})`,
             backgroundSize: "cover",
             backgroundPosition: "center",
             backgroundAttachment: "fixed",
              }}
            >
              <div className="absolute inset-0 w-full h-full bg-black opacity-40"></div>
              <div className="absolute inset-0 flex items-center justify-left px-4 md:px-8">
                <div className="text-white text-left p-10">
                  <h1 className="text-4xl md:text-6xl font-bold">{slide.heading}</h1>
                  <p className="text-lg md:text-xl mt-4">{slide.subheading}</p>
                  {/* Shop Jewelry Button */}
                  <button className="mt-6 mr-4 px-8 py-3 bg-black text-white text-lg font-semibold hover:bg-gray-800 border-1 border-white transition duration-300">
                    Shop Jewelry
                  </button>
                  
                  {/* Buy Diamonds Button */}
                  <button className="mt-6 px-8 py-3 bg-white text-black text-lg font-semibold border-1 border-black hover:bg-gray-200 transition duration-300">
                    Buy Diamonds
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Controls */}
        <button
          onClick={goToPrevSlide}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 p-4 w-14 text-black bg-white m-2 hover:bg-opacity-75 rounded-full"
        >
          &#10094;
        </button>
        <button
          onClick={goToNextSlide}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 p-4 w-14 text-black bg-white m-2 hover:bg-opacity-75 rounded-full"
        >
          &#10095;
        </button>
      </section>

      <section className="px-4 py-8 ">
  {/* Category List */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
    {[ring1, ring2, ring3, ring4, ring5].map((ring, index) => (
      <div key={index} className="shadow-lg relative group overflow-hidden">
        <img src={ring} alt="Ring" className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105" />
        <div className="absolute inset-0  flex items-end justify-center transition-opacity duration-300 group-hover:bg-opacity-30">
          <h3 className="text-lg font-semibold text-black">{
            ["Engagement Rings", "Wedding Rings", "Diamond Rings", "Gold Rings", "Platinum Rings"][index]
          }</h3>
        </div>
        <button className="absolute inset-0 flex items-center justify-center text-black text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Shop Now
        </button>
      </div>
    ))}
  </div>
</section>
<section className="px-4 py-8 ">
  {/* Two-Column Layout */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
    {/* Left Side - Diamond Image */}
    <div className="flex justify-center">
      <img src={bannerring} alt="Diamond" className="w-full  max-w-md " />
    </div>
    
    {/* Right Side - Text Content */}
    <div className="text-center md:text-left">
      <h2 className="text-3xl font-bold text-gray-800">Design Your Own Engagement Ring</h2>
      <p className="mt-4 text-lg text-gray-600">
        Design your engagement ring your way. Start with a ring setting and then add the perfect center stone - or vice versa.
        It’s really up to you!
      </p>
      <div className="mt-6 flex flex-col md:flex-row gap-4">
        <button className="bg-blue-600 text-white px-6 py-3 hover:bg-blue-700 transition">Start with a Setting</button>
        <button className="bg-gray-600 text-white px-6 py-3  shadow-md hover:bg-gray-700 transition">Start with a Diamond</button>
      </div>
      <p className="mt-6 text-gray-500 italic">Spark your imagination with these recently purchased engagement rings.</p>
    </div>
  </div>
</section>
<section className=" py-8">
      <div className="overflow-hidden whitespace-nowrap">
        <motion.div
          className="flex gap-12 text-2xl font-bold text-gray-700 uppercase"
          animate={{ x: ["0%", "-100%"] }}
          transition={{ repeat: Infinity, duration:50, ease: "linear" }}
        >
          {brands.concat(brands).map((brand, index) => (
            <div key={index} className="flex-none px-6 py-2">
              {brand}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
    <section className="grid grid-cols-1 md:grid-cols-3 w-full ">
      {/* Box 1 */}
      <div className="relative group">
        <img src={model} alt="Box 1" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
        <div className="absolute inset-0 flex items-center justify-center ">
          <h2 className="text-white text-3xl font-bold">Wedding Rings</h2>
        </div>
      </div>

      {/* Box 2 */}
      <div className="relative group">
        <img src={model} alt="Box 2" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
        <div className="absolute inset-0 flex items-center justify-center ">
          <h2 className="text-white text-3xl font-bold">Fine Jewelry</h2>
        </div>
      </div>

      {/* Box 3 */}
      <div className="relative group">
        <img src={model} alt="Box 3" className="w-full  object-cover transition-transform duration-300 group-hover:scale-105" />
        <div className="absolute inset-0 flex items-center justify-center ">
          <h2 className="text-white text-3xl font-bold">Engagement Rings</h2>
        </div>
      </div>
    </section>

    <section className="py-12 ">
      <div className="container mx-auto px-4">
        {/* Title Section */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-semibold">Airnah's Best Selling</h2>
          <h3 className="text-xl font-medium mt-2">Engagement Rings</h3>
        </div>

        <div className="relative">
          {/* Carousel */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-1000 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {rings.map((ring, index) => (
                <div key={index} className="flex-none w-full sm:w-1/5 px-2">
                  <img
                    src={ring.img}
                    alt={`Ring ${index + 1}`}
                    className="w-full h-auto object-cover rounded-lg"
                  />
                  <div className="mt-2 text-center text-sm font-medium">{ring.text}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
    <section  className="relative w-full">
      <div className="flex w-full h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundAttachment: 'fixed',
      }}>

        {/* Left Container - Background Image with its own image */}
        <div className="relative w-1/2 h-full flex items-center justify-center">
          <img
            src={leftImage}
            alt="Left Image"
            className="absolute top-0 left-0 w-50 h-auto object-contain"
          />
        </div>

        {/* Right Container - Text content */}
        <div className="w-1/2 h-full flex flex-col justify-center text-black px-6 space-y-4">
          <h2 className="text-4xl font-bold">REAL-TIME INTERACTIVE</h2>
          <h3 className="text-3xl font-semibold">DIAMOND INSPECTION</h3>
          <p className="text-lg mt-4">
            Take a closer look at your favorite diamonds using our Real-Time Diamond Inspection service;
            a one-on-one consultation with a non-commissioned certified gemologist. Share your screen and get expert guidance as you explore diamonds in 360° HD with up to 40x magnification.
            Mark points of interest on the screen while chatting with your diamond expert in real time, and review everything from the specs to the grading certificate together.
          </p>
          <button className="mt-6 px-6 py-2 bg-yellow-500 text-black font-semibold rounded-md hover:bg-yellow-600 transition-all">
            START YOUR DIAMOND INSPECTION NOW
          </button>
          <h4 className="text-2xl font-medium mt-4">EXPERIENCE THE DIAMOND REVOLUTION</h4>
        </div>

      </div>
    </section>
    <section className="relative w-full py-16">
      <div className="flex justify-center items-center w-full px-6">
        {/* Left Arrow Button */}
        <button
          onClick={prevSlide}
          className="absolute left-0 p-4 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-all"
        >
          &#8592;
        </button>

        {/* Carousel Content */}
        <div className="flex items-center justify-between w-full max-w-7xl overflow-hidden">
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * 25}%)`,
            }}
          >
            {diamonds.map((diamond, index) => (
              <div key={index} className="w-1/4 px-4">
                <img
                  src={diamond.image}
                  alt={`Diamond ${index + 1}`}
                  className="object-cover w-full h-[300px] rounded-md"
                />
                <h3 className="text-lg font-semibold text-gray-800 mt-4 text-center">{diamond.title}</h3>
                <p className="text-sm text-gray-600 mt-2 text-center">{diamond.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Arrow Button */}
        <button
          onClick={nextSlide}
          className="absolute right-0 p-4 bg-gray-800 text-white hover:bg-gray-700 transition-all"
        >
          &#8594;
        </button>
      </div>
    </section>
      
    </div>
  );
}

export default Home;
