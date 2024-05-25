import React, { useState } from "react";
import Img1 from "../../public/assets/images/icon-arrow.svg";

const Home = () => {
  const [elapsed, setElapsed] = useState({
    days: undefined,
    months: undefined,
    years: undefined,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const { day, month, year } = Object.fromEntries(formData.entries());
    const inputDate = new Date(`${year}-${month}-${day}`);
    const currentDate = new Date();
    const timeDiff = currentDate - inputDate;

    const elapsedYears = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 365));
    const elapsedMonths = Math.floor(
      (timeDiff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30)
    );
    const elapsedDays = Math.floor(
      (timeDiff % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24)
    );

    setElapsed({
      days: elapsedDays,
      months: elapsedMonths,
      years: elapsedYears,
    });
  };

  return (
    <div className="main">
      <main className="flex min-h-screen flex-col items-center justify-center ">
        <div className="w-96 rounded-xl bg-white p-8">
          <form onSubmit={handleSubmit}>
            <div className="flex gap-4">
              <div className="flex flex-col gap-1">
                <label htmlFor="day" className="text-xs">
                  DAY
                </label>
                <input
                  className="w-16 px-3 py-2 border-gray-400"
                  name="day"
                  placeholder="DD"
                  id="day"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="month" className="text-xs">
                  MONTH
                </label>
                <input
                  className="w-16 px-3 py-2"
                  name="month"
                  placeholder="MM"
                  id="month"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="year" className="text-xs">
                  YEAR
                </label>
                <input
                  className="w-16 px-3 py-2"
                  name="year"
                  placeholder="YYYY"
                  id="year"
                />
              </div>
            </div>
            <div className="relative">
              <hr className="border-b-gray-400 my-4 w-full" />
              <button
                type="submit"
                className="flex justify-center items-center absolute -top-5 right-0 h-12 w-12 rounded-full bg-purple-500"
              >
                <img src={Img1} alt="arrow" className="h-8 w-8" />
              </button>
            </div>
          </form>
          <div className="flex flex-col gap-4">
            <div className="flex gap-2 items-center">
              <span className="text-4xl font-bold text-purple-500">
                {elapsed.years !== undefined ? elapsed.years : "--"}
              </span>
              <span className="text-4xl font-bold">years</span>
            </div>
            <div className="flex gap-2 items-center">
              <span className="text-4xl font-bold text-purple-500">
                {elapsed.months !== undefined ? elapsed.months : "--"}
              </span>
              <span className="text-4xl font-bold">months</span>
            </div>
            <div className="flex gap-2 items-center">
              <span className="text-4xl font-bold text-purple-500">
                {elapsed.days !== undefined ? elapsed.days : "--"}
              </span>
              <span className="text-4xl font-bold">days</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
