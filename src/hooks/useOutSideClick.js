import { useEffect, useRef } from "react";

export function useOutsideClick(handler, listenCapturing = true) {
  const ref = useRef();
  useEffect(() => {
    function handleClick(e) {
      //does not contain the we click on modal
      if (ref.current && !ref.current.contains(e.target)) {
        handler();
      }
      // ref.current && ref.current.contains(e.target) ? "" : close();
    }

    //event will be handle down the tree if we gave true(only capturing phase)
    document.addEventListener("click", handleClick, listenCapturing);

    return () =>
      document.removeEventListener("click", handleClick, listenCapturing);
  }, [handler, listenCapturing, ref]);
  return ref;
}
