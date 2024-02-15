const NewsFeed = ({ singleNews }) => {
  return (
    <div className="col-span-12 md:col-span-6 lg:col-span-4 ">
        {singleNews?.urlToImage && (
          <div className="col-span-12 md:col-span-6 pb-2">
            <img className="w-full" src={singleNews?.urlToImage} />
          </div>
        )}
      <div className="col-span-12 lg:col-span-6">
        <a href={singleNews.url}>
          <h3 className="mb-2.5 text-2xl font-bold lg:text-[28px]">
            {singleNews.title}
          </h3>
        </a>
        <p className="text-base text-[#5C5955]">{singleNews.description}</p>
        <p className="mt-5 text-base text-[#5C5955]">
          {new Date(singleNews.publishedAt).toLocaleDateString("en-GB", {
            day: "2-digit",
            month: "short",
            year: "numeric",
          })}
        </p>
        
      </div>
    </div>
  );
};

export default NewsFeed;
