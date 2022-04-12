import React, { useState } from "react";
import { PuffLoader } from "react-spinners";

const Loading = ({ loading }) => {
  let [color, setColor] = useState("#ffffff");
  return (
    <div className="flex items-center justify-center w-full h-screen overflow-hidden">
      <PuffLoader color={color} loading={loading} size={100} />
    </div>
  );
};

export default Loading;
