import bg from "../assets/logo.jpg";

const Hero = () => {
  return (
    <section
      className="w-full bg-cover bg-no-repeat bg-center text-white"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="w-full min-h-screen flex flex-col md:px-10 px-4 py-6 bg-black bg-opacity-60 backdrop:blur-2x justify-center text-center items-center">
        <h1 className="md:text-[55px] text-[30px] font-bold">
          Hey all, Lets make it work
        </h1>
        <p className="lg:max-w-lg text-lg text-gray-100">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat
          animi ullam quos suscipit harum? Unde veniam vero reiciendis neque,
          ipsa odit, cumque magnam quis, id optio consequatur labore facere.
          Assumenda!
        </p>
        <div className="w-full flex gap-6 mt-4 justify-center items-center">
          <button className="bg-orange-500 hover:bg-orange-400 rounded-lg p-3 text-lg">
            Just Do It
          </button>
          <button className="bg-green-500 hover:bg-green-400 rounded-lg p-3 text-lg">
            Work It Out
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
