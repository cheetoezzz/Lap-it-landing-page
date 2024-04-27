
export const NAV_LINKS = [

  { href: "/login/dashboard/admin/editlandingpage", key: "home", label: "Home" },
  { href: "/login/dashboard/admin/editlandingpage/pages/features", key: "features", label: "Features" },
  { href: "/login/dashboard/admin/editlandingpage/pages/faq", key: "FAQs", label: "FAQ" },
  { href: "/login/dashboard/admin/editlandingpage/pages/about", key: "About", label: "About" },
  { href: "/login/dashboard/admin/editlandingpage/pages/Pricing", key: "Pricing", label: "Pricing" },
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



