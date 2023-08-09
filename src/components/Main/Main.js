import React, { useState } from "react";
import Stats from "../Main/Stats/Stats";
import "../Main/Main.css";
import Intro from "./Intro/Intro";
import About from "./About/About";

const Main = () => {
  return (
    <div className="flex flex-col gap-5 items-center w-11/12 sm:max-w-[45rem] my-0 mx-auto">
      <Intro />
      <Stats
        data={{
          backedAmount: "89,914",
          totalBackers: "5,007",
          daysLeft: "56",
        }}
      />
      <About />
    </div>
  );
};

export default Main;
