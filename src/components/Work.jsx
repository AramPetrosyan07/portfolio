import React from "react";
import pofo from "../assets/pofo.png";
import game from "../assets/game.png";
import note from "../assets/note.png";
import shop from "../assets/shop.png";
import foodimg from "../assets/foodimg.png";
import Movies from "../assets/movies.png";
import Blog from "../assets/blog.png";

const Work = () => {
  const works = [
    {
      bgImgUrl: Movies,
      hoverText: "Movie Application",
      siteLink: "https://quiet-profiterole-095f20.netlify.app/",
      githubLink: "https://github.com/AramPetrosyan07/Redux_movie",
      site: true,
    },
    {
      bgImgUrl: Blog,
      hoverText: "Anonym Blog (MERN)",
      siteLink: "https://anonym-blog.vercel.app/",
      githubLink: "https://github.com/AramPetrosyan07/anonym_blog",
      githubLinkApi: "https://github.com/AramPetrosyan07/anonym_blog-api",
      site: true,
    },
    {
      bgImgUrl: pofo,
      hoverText: "Pofo (html/css)",
      siteLink: "https://pofodemo.netlify.app/",
      githubLink: "https://github.com/AramPetrosyan07/pofo.git",
      site: true,
    },
    {
      bgImgUrl: game,
      hoverText: "Memory game",
      siteLink: null,
      githubLink: "https://github.com/AramPetrosyan07/memory-game.git",
      site: false,
    },
    {
      bgImgUrl: note,
      hoverText: "Note (html/css, js)",
      siteLink: null,
      githubLink: "https://github.com/AramPetrosyan07/js-zametka.git",
      site: false,
    },
    {
      bgImgUrl: shop,
      hoverText: "React js Shop Application",
      siteLink: "https://nikeshoping.netlify.app/",
      githubLink: "https://github.com/AramPetrosyan07/shopping-cart-2.git",
      site: true,
    },
    {
      bgImgUrl: foodimg,
      hoverText: "React JS Meal Application",
      siteLink: "https://mealrestaurantdemo.netlify.app/",
      githubLink: "https://github.com/AramPetrosyan07/food-project-2",
      site: true,
    },
  ];

  return (
    <div name="work" className="w-full md:h-full text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Work
          </p>
          <p className="py-6">// Check out some of my recent work</p>
        </div>

        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {works.map((item, ind) => (
            <div
              key={ind}
              style={{ backgroundImage: `url(${item.bgImgUrl})` }}
              className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
            >
              {/* Hover Effects */}
              <div className="opacity-0 group-hover:opacity-100">
                <span className="text-2xl font-bold text-white text-center block">
                  {item.hoverText}
                </span>
                <div className="pt-8 text-center">
                  {item.site ? (
                    <a href={item.siteLink} target="_blank">
                      <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                        Site
                      </button>
                    </a>
                  ) : (
                    ""
                  )}
                  <a href={item.githubLink} target="_blank">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Code
                    </button>
                  </a>
                  {item.githubLinkApi ? (
                    <a href={item.githubLinkApi} target="_blank">
                      <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                        Code api
                      </button>
                    </a>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
