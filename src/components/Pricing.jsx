import { CheckCircle2 } from "lucide-react";
import { pricingOptions } from "../constants";

const Pricing = () => {
  return (
    <div className="mt-20">
      <h2 className="sm:5xl lg:6xl my-8 text-center text-3xl tracking-wide">
        Pricing
      </h2>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))]">
        {pricingOptions.map((item, index) => (
          <div key={index} className="p-2">
            <div className="rounded-xl border border-neutral-700 p-10">
              <p className="mb-8 text-4xl">
                {item.title}
                {item.title === "Pro" ? (
                  <span className="mb-4 ml-2 bg-gradient-to-r from-orange-500 to-red-400 bg-clip-text text-xl text-transparent">
                    (Most Popular)
                  </span>
                ) : null}
              </p>
              <p className="mb-8">
                <span className="mt-6 mr-2 text-5xl">{item.price}</span>
                <span className="tracking-tight text-neutral-400">/Month</span>
              </p>
              <ul>
                {item.features.map((option, index) => (
                  <li key={index} className="mt-8 flex items-center">
                    <CheckCircle2 />
                    <span className="ml-2">{option}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className="mt-20 inline-flex h-12 w-full items-center justify-center rounded-lg border border-orange-900 p-2 text-center text-xl tracking-tight transition duration-200 hover:bg-orange-900"
              >
                Subscribe
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
