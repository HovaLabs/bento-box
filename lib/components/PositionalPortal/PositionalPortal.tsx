import React from "react";
import { Portal } from "../Portal";

const defaultBoundingRect: DOMRect = {
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  width: 0,
  x: 0,
  y: 0,
  height: 0,
  toJSON: () => {},
};

/**
 * PositionalPortal
 *
 * Create a component that returns a render prop which is a DOMRect of the
 * parent node. This allows you to know the position of a parent component
 * even when using a portal
 *
 */
export const PositionalPortal: React.FC<{
  children: (val: DOMRect) => React.ReactNode;
}> = ({ children }) => {
  const parentRef = React.useRef<HTMLElement>(null);
  const [parentRect, setParentRect] = React.useState<DOMRect>(
    defaultBoundingRect
  );

  React.useEffect(() => {
    const getParentRect = (): void => {
      if (!parentRef.current) {
        return;
      }

      setParentRect(parentRef.current.getBoundingClientRect());
    };

    getParentRect();
    window.addEventListener("scroll", getParentRect);
    window.addEventListener("resize", getParentRect);
    return () => {
      window.removeEventListener("scroll", getParentRect);
      window.removeEventListener("resize", getParentRect);
    };
  }, []);

  return (
    <span style={{ width: 0, height: 0, maxHeight: 0 }} ref={parentRef}>
      <Portal portalTargetID="root">{children(parentRect)}</Portal>
    </span>
  );
};
