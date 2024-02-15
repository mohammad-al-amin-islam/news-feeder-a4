import { useState } from "react";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const handleCategoryClick = (category) => {
    setSelectedCategory(category.name.toLowerCase());
    console.log(category.name.toLowerCase())
  };
  return (
    <>
      <Navbar
        selectedCategory={selectedCategory}
        onCategoryClick={handleCategoryClick}
        setInputValue={setInputValue}
        inputValue={inputValue}
      />
      <Main selectedCategory={selectedCategory} inputValue={inputValue} />
      <Footer />
    </>
  );
}

export default App;
