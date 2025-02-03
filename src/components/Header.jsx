import { useState } from "react";
import { ShoppingCart, User, Heart } from "lucide-react";

export default function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(null);

  const menuItems = [
    {
      label: "Category 1",
      subItems: [
        {
          title: "Item 1",
          description: "Description for Item 1",
          imageUrl: "https://via.placeholder.com/150",
        },
        {
          title: "Item 2",
          description: "Description for Item 2",
          imageUrl: "https://via.placeholder.com/150",
        },
        {
          title: "Item 3",
          description: "Description for Item 3",
          imageUrl: "https://via.placeholder.com/150",
        },
      ],
    },
    {
      label: "Category 2",
      subItems: [
        {
          title: "Item A",
          description: "Description for Item A",
          imageUrl: "https://via.placeholder.com/150",
        },
        {
          title: "Item B",
          description: "Description for Item B",
          imageUrl: "https://via.placeholder.com/150",
        },
        {
          title: "Item C",
          description: "Description for Item C",
          imageUrl: "https://via.placeholder.com/150",
        },
      ],
    },
  ];

  return (
    <header className="bg-white shadow-md w-full p-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-800">LOGO</div>

        {/* Dropdowns */}
        <nav className="flex-1 flex justify-center space-x-6">
          {menuItems.map((menu, index) => (
            <div
              key={index}
              className="relative group"
              onMouseEnter={() => setDropdownOpen(index)}
              onMouseLeave={() => setDropdownOpen(null)}
            >
              <button className="text-gray-700 hover:text-gray-900 font-medium">
                {menu.label}
              </button>
              {dropdownOpen === index && (
                <div className="fixed z-10 left-0 mt-2 bg-white border rounded-lg shadow-lg w-full grid grid-cols-2">
                  <div className="p-4 grid grid-cols-1 gap-4">
                    {menu.subItems.map((subItem, idx) => (
                      <div key={idx} className="p-2 hover:bg-gray-100">
                        <h4 className="font-medium text-gray-800">
                          {subItem.title}
                        </h4>
                        <p className="text-sm text-gray-600">
                          {subItem.description}
                        </p>
                      </div>
                    ))}
                  </div>
                  <div className="p-4">
                    {menu.subItems[0]?.imageUrl && (
                      <img
                        src={menu.subItems[0].imageUrl}
                        alt="Dropdown Preview"
                        className="w-full h-auto rounded"
                      />
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Right Controls */}
        <div className="flex items-center space-x-4">
          {/* Search Bar */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="border border-gray-300 rounded-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-400 w-48"
            />
          </div>

          {/* Buttons */}
          <button className="p-2 rounded-full hover:bg-gray-100">
            <User size={20} />
          </button>
          <button className="p-2 rounded-full hover:bg-gray-100">
            <Heart size={20} />
          </button>
          <button className="p-2 rounded-full hover:bg-gray-100">
            <ShoppingCart size={20} />
          </button>
        </div>
      </div>
    </header>
  );
}
