import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, Image, Text } from "@mantine/core";

function News() {
  const [articles, setArticles] = useState<{
    title: string;
    urlToImage: string;
    description: string;
  }>({ title:"", urlToImage:"", description:"" });

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
    <div className=" bg-gray-100" >
      <div className="md:h-full flex items-center text-gray-600">
        <div className="container  px-5  mx-auto">
        <div className="flex flex-wrap -m-4">
       <div className="p-4 sm:w-1/2 lg:w-1/3 ">
                    <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                        <img className="lg:h-72 md:h-48 w-full object-cover object-center"
                            src={articles.urlToImage} alt="blog" />
                        <div className="p-6 hover:bg-indigo-700 hover:text-white transition duration-300 ease-in">
                        <h2 className="text-base font-medium text-indigo-300 mb-1">October 29,
                                2021</h2>
                            <h1 className="text-2xl font-semibold mb-3">{articles.title}</h1>
                            <p className="leading-relaxed mb-3">{articles.description}</p>
                                
                          </div>
                      </div>
                      
                </div>
          </div>
        </div>

      </div>

      

    </div>
  );
}

export default News;
