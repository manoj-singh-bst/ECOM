import React from "react";

export default function Loader() {
  return (
    <div className="mt-5">
      <div
        className="spinner-border text-primary"
        role="status"
        style={{ width: "75px", height: "75px" }}
      >
        <span className="sr-only"></span>
      </div>
      <div
        className="spinner-border text-secondary"
        role="status"
        style={{ width: "75px", height: "75px" }}
      >
        <span className="sr-only"></span>
      </div>
      <div
        className="spinner-border text-success"
        role="status"
        style={{ width: "75px", height: "75px" }}
      >
        <span className="sr-only"></span>
      </div>
      <div
        className="spinner-border text-danger"
        role="status"
        style={{ width: "75px", height: "75px" }}
      >
        <span className="sr-only"></span>
      </div>
      <div
        className="spinner-border text-warning"
        role="status"
        style={{ width: "75px", height: "75px" }}
      >
        <span className="sr-only"></span>
      </div>
      <div
        className="spinner-border text-info"
        role="status"
        style={{ width: "75px", height: "75px" }}
      >
        <span className="sr-only"></span>
      </div>
      <div
        className="spinner-border text-light"
        role="status"
        style={{ width: "75px", height: "150px" }}
      >
        <span className="sr-only"></span>
      </div>
    </div>
  );
}
