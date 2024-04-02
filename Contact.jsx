const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full bg-gradient-to-b from-black to-gray-800 p-4 text-white "
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto ">
        <div className="pb-8 md:mt-32">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            I would love to connect
          </p>
          <p className="py-6 text-xl font-semibold">
            I am always looking to work on exciting projects, learn new things,
            or just chat about tech.
          </p>
        </div>
        <div className="flex justify-center items-center">
          <form
            action="https://getform.io/f/d8d4cb12-ee8a-499a-975d-ac5a3657139f"
            method="POST"
            className="flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="p-2 my-4 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>
            <button className="text-black font-semibold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 border borrder-white cursor-pointer px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Lets connect
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
