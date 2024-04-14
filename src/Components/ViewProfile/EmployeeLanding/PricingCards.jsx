import React from "react";

const PricingCards = () => {
  return (
    <div className="py-40  bg-blue-50">
      <div className="text-center space-y-8">
        <h1 className="text-blue-800 text-5xl font-bold ">
          Ready to get started?
        </h1>
        <p className="text-gray-500 font-medium tracking-wide">
          14 days unlimited free trial. No contract or credit card required.
        </p>

        <div className="flex pb-6 items-center justify-center gap-4">
          <label
            className="inline-block font-medium  pl-[0.15rem] hover:cursor-pointer"
            htmlFor="flexSwitchChecked"
          >
            Monday
          </label>
          <input
            className="mr-2 mt-[0.3rem] h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-blue-400 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-blue-600 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-blue-800 dark:after:bg-blue-400 dark:checked:bg-primary dark:checked:after:bg-primary dark:focus:before:shadow-[3px_-1px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca]"
            type="checkbox"
            role="switch"
            id="flexSwitchChecked"
            defaultChecked
          />
          <label
            className="inline-block font-medium pl-[0.15rem] hover:cursor-pointer"
            htmlFor="flexSwitchChecked"
          >
            Yearly
          </label>
        </div>
      </div>{" "}
      <div className="max-w-7xl mx-auto mt-12">
        <div className="grid  lg:grid-cols-3 grid-cols-1 gap-8">
          <div class="relative lg:h-[560px] bg-white z-10 rounded-lg shadow-xl">
            <div class="pointer-events-none absolute inset-0 rounded-lg border-2 border-blue-600"></div>
            <div class="absolute inset-x-0 top-0 transform translate-y-px">
              <div class="flex justify-center transform -translate-y-1/2"></div>
            </div>
            <div class="bg-white rounded-t-lg px-6 pt-12 pb-10">
              <div className="ps-8">
                <h3 class=" text-2xl leading-9 font-semibold text-gray-900 sm:-mx-6">
                  Starter Plan
                </h3>
                <p className="text-gray-400 pt-2">
                  <span className="text-4xl font-extrabold text-gray-800">
                    $11{" "}
                  </span>{" "}
                  / Month
                </p>
              </div>
            </div>
            <div class=" border-gray-100 bg-white rounded-b-lg pt-10 pb-8 px-6  sm:px-10 sm:py-10">
              <ul>
                <li class="flex items-start">
                  <div class="flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      class="h-6 w-6 text-blue-700"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  </div>
                  <p class="ml-3 text-base leading-6 font-medium text-gray-500">
                    20,000 Visitors
                  </p>
                </li>
                <li class="mt-4 flex items-start">
                  <div class="flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      class="h-6 w-6 text-blue-700"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  </div>
                  <p class="ml-3 text-base leading-6 font-medium text-gray-500">
                    Create Unlimited Widgets
                  </p>
                </li>
                <li class="mt-4 flex items-start">
                  <div class="flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      class="h-6 w-6 text-blue-700"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  </div>
                  <p class="ml-3 text-base leading-6 font-medium text-gray-500">
                    All Widget Types
                  </p>
                </li>
                <li class="mt-4 flex items-start">
                  <div class="flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      class="h-6 w-6 text-blue-700"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  </div>
                  <p class="ml-3 text-base leading-6 font-medium text-gray-500">
                    CMS Integration
                  </p>
                </li>
              </ul>
              <div class="mt-24">
                <div class="rounded-lg shadow-md">
                  <a
                    href="https://forms.gle/q8qxsqpcFH8VCLo8A"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-describedby="tier-growth"
                    class="block w-full text-center rounded-lg border border-transparent bg-blue-800 px-6 py-4 text-xl leading-6 font-medium text-white hover:bg-blue-600 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue transition ease-in-out duration-150"
                  >
                    Create a Free Account
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="relative lg:h-[560px] bg-white z-10 rounded-lg shadow-xl">
            <div class="pointer-events-none absolute inset-0 rounded-lg border-2 border-blue-600"></div>
            <div class="absolute inset-x-0 top-0 transform translate-y-px">
              <div class="flex justify-center transform -translate-y-1/2"></div>
            </div>
            <div class="bg-white rounded-t-lg px-6 pt-12 pb-10">
              <div className="ps-8">
                <h3 class=" text-2xl leading-9 font-semibold text-gray-900 sm:-mx-6">
                  Starter Plan
                </h3>
                <p className="text-gray-400 pt-2">
                  <span className="text-4xl font-extrabold text-gray-800">
                    $36{" "}
                  </span>{" "}
                  / Month
                </p>
              </div>
            </div>
            <div class=" border-gray-100 bg-white rounded-b-lg pt-10 pb-8 px-6  sm:px-10 sm:py-10">
              <ul>
                <li class="flex items-start">
                  <div class="flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      class="h-6 w-6 text-blue-700"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  </div>
                  <p class="ml-3 text-base leading-6 font-medium text-gray-500">
                    20,000 Visitors
                  </p>
                </li>
                <li class="mt-4 flex items-start">
                  <div class="flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      class="h-6 w-6 text-blue-700"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  </div>
                  <p class="ml-3 text-base leading-6 font-medium text-gray-500">
                    Create Unlimited Widgets
                  </p>
                </li>
                <li class="mt-4 flex items-start">
                  <div class="flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      class="h-6 w-6 text-blue-700"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  </div>
                  <p class="ml-3 text-base leading-6 font-medium text-gray-500">
                    All Widget Types
                  </p>
                </li>
                <li class="mt-4 flex items-start">
                  <div class="flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      class="h-6 w-6 text-blue-700"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  </div>
                  <p class="ml-3 text-base leading-6 font-medium text-gray-500">
                    CMS Integration
                  </p>
                </li>
              </ul>
              <div class="mt-24">
                <div class="rounded-lg shadow-md">
                  <a
                    href="https://forms.gle/q8qxsqpcFH8VCLo8A"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-describedby="tier-growth"
                    class="block w-full text-center rounded-lg border border-transparent bg-blue-800 px-6 py-4 text-xl leading-6 font-medium text-white hover:bg-blue-600 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue transition ease-in-out duration-150"
                  >
                    Create a Free Account
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="relative lg:h-[560px]  bg-white z-10 rounded-lg shadow-xl">
            <div class="pointer-events-none absolute inset-0 rounded-lg border-2 border-blue-600"></div>
            <div class="absolute inset-x-0 top-0 transform translate-y-px">
              <div class="flex justify-center transform -translate-y-1/2"></div>
            </div>
            <div class="bg-white rounded-t-lg px-6 pt-12 pb-10">
              <div className="ps-8">
                <h3 class=" text-2xl leading-9 font-semibold text-gray-900 sm:-mx-6">
                  Starter Plan
                </h3>
                <p className="text-gray-400 pt-2">
                  <span className="text-4xl font-extrabold text-gray-800">
                    $11{" "}
                  </span>{" "}
                  / Month
                </p>
              </div>
            </div>
            <div class="bg-white border-gray-100 rounded-b-lg pt-10 pb-8 px-6  sm:px-10 sm:py-10">
              <ul>
                <li class="flex items-start">
                  <div class="flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      class="h-6 w-6 text-blue-700"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  </div>
                  <p class="ml-3 text-base leading-6 font-medium text-gray-500">
                    20,000 Visitors
                  </p>
                </li>
                <li class="mt-4 flex items-start">
                  <div class="flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      class="h-6 w-6 text-blue-700"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  </div>
                  <p class="ml-3 text-base leading-6 font-medium text-gray-500">
                    Create Unlimited Widgets
                  </p>
                </li>
                <li class="mt-4 flex items-start">
                  <div class="flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      class="h-6 w-6 text-blue-700"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  </div>
                  <p class="ml-3 text-base leading-6 font-medium text-gray-500">
                    All Widget Types
                  </p>
                </li>
                <li class="mt-4 flex items-start">
                  <div class="flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      class="h-6 w-6 text-blue-700"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  </div>
                  <p class="ml-3 text-base leading-6 font-medium text-gray-500">
                    CMS Integration
                  </p>
                </li>
              </ul>
              <div class="mt-24">
                <div class="rounded-lg shadow-md">
                  <a
                    href="https://forms.gle/q8qxsqpcFH8VCLo8A"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-describedby="tier-growth"
                    class="block w-full text-center rounded-lg border border-transparent bg-blue-800 px-6 py-4 text-xl leading-6 font-medium text-white hover:bg-blue-600 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue transition ease-in-out duration-150"
                  >
                    Create a Free Account
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingCards;
