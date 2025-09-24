import React from "react";

const BigCard = () => {
  return (
    <>
      <div className="flex gap-3 text-white">
        <div className="card my-3 w-80 h-[200px] bg-slate-500 shadow-sm p-7">
          <div className="card-body">
            <div className="flex flex-col justify-center items-center">
              <h2 className="text-3xl font-bold ">Pending</h2>
              <p className="text-xl">0</p>
            </div>
          </div>
        </div>

        <div className="card my-3 w-80 h-[200px] bg-purple-500 shadow-sm p-7">
          <div className="card-body">
            <div className="flex flex-col justify-center items-center">
              <h2 className="text-3xl font-bold ">Submitted</h2>
              <p className="text-xl">0</p>
            </div>
          </div>
        </div>

        <div className="card my-3 w-80 h-[200px] bg-teal-500 shadow-sm p-7">
          <div className="card-body">
            <div className="flex flex-col justify-center items-center">
              <h2 className="text-3xl font-bold ">Reviewed</h2>
              <p className="text-xl">0</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BigCard;
