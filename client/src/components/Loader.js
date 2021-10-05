import React from "react";

export default function Loader() {
  return (
    <div className="mt-5">
      <div
        className="spinner-border text-primary"
        role="status"
        style={{ width: "100px", height: "100px" }}
      >
        <span className="sr-only"></span>
      </div>
      <div
        className="spinner-border text-info"
        role="status"
        style={{ width: "100px", height: "100px" }}
      >
        <span className="sr-only"></span>
      </div>
    </div>
  );
}
