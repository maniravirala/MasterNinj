import { useState, useEffect } from 'react';
import Counter from './Counter';

const MinToMaxCounter = ({ prev=1, value }) => {
  const [count, setCount] = useState(Number(prev));

  useEffect(() => {setCount(value);
  }, [value]);

  return <Counter value={count} />;
};

export default MinToMaxCounter;
