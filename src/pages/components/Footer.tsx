import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 mt-20">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <div className="div px-7 py-3 rounded-lg bg-white flex justify-center items-center">
            <img src={`/image/adidas-svgrepo-com.svg`} alt="adidas" width={50} />
          </div>
        </div>
        <div className="flex flex-wrap justify-center md:justify-start font-semibold">
          <a href="#" className="mr-4 mb-2 md:mb-0">
            About
          </a>
          <a href="#" className="mr-4 mb-2 md:mb-0">
            Contact
          </a>
          <a href="#" className="mr-4 mb-2 md:mb-0">
            Privacy Policy
          </a>
          <a href="#" className="mr-4 mb-2 md:mb-0">
            Terms & Conditions
          </a>
        </div>
        <div className="flex flex-wrap justify-center md:justify-end">
          <a href="#" className="mr-4 mb-2 md:mb-0">
            <img width="48" height="48" src="https://img.icons8.com/color/48/facebook-new.png" alt="facebook-new" />
          </a>
          <a href="#" className="mr-4 mb-2 md:mb-0">
            <img width="48" height="48" src="https://img.icons8.com/fluency/48/twitter.png" alt="twitter" />{" "}
          </a>
          <a href="#" className="mr-4 mb-2 md:mb-0">
            <img width="48" height="48" src="https://img.icons8.com/fluency/48/instagram-new.png" alt="instagram-new" />{" "}
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
