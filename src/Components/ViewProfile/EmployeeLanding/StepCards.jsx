import React from "react";
import { Link } from "react-router-dom";

const StepCards = () => {
  return (
    <div>
      <div className="mt-20 mb-20 grid lg:grid-cols-3 grid-cols-1">
        <section className="border lg:w-[384px] rounded-2xl lg:h-[308px] ">
          <div className="lg:w-[384px] lg:h-[64px] rounded-t-2xl bg-blue-50"></div>
          <div className="lg:ps-8 -mt-4">
            <div className="flex font-medium items-center justify-center h-10 w-10 rounded-full bg-blue-800 text-white">
              1
            </div>
          </div>
          <div className="lg:ps-8">
            <div>
              <h1 className="text-2xl tracking-wide font-medium text-gray-800 py-4">
                Create your free <br />
                account
              </h1>
              <p className="text-gray-400  tracking-wide ">
                All you need is your email <br /> address to create an account
                and <br />
                start building your job post.
              </p>
            </div>
          </div>
        </section>
        <section className="border lg:w-[384px] rounded-2xl lg:h-[308px] ">
          <div className="lg:w-[384px] lg:h-[64px] rounded-t-2xl bg-blue-50"></div>
          <div className="lg:ps-8 -mt-4">
            <div className="flex  items-center justify-center h-10 w-10 rounded-full bg-blue-800 font-medium text-white">
              2
            </div>
          </div>
          <div className="lg:ps-8">
            <div>
              <h1 className="text-2xl tracking-wide font-medium text-gray-800 py-4">
                Build your <br /> job post
              </h1>
              <p className="text-gray-400  tracking-wide ">
                All you need is your email <br /> address to create an account
                and <br />
                start building your job post.
              </p>
            </div>
          </div>
        </section>
        <section className="border lg:w-[384px] rounded-2xl lg:h-[308px] ">
          <div className="lg:w-[384px] lg:h-[64px] rounded-t-2xl bg-blue-50"></div>
          <div className="lg:ps-8 -mt-4">
            <div className="flex font-medium  items-center justify-center h-10 w-10 rounded-full bg-blue-800 text-white">
              3
            </div>
          </div>
          <div className="lg:ps-8">
            <div>
              <h1 className="text-2xl tracking-wide font-medium text-gray-800 py-4">
                Post <br /> your job
              </h1>
              <p className="text-gray-400  tracking-wide ">
                All you need is your email <br /> address to create an account
                and <br />
                start building your job post.
              </p>
            </div>
          </div>
        </section>
      </div>
      <div className="mr-7 mb-20">
        <Link to={"/post-a-newjob"}>
          <div className="lg:w-[420px] mx-auto text-white font-medium  h-[53px] bg-blue-800 flex items-center justify-center ">
            Create a Job Ad
          </div>
        </Link>
      </div>
    </div>
  );
};

export default StepCards;
