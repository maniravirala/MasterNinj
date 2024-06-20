import { useState, useEffect, useRef } from "react";

const useElementSize = () => {
  const ref = useRef(null);
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const calculateSize = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const styles = window.getComputedStyle(ref.current);
        const margin = {
          top: parseFloat(styles.marginTop),
          bottom: parseFloat(styles.marginBottom),
          left: parseFloat(styles.marginLeft),
          right: parseFloat(styles.marginRight),
        };
        const padding = {
          top: parseFloat(styles.paddingTop),
          bottom: parseFloat(styles.paddingBottom),
          left: parseFloat(styles.paddingLeft),
          right: parseFloat(styles.paddingRight),
        };
        const border = {
          top: parseFloat(styles.borderTopWidth),
          bottom: parseFloat(styles.borderBottomWidth),
          left: parseFloat(styles.borderLeftWidth),
          right: parseFloat(styles.borderRightWidth),
        };
        setSize({
          width:
            rect.width +
            margin.left +
            margin.right +
            padding.left +
            padding.right +
            border.left +
            border.right,
          height:
            rect.height +
            margin.top +
            margin.bottom +
            padding.top +
            padding.bottom +
            border.top +
            border.bottom,
        });
      }
    };

    const observer = new ResizeObserver(calculateSize);

    if (ref.current) {
      observer.observe(ref.current);
      calculateSize(); // Initial size calculation
    }

    window.addEventListener("resize", calculateSize);

    return () => {
      if (ref.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(ref.current);
      }
      window.removeEventListener("resize", calculateSize);
    };
  }, []);

  return [ref, size];
};

export default useElementSize;
