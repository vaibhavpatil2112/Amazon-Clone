import logo from "../images/logo.png";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="max-w-[100%]  bg-amazon_light mx-auto text-gray-300">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-4 place-items-center items-start  px-6  lgl:gap-4">
        <div className="w-[60%]">
          <h3 className="font-titleFont text-white text-base mt-10 font-semibold mb-3 hover:underline cursor-pointer">
            Get to Know Us
          </h3>
          <ul className="flex flex-col gap-2 font-bodyFont">
            <li className="footerLink hover:underline cursor-pointer">
              Careers
            </li>
            <li className="footerLink hover:underline cursor-pointer">Blog</li>
            <li className="footerLink hover:underline cursor-pointer">
              About Amazon
            </li>
            <li className="footerLink hover:underline cursor-pointer">
              Investor Relations
            </li>
            <li className="footerLink hover:underline cursor-pointer">
              Amazon Devices
            </li>
            <li className="footerLink hover:underline cursor-pointer">
              Amazon Science
            </li>
          </ul>
        </div>
        <div className="w-full">
          <h3 className="font-titleFont text-white text-base mt-10 font-semibold mb-3 hover:underline cursor-pointer">
            Make Money with Us
          </h3>
          <ul className="flex flex-col gap-2 font-bodyFont">
            <li className="footerLink hover:underline cursor-pointer">
              Sell products on Amazon
            </li>
            <li className="footerLink hover:underline cursor-pointer">
              Sell on Amazon Business
            </li>
            <li className="footerLink hover:underline cursor-pointer">
              Sell apps on Amazon
            </li>
            <li className="footerLink hover:underline cursor-pointer">
              Become an Affiliate
            </li>
            <li className="footerLink hover:underline cursor-pointer">
              Advertise Your Products
            </li>
            <li className="footerLink hover:underline cursor-pointer">
              Sell Product with Us
            </li>
            <li className="footerLink hover:underline cursor-pointer">
              Host an Amazon Hub
            </li>
            <li className="footerLink hover:underline cursor-pointer">
              See More Make Money with Us
            </li>
          </ul>
        </div>
        <div className="w-full">
          <h3 className="font-titleFont text-white text-base mt-10 font-semibold mb-3 hover:underline cursor-pointer">
            Amazon Payment Products
          </h3>
          <ul className="flex flex-col gap-2 font-bodyFont">
            <li className="footerLink hover:underline cursor-pointer">
              Amazon Business Card
            </li>
            <li className="footerLink hover:underline cursor-pointer">
              Shop with Points
            </li>
            <li className="footerLink hover:underline cursor-pointer">
              Reload Your Balance
            </li>
            <li className="footerLink hover:underline cursor-pointer">
              Amazon Currency Converter
            </li>
          </ul>
        </div>
        <div className="w-full">
          <h3 className="font-titleFont text-white text-base mt-10 font-semibold mb-3 hover:underline cursor-pointer">
            Let Us Help You
          </h3>
          <ul className="flex flex-col gap-2 font-bodyFont">
            <li className="footerLink hover:underline cursor-pointer">
              Amazon and COVID-19
            </li>
            <li className="footerLink hover:underline cursor-pointer">
              Your Account
            </li>
            <li className="footerLink hover:underline cursor-pointer">
              Your Orders
            </li>
            <li className="footerLink hover:underline cursor-pointer">
              Shipping Rates &amp; Policies
            </li>
            <li className="footerLink hover:underline cursor-pointer">
              Returns &amp; Replacements
            </li>
            <li className="footerLink hover:underline cursor-pointer">
              Manage Your Content and Devices
            </li>
            <li className="footerLink hover:underline cursor-pointer">
              Amazon Assistant
            </li>
            <li className="footerLink hover:underline cursor-pointer">
              FAQ &amp; Help
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full h-20 mt-11 bg-amazon_light text-gray-300 flex items-center justify-center gap-4">
        <Image className="w-24" src={logo} alt="logo" />
        <p className="text-sm -mt-4">All rights reserved </p>
      </div>
    </div>
  );
};

export default Footer;
