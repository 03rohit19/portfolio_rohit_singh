import { useState, useEffect } from "react";
// import foodWebApp from "../asset/foodWebApp.png";
// import videoApp from "../asset/videoApp.png";
import ecommerceWebsite from "../asset/ecommerceWebapp.jpg";
import foodwebsite from "../asset/foodwebsite.jpg";
// import pomoDoro from "../asset/pomoDoro.png";
import pomoDoroApp from "../asset/pomoDoroApp.jpg";
import videoStreamingApp from "../asset/videoStreamingApp.jpg";

const Portfolio = () => {
  const [loading, setLoading] = useState(true);
  const [portfolios, setPortfolios] = useState([]);

  useEffect(() => {
    // Simulate loading delay
    const timeout = setTimeout(() => {
      setPortfolios([
        {
          id: 1,
          src: foodwebsite,
          link: "https://website-food-ordering.netlify.app",
          title: "FOOD VILLA",
        },
        {
          id: 2,
          src: videoStreamingApp,
          link: "https://rohit03.netlify.app",
          title: "STREAMSPACE",
        },
        {
          id: 3,
          src: ecommerceWebsite,
          link: "https://responsive-e-commerce-web-app.netlify.app/",
          title: "E-COMMERCE WEBSITE",
        },
        {
          id: 4,
          src: pomoDoroApp,
          link: "https://clock-pomodoro-03.netlify.app",
          title: "POMODORO",
        },
      ]);
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  const handleClick = (link) => {
    window.open(link, "_blank");
  };

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6 text-xl font-semibold">I craft experiences</p>
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-40">
            <p className="text-xl">Loading...</p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
            {portfolios.map(({ id, src, link, title }) => (
              <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                <img
                  src={src}
                  alt=""
                  className="rounded-md duration-200 hover:scale-105 border border-green-700 h-44 w-full"
                />
                <div className="flex items-center justify-center">
                  <button
                    className="w-1/2 px-4 py-2 m-2 duration-200 hover:scale-105"
                    onClick={() => handleClick(link)}
                  >
                    {title}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Portfolio;
