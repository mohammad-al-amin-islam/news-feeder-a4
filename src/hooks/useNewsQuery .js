import { useState, useEffect } from 'react';

const useNewsQuery = (selectedCategory) => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    let ignore = false;
    const url = selectedCategory ? `http://localhost:8000/v2/top-headlines?category=${selectedCategory}` : `http://localhost:8000/v2/top-headlines`;
    
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (!ignore) {
          setNews(data.articles);
        }
      });

    return () => {
      ignore = true;
    };
  }, [selectedCategory]);

  return [news,setNews];
};

export default useNewsQuery;
