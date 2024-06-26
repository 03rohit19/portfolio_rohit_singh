import html from "../asset/html.png";
import css from "../asset/css.png";
import javaScript from "../asset/javaScript.png";
import nodeJs from "../asset/nodeJs.png";
import reactImage from "../asset/reactImage.png";
import gitHub from "../asset/gitHub.png";
import tailwind from "../asset/tailwindCss.png";
import redux from "../asset/reduxImage.png";

const Experience = () => {
  const experiences = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javaScript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: nodeJs,
      title: "NodeJs",
      style: "shadow-green-500",
    },
    {
      id: 5,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 6,
      src: gitHub,
      title: "GitHub",
      style: "shadow-gray-400",
    },
    {
      id: 7,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 8,
      src: redux,
      title: "Redux",
      style: "shadow-purple-400",
    },
  ];

  return (
    <div
      name="Skills"
      className=" bg-gradient-to-b from-gray-800 to-black text-white w-full  "
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white ">
        <div className="md:mt-32">
          <p className="text-4xl font-bold  border-b-4 border-gray-500 p-2 inline ">
            Skills
          </p>
          <p className="py-6 text-xl font-semibold">
            Technologies I have worked with
          </p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0 ">
          {experiences.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style} `}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
