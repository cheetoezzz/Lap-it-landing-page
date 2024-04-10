import { title } from "process";

export const NAV_LINKS = [

  { href: "/.", key: "home", label: "Home" },
  { href: "/pages/features", key: "features", label: "Features" },
  { href: "/", key: "FAQs", label: "FAQ" },
  { href: "/pages/about", key: "About", label: "About" },
  { href: "/pages/Pricing", key: "Pricing", label: "Pricing" },
];

interface card {
  description: string;
  title: string;
}
const Card = ({ description, title }: card) => {
  return (
    <div className="relative flex flex-row">
      <div className="">
        <h1 className="text-white font-semibold pb-2">{title}</h1>
        <div className="text-white">{description}</div>
      </div>
    </div>
  );
};

export default Card;



