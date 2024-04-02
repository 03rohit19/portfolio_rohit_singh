import ProfileImage from "../asset/profileimage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="w-full bg-gradient-to-b from-black via-black to-gray-800 "
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row mt-10 md:mt-6 ">
        <div className="h-full ">
          <h1 className="text-4xl sm:text-7xl font-bold text-white mt-12 md:mt-16 ">
            {" "}
            Rohit Singh
          </h1>
          <h2 className="text-white text-2xl font-semibold">
            {" "}
            <span className="text-5xl">👋 </span>( Web developer)
          </h2>

          <p className=" py-4 text-[#fff] text-xl">
            I am Rohit Singh, a budding and enthusiastic frontend developer. I
            build interactive websites using modern tools such as React, Redux,
            Tailwind CSS, TypeScript, Firebase, and Bootstrap. I am seeking to
            advance my growing tech career as a frontend developer in a
            competitive environment.
          </p>
          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-black font-semibold w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 border borrder-white cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div className="mt-5 md:mt-16 md:ml-4 md:overflow-hidden hover:scale-105 transition duration-500 cursor-pointer object-cover">
          <img
            src={ProfileImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full "
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
