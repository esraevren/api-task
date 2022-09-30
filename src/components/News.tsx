import React, { useState, useEffect } from "react";
import axios from "axios";

function News() {
  const [articles, setArticles] = useState<{
    title: string;
    urlToImage: string;
    description: string;
  }>({ title: "", urlToImage: "", description: "" });

  useEffect(() => {
    const getArticles = async () => {
      const response = await axios.get(
        "https://newsapi.org/v2/top-headlines?country=tr&apiKey=500fc5f9f6d44a728e4e5ee15d5bef66"
      );
      console.log(response.data.articles[0]);
      setArticles(response?.data?.articles[0]);
    };
    getArticles();
  }, []);
  return (
    <div className="flex flex-col items-center  rounded-lg border shadow-2xl md:flex-row md:max-w-xl hover:bg-gray-100 ">
      <img
        className="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
        src={articles.urlToImage}
        alt=""
      />
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
          {articles.title}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {articles.description}
        </p>
      </div>
    </div>
  );
}

export default News;
