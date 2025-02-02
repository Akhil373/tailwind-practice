import { communityLinks, platformLinks, resourcesLinks } from "../constants";

const Footer = () => {
  return (
    <footer className="mt-20 border-t border-neutral-700 py-10">
      <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-10">
        <div>
          <h3 className="text-md mb-4 font-semibold">Resources</h3>
          <ul className="space-y-2">
            {resourcesLinks.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className="text-neutral-300 hover:text-white"
                >
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-md mb-4 font-semibold">Platform</h3>
          <ul className="space-y-2">
            {platformLinks.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className="text-neutral-300 hover:text-white"
                >
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-md mb-4 font-semibold">Community</h3>
          <ul className="space-y-2">
            {communityLinks.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className="text-neutral-300 hover:text-white"
                >
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
