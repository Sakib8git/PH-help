import React from "react";

const ToggleBtn = ({ toggler, setToggler }) => {
  const btns = ["All", "Pending", "Submitted", "Reviewed"];
  //   console.log(toggler);
  return (
    <div className="text-right my-6 ">
      {btns.map((btn, ind) => {
        console.log(ind);
        return (
          <button
            onClick={() => {
              setToggler(btn);
            }}
            className={`bg-purple-200 text-purple-500 font-semibold py-1 px-3 cursor-pointer ${ind== 0 && "rounded-l-md"}
            ${ind== btns.length-1 && "rounded-r-md"}
             ${
              toggler == btn && "bg-purple-500 text-white"
            } `}
          >
            {btn}
          </button>
        );
        // console.log(btn);
      })}
    </div>
  );
};

export default ToggleBtn;

{
  /* <button
  onClick={() => {
    setToggler("All");
  }}
  className={`bg-purple-200 text-purple-500 font-semibold py-1 px-3 cursor-pointer rounded-l-md ${
    toggler == "All" && "bg-purple-500 text-white"
  } `}
>
  All
</button>
<button
  onClick={() => {
    setToggler("Pending");
  }}
  className={`bg-purple-200 text-purple-500 font-semibold py-1 px-3 cursor-pointer  ${
    toggler == "Pending" && "bg-purple-500 text-white"
  } `}
>
  Pending
</button>
<button
  onClick={() => {
    setToggler("Submitted");
  }}
  className={`bg-purple-200 text-purple-500 font-semibold py-1 px-3 cursor-pointer  ${
    toggler == "Submitted" && "bg-purple-500 text-white"
  } `}
>
  Submitted
</button>
<button
  onClick={() => {
    setToggler("Reviewed");
  }}
  className={`bg-purple-200 text-purple-500 font-semibold py-1 px-3 cursor-pointer rounded-r-md  ${
    toggler == "Reviewed" && "bg-purple-500 text-white"
  } `}
>
  Reviewed
</button> */
}
