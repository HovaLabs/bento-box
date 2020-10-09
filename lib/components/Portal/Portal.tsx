import React from "react";
import ReactDOM from "react-dom";

const createDivWithId = (id: string): HTMLDivElement => {
  const divWithId = document.createElement("div");
  divWithId.id = id;
  return divWithId;
};

// Idempotently create <div id="portal-target" />
const PORTAL_TARGET_ID = "root";
const defaultPortalTarget =
  document.getElementById(PORTAL_TARGET_ID) ||
  document.body.appendChild(createDivWithId(PORTAL_TARGET_ID));

export const Portal: React.FC<{
  children: React.ReactNode;
  portalTargetID?: string; // allow passing a custom ID to use as the portal target
}> = ({ children, portalTargetID }): React.ReactPortal => {
  const [el] = React.useState(document.createElement("div"));
  React.useEffect(() => {
    const portalTarget = portalTargetID
      ? document.getElementById(portalTargetID)
      : defaultPortalTarget;
    if (!portalTarget) {
      throw new Error(
        `portal target with ID "${portalTargetID}" does not exist`
      );
    }
    portalTarget.appendChild(el);
    return () => {
      portalTarget.removeChild(el);
    };
  }, [el, portalTargetID]);

  return ReactDOM.createPortal(children, el);
};
