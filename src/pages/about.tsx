import React from "react";
import MetaHead from "./metahead";

const About = () => {
  return (
    <>
      <MetaHead title="About" description="This is Page talk About " image={`${process.env.NEXT_PUBLIC_HOST_NAME}/image/logo/nike.svg`} />
      <div className="bg-gray-100 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:px-6">
              <h2 className="text-2xl font-bold leading-6 text-gray-900">About Us</h2>
            </div>
            <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
              <div className="flex flex-wrap">
                <div className="w-full sm:w-1/2 p-4">
                  <img src="https://png.pngtree.com/thumb_back/fh260/background/20210902/pngtree-outdoor-office-building-in-the-city-during-the-daytime-image_790830.jpg" alt="Company" className="rounded-lg" />
                </div>
                <div className="w-full sm:w-1/2 p-4">
                  <p className="text-gray-700 mb-4 text-justify">
                    AdiCorp is a company to provide high-quality products and services to our customers. We are committed to delivering an excellent shopping experience by offering a wide range of the latest Adidas products and friendly,
                    responsive customer service.
                  </p>
                  <p className="text-gray-700 text-justify">
                    AdiCorp's main advantages are guaranteed product quality, a wide selection of products, and professional customer service. We collaborate with Adidas to provide our customers exclusive access to their latest collections,
                    as well as fast and secure delivery services.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
