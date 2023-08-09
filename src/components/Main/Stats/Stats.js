import React, { useEffect, useRef } from "react";
import "../../Main/Stats/Stats.css";
const Stats = ({ data }) => {
  const percentage = `${
    (data.backedAmount.replace(/[^0-9.-]/g, "") / 100000) * 100
  }%`;
  const indicator = useRef(null);
  useEffect(() => {
    indicator.current.style.width = percentage;
  }, []);
  return (
    <section className="flex flex-col gap-10 bg-white w-full rounded-lg p-10">
      <div className="flex flex-col mobile:flex-row items-center gap-7 justify-start">
        <div className="flex flex-col gap-2 items-center mobile:items-start border-b-2 mobile:border-r-2 mobile:border-b-0 py-5 mobile:pr-[4.25rem] mobile:py-0">
          <h3 className="font-bold text-3xl text-center">
            ${data.backedAmount}
          </h3>
          <p className="text-gray-400">of $100,000 backed</p>
        </div>
        <div className="flex flex-col gap-2 items-center mobile:items-start border-b-2 mobile:border-r-2 mobile:border-b-0 py-5 mobile:pr-[4.25rem] mobile:py-0">
          <h3 className="font-bold text-3xl text-center">
            {data.totalBackers}
          </h3>
          <p className="text-gray-400 ">total backers</p>
        </div>
        <div className="flex flex-col gap-2 items-center mobile:items-start">
          <h3 className="font-bold text-3xl text-center">{data.daysLeft}</h3>
          <p className="text-gray-400 ">days left</p>
        </div>
      </div>
      <div>
        <div className="w-full bg-slate-100 h-5 rounded-2xl">
          <div
            ref={indicator}
            className={`moderate-cyan-bg h-full rounded-2xl`}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
