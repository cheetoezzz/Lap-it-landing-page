"use client";
import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS } from ".";
import BottomOfFooter from "./BottomOfFooter";

// Triaged, use Next/Image and map nav links
//used nextImage 
// gi isa nako ang feature ug card *testing new method*
const Footer = () => {

  const card = [
    { link:"https://www.facebook.com/itechsolutions588",pic: <Image src="/fb.png" alt="" width={16} height={16} /> },
    {link:"https://www.facebook.com/itechsolutions588", pic: <Image src="/mssgr.png" alt="" width={16} height={16}  /> },
    { link:"https://www.instagram.com/lapitsolutions/",pic: <Image src="/insta.png" alt="" width={16} height={16}  /> },
    { link:"https://www.facebook.com/itechsolutions588",pic: <Image src="/twtr.png" alt="" width={16} height={16} /> },
    { link: "mailto:LapITSolutions09@gmail.com", pic: <Image src="/gm.png" alt="" width={16} height={16} /> },
  ];

  const PlanCard = ({ link, pic }: { link: string; pic?: string | JSX.Element }) => {
    return (
      <div className="">
        <a href={link} target="_blank" rel="noopener noreferrer">
          {typeof pic === 'string' ? <Image src={pic} alt="" width={100} height={100} /> : pic}
        </a>
      </div>
    );
  };


  return (
    <footer className=" bg-blue-900  text-white   mt-auto">
      <div className="container mx-auto">
        <div className=" flex flex-row justify-between">
          <div className="flex flex-col items-start mt-5 gap-4">
            <Link href="/">
              <Image
                src="/lapit.svg"
                alt="logo"
                width={80}
                height={60}
                className="sm:w-28 md:w-40"
              />
            </Link>{" "}
            {/* IMAGE OF LAP IT */}
            <div className=" text-[12px]">
              {" "}
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                <br></br> Sed dapibus tempus vulputate.
              </p>{" "}
            </div>
            
            <div className="flex flex-row items-center space-x-4">  {/* ICONS*/}
            {card.map((logoMap, index) => (
              <PlanCard key={index}  link={logoMap.link} pic={logoMap.pic} />
            ))}
          </div>
            
            
          </div>


          <div className="flex flex-col items-start mt-5 gap-4 ml-32">  {/* // {NAV_LINKS.length > 0 && NAV_LINKS.map} */}
            <div className="font-bold text-[20px]">Useful Links</div>
            {NAV_LINKS.map((link) => (
              <Link  key={link.key} href={link.href} className="text-[14px]"> 
                {link.label}
              </Link> 
          ))}
          </div>

          <div className="flex flex-col mt-5 items-start w-1/4 ml-32">
            <div className="font-bold text-[20px]">Reach out</div>

            <div className="flex items-start mt-5">
              <img src="/point.png" alt="" className="mr-2" />
              <div>
                <div>Door 2 Ground floor Marcela Bldg.</div>
                <div className="mr-8">Jose Palma Gil St., Claveria St.</div>
                <div className="mr-10">Davao City, 8000 Philippines</div>
              </div>
            </div>
            <br />
            <div className="flex items-center mt-2">
              <img src="/vector.png" alt="" className="mr-2" />
              <div>sales.lap@gmail.com</div>
            </div>
            <br />

            <div className="flex items-center mt-2">
              <img src="/Vector (1).png" alt="" className="mr-2" />
              <div>+63 905 556 5713</div>
            </div>
          </div>

          <div className="flex flex-col mt-5">
            <div className="font-bold mr-14 text-[20px]">Get In Touch</div>
            <div className="flex items-center  mt-5">
              <h1>Question or feedback <br /> we’d love to hear it from you.</h1>
            </div>
          </div>
        </div>
      
      </div>
      <BottomOfFooter/>
    </footer>
    
  );
};

export default Footer;
