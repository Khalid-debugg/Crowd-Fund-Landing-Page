import React from "react";

const Intro = () => {
  return (
    <section className="flex flex-col gap-7 justify-center items-center rounded-lg w-full bg-white  p-10 mt-[10rem] sm:mt-[14rem]">
      <svg
        className="relative top-[-70px] mb-[-20px]"
        width="56"
        height="56"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g fill="none" fill-rule="evenodd">
          <circle fill="#000" cx="28" cy="28" r="28" />
          <g fill-rule="nonzero">
            <path
              d="M15.565 28.565a1.93 1.93 0 012.606-.113l.122.113 10.142 10.142a1.93 1.93 0 01-2.606 2.84l-.122-.112-10.142-10.142a1.93 1.93 0 010-2.728z"
              fill="#444"
            />
            <path
              d="M36.19 17.48c1.006-.996 2.706-.34 2.805 1.026l.005.126v10.736c0 .9-.737 1.629-1.646 1.629a1.64 1.64 0 01-1.642-1.507l-.005-.122v-6.805l-8.043 7.957c-1.006.996-2.707.34-2.806-1.026l-.004-.126v-6.805L16.81 30.52a1.66 1.66 0 01-2.224.095l-.105-.095a1.616 1.616 0 01-.096-2.2l.096-.103L25.336 17.48c1.006-.996 2.707-.34 2.806 1.026l.004.126v6.804l8.043-7.956z"
              fill="#FFF"
            />
          </g>
        </g>
      </svg>
      <h2 className="font-[700] text-xl text-center px-10 mt-[-3rem]">
        Mastercraft Bamboo Monitor Riser
      </h2>
      <div className="text-gray-500 text-center text-sm/[15px] leading-6">
        A beautiful & handcrafted monitor stand to reduce neck and eye strain.
      </div>
      <div className="flex sm:justify-between justify-center items-center w-full">
        <button className="w-[14rem] font-[600] mr-3 text-white py-4 px-6 rounded-3xl moderate-cyan-bg">
          Back this project
        </button>
        <button className="flex justify-between items-center dark-gray bg-gray-200 rounded-full h-14">
          <svg width="56" height="56" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" fill-rule="evenodd">
              <circle fill="#2F2F2F" cx="28" cy="28" r="28" />
              <path fill="#B1B1B1" d="M23 19v18l5-5.058L33 37V19z" />
            </g>
          </svg>
          <div className="p-5 font-bold hidden bookmark">Bookmark</div>
        </button>
      </div>
    </section>
  );
};

export default Intro;
