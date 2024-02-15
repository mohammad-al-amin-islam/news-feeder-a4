import { useState } from "react";
import lwsLogo from "../../src/assets/logo.png";
import searchIcon from "../assets/icons/search.svg";
const categories = [
  { id: 1, name: "General" },
  { id: 2, name: "Business" },
  { id: 3, name: "Entertainment" },
  { id: 4, name: "Health" },
  { id: 5, name: "Science" },
  { id: 6, name: "Sports" },
  { id: 7, name: "Technology" },
];

export default function Navbar({
  selectedCategory,
  onCategoryClick,
  inputValue,
  setInputValue,
}) {
  const [showInput, setShowInput] = useState(false);
  const handleCategoryClick = (category) => {
    onCategoryClick(category);
  };
  const handleIconClick = () => {
    setShowInput(true);
  };

  const handleInputClick = () => {
    console.log('Input field clicked');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setInputValue("");
    setInputValue(e.target.name.value);
    console.log(e.target.name.value);
    setShowInput(false);
  };

  return (
    <nav className="border-b border-black py-6 md:py-8">
      <div className="container mx-auto flex flex-wrap items-center justify-between gap-6">
        <div className="flex items-center space-x-4">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 0.5C12.1421 0.499999 15.5 3.85786 15.5 8C15.5 12.1421 12.1421 15.5 8 15.5C3.85786 15.5 0.5 12.1421 0.5 8C0.499999 3.85786 3.85786 0.5 8 0.5Z"
              stroke="#00D991"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8 15.4286L8 0.571507"
              stroke="#00D991"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10.4995 14.9999C10.4995 14.9999 12.5715 12.6429 12.5715 8.00008C12.5715 3.35722 10.4995 0.999939 10.4995 0.999939"
              stroke="#00D991"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5.50049 1.00006C5.50049 1.00006 3.4285 3.35706 3.4285 7.99992C3.4285 12.6428 5.50049 15.0001 5.50049 15.0001"
              stroke="#00D991"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15.4282 8L0.499512 8"
              stroke="#00D991"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M1.5 5C1.5 5 3.5 5 8 5C12.5 5 14.5 5 14.5 5"
              stroke="#00D991"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M1.5 11C1.5 11 3.5 11 8 11C12.5 11 14.5 11 14.5 11"
              stroke="#00D991"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span>Thursday, February 25, 2021</span>
        </div>

        <a href="/">
          <img
            className="max-w-[100px] md:max-w-[165px]"
            src={lwsLogo}
            alt="Lws"
          />
        </a>

        <div className="flex items-center space-x-3 lg:space-x-8">
          {showInput ? (
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                autoFocus
                className="border border-gray-300 rounded-md py-1 px-3 focus:outline-none focus:border-blue-500"
              />
              <button
                type="submit"
                className="bg-blue-500 text-white py-1 px-3 rounded-md ml-2"
                onClick={handleInputClick}
              >
                Submit
              </button>
            </form>
          ) : (
            <button onClick={handleIconClick}>
              <img src={searchIcon} alt="Search Icon" />
            </button>
          )}
        </div>
      </div>

      <div className="container mx-auto mt-6">
        <ul className="flex flex-wrap items-center justify-center gap-5 text-xs font-semibold lg:text-base">
          {categories.map((category) => (
            <li key={category.id}>
              <button onClick={() => handleCategoryClick(category)}>
                {category.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
