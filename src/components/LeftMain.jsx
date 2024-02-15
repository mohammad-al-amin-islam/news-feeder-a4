import NewsFeed from "./NewsFeed";
import useNewsQuery from "../hooks/useNewsQuery ";
import { useEffect } from "react";

export default function LeftMain({ selectedCategory, inputValue }) {
  const [news, setNews] = useNewsQuery(selectedCategory);
  
  let url;
  if(inputValue){
    url = `http://localhost:8000/v2/search?q=${inputValue}`;
  }
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setNews(data.result));
  }, [url,setNews]);

  return (
    <div className="col-span-12 grid grid-cols-12 gap-6 self-start xl:col-span-8">
      {news.map((singleNews, index) => (
        <NewsFeed key={index} singleNews={singleNews} />
      ))}
    </div>
  );
}
