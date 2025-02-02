import { features } from "../constants";
const FeatureSection = () => {
  return (
    <div className="relative mt-20 min-h-[800px] border-b border-neutral-800">
      <div className="text-center">
        <span className="h-6 rounded-full bg-neutral-900 px-2 py-1 text-sm font-medium text-orange-500 uppercase">
          Feature
        </span>
        <h2 className="lg:mt:20 mt-10 text-3xl tracking-wide sm:text-5xl lg:text-6xl">
          Easily build{" "}
          <span className="bg-gradient-to-r from-orange-500 to-orange-800 bg-clip-text text-transparent">
            your code
          </span>
        </h2>
      </div>
      <div className="mt-10 grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-30 p-0 text-center lg:mt-20">
        {features.map((item, index) => (
          <div key={index} className="w-full">
            <div className="flex">
              <div className="mx-6 flex h-10 w-10 items-center justify-center rounded-full bg-neutral-900 p-2 text-orange-700">
                {item.icon}
              </div>
              <div>
                <h5 className="mt-1 mb-6 text-xl">{item.text}</h5>
                <p className="text-md px-2 text-neutral-500">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;
