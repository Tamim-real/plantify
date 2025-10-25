import React from "react";

const Loading = ({ size = 40, color = "#6366f1" }) => {
  return (
    <div className="flex items-center justify-center">
      <div
        className="animate-spin rounded-full border-t-4 border-b-4"
        style={{
          width: size,
          height: size,
          borderColor: `${color} transparent ${color} transparent`,
        }}
      ></div>
    </div>
  );
};

export default Loading;
