import React from "react";
import { Oval } from "react-loader-spinner";

export default function LoadingCircle(props) {
  const { size } = props;
  const ovalSize = size ? size : 80;

  return (
    <div className="loading-container">
      <Oval
        height={ovalSize}
        width={ovalSize}
        color="#fc4747"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#cf3636"
        strokeWidth={4}
        strokeWidthSecondary={4}
      />
    </div>
  );
}
