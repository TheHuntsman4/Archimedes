import React from "react";
import { useState, CSSProperties } from "react";
import ScaleLoader from "react-spinners/ScaleLoader";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

function Spinner() {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#deb992");

  return (
    <div className="sweet-loading">


      <ScaleLoader
        color='#deb992'
        loading={loading}
        cssOverride={override}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}

export default Spinner;