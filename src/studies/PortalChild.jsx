import React from "react";

export default function PortalChild({ setIsModalOn }) {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: "rgb(128, 128, 128)",
      }}
    >
      <div style={{ background: "lightgrey", width: 200, height: 200 }}>
        <h3>portal</h3>
        <button onClick={() => setIsModalOn(false)}>close</button>
      </div>
    </div>
  );
}
