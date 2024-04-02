const About = () => {
  return (
    <div
      name="about"
      className="w-full md:h-[500px] bg-gradient-to-b from-gray-800 to-black text-white "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full ">
        <div className="pb-8 mt-3">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl md:mt-8">
          In my journey as a developer, I had the privilege of completing
          mutiple enriching internships. During the internships, I made
          contributions to the company's main project. I played an integral role
          in the development of critical features, demonstrating my proficiency
          in React.js and my ability to work effectively within a team
          environment.
        </p>
        <br />
        <p className="text-xl">
          Through my dedicated efforts and technical expertise, I helped deliver
          key milestones, meet project deadlines, and ensure the overall success
          of the main project.
        </p>
      </div>
    </div>
  );
};

export default About;
