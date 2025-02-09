/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useEffect, useState } from "react";

// * Key name should be the even code name
function actionByKey(key: any) {
  const keyActionMap: any = {
    KeyW: "moveForward",
    ArrowUp: "moveForward",
    KeyS: "moveBackward",
    ArrowDown: "moveBackward",
    KeyA: "moveLeft",
    ArrowLeft: "moveLeft",
    KeyD: "moveRight",
    ArrowRight: "moveRight",
    Space: "jump",
    Digit1: "dirt",
    Digit2: "grass",
    Digit3: "glass",
    Digit4: "wood",
    Digit5: "log",
  };
  return keyActionMap[key];
}

export const useKeyboard = () => {
  const [actions, setActions] = useState({
    moveForward: false,
    moveBackward: false,
    moveLeft: false,
    moveRight: false,
    jump: false,
    dirt: false,
    grass: false,
    glass: false,
    wood: false,
    log: false,
  });

  const handleKeyDown = useCallback((event: any) => {
    //  * See the key events and details
    // console.log(event);

    const action = actionByKey(event.code);
    if (action) {
      setActions((prev) => {
        return {
          ...prev,
          [action]: true,
        };
      });
    }
  }, []);
  const handleKeyUp = useCallback((event: any) => {
    const action = actionByKey(event.code);
    if (action) {
      setActions((prev) => {
        return {
          ...prev,
          [action]: false,
        };
      });
    }
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);
    return () => {
      document.addEventListener("keydown", handleKeyDown);
      document.addEventListener("keyup", handleKeyUp);
    };
  }, [handleKeyDown, handleKeyUp]);

  return actions;
};
