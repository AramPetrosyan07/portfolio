import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] ">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full ">
          {/* <div className="sm:text-right text-4xl font-bold">
            <p>Hi. I'm Clint, nice to meet you.</p>
          </div> */}
          <div className="m-auto w-4/5 ">
            <p className="text-center">
              Hi I'm Aram. I am from Armenia <br />
              and since my childhood I have been fond of computer technology and
              the Internet. And the older I got, the more I wanted to learn how
              it works from the inside and learn how to create something new
              myself. Now I have a basic knowledge of programming and am charged
              with enthusiasm to gain experience and at the same time benefit
              the company. I will be very glad of any suggestions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
