import { useState, useCallback, useRef } from "react";

const useUndoRedo = (initialState) => {
  const [state, setState] = useState(initialState);
  const history = useRef([initialState]);
  const [index, setIndex] = useState(0);

  const set = useCallback(
    (newState) => {
      const newHistory = history.current.slice(0, index + 1);
      newHistory.push(newState);
      history.current = newHistory;
      setState(newState);
      setIndex((prevIndex) => prevIndex + 1);
    },
    [index],
  );

  const undo = useCallback(() => {
    if (index > 0) {
      setState(history.current[index - 1]);
      setIndex((prevIndex) => prevIndex - 1);
    }
  }, [index]);

  const redo = useCallback(() => {
    if (index < history.current.length - 1) {
      setState(history.current[index + 1]);
      setIndex((prevIndex) => prevIndex + 1);
    }
  }, [index]);

  return { state, set, undo, redo };
};

export default useUndoRedo;
