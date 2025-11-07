import React from "react";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center bg-slate-50">
      <img
        src="404_NotFound.png"
        alt="not found"
        className="max-w-full mb-6 w-96"
      />

      <p className="text-xl font-semibold">bạn đang đi vào nơi không thể đi</p>
    </div>
  );
};

export default NotFound;
