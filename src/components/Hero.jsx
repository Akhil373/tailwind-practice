import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

const Hero = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-center text-6xl tracking-wide">
        Virtual build tools{" "}
        <span className="bg-gradient-to-r from-orange-500 to-orange-800 bg-clip-text text-transparent">
          for developers
        </span>
      </h1>
      <p className="mt-10 max-w-4xl text-center text-lg text-neutral-500">
        Developing immersive virtual environments requires a unique set of
        skills and tools. Virtual Reality (VR) technology offers endless
        possibilities for interactive, engaging experiences in various fields
        such as education, gaming, healthcare, architecture, and more.
      </p>
      <div className="my-10 flex justify-center">
        <a
          href="#"
          className="mx-3 rounded-md bg-gradient-to-r from-orange-500 to-orange-800 px-4 py-2"
        >
          Start for free
        </a>
        <a href="#" className="mx-3 rounded-md border px-4 py-2">
          Documentation
        </a>
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-5 lg:gap-20">
        <video
          autoPlay
          loop
          muted
          className="mx-2 my-4 rounded-lg border border-orange-700 shadow-orange-400"
        >
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video
          autoPlay
          loop
          muted
          className="mx-2 my-4 rounded-lg border border-orange-700 shadow-orange-400"
        >
          <source src={video2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default Hero;
