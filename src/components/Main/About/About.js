import React from "react";
import "../About/About.css";

const rewards = [
  {
    name: "Bamboo Stand",
    pledgePrice: 25,
    stockAmount: 101,
    description:
      "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list.",
  },
  {
    name: "Black Edition Stand",
    pledgePrice: 75,
    stockAmount: 64,
    description:
      "You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
  },
  {
    name: "Mahogany Special Edition",
    pledgePrice: 200,
    stockAmount: 0,
    description:
      "You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
  },
];
const About = () => {
  return (
    <div className="bg-white p-10 flex flex-col gap-10 rounded-xl">
      <h3 className="font-bold text-xl">About this project</h3>
      <p className="text-gray-500">
        The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform
        that elevates your screen to a more comfortable viewing height. Placing
        your monitor at eye level has the potential to improve your posture and
        make you more comfortable while at work, helping you stay focused on the
        task at hand.
      </p>
      <p className="text-gray-500">
        Featuring artisan craftsmanship, the simplicity of design creates extra
        desk space below your computer to allow notepads, pens, and USB sticks
        to be stored under the stand.
      </p>
      {rewards.map((reward) => {
        return (
          <div
            className={`flex flex-col gap-7 border-2 p-7 rounded-xl ${
              !reward.stockAmount ? `opacity-50` : `opacity-100`
            }`}
          >
            <div className="flex justify-between">
              <h3 className="font-bold">{reward.name}</h3>
              <p className="moderate-cyan">
                Pledge ${reward.pledgePrice} or more
              </p>
            </div>
            <p className="text-gray-500">{reward.description}</p>
            <div className="flex justify-between">
              <p>
                <span className="font-bold text-3xl mr-1">
                  {reward.stockAmount}
                </span>
                left
              </p>
              <button
                className={`reward-btn ${
                  !reward.stockAmount
                    ? `bg-gray-300`
                    : `moderate-cyan-bg hover:bg-[#147b74]`
                }   text-white px-7 py-3 rounded-3xl`}
              >
                Select reward
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default About;
