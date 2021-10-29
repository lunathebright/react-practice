import React, { useState } from "react";
import { createPortal } from "react-dom/cjs/react-dom.development";
import PortalChild from "./PortalChild";

const Portal = ({ children }) => {
  return createPortal(children, document.getElementById("portal"));
};

export default function PortalParent() {
  const [isModalOn, setIsModalOn] = useState(false);

  return (
    <div>
      {isModalOn && (
        <Portal>
          <PortalChild setIsModalOn={setIsModalOn} />
        </Portal>
      )}
      <button onClick={() => setIsModalOn(true)}>open</button>
    </div>
  );
}
