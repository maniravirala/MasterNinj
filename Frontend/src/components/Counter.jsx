import { motion, useSpring, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

const Counter = ({ value, fontSize=16 }) => {
  const padding = 10;
  const height = fontSize + padding;

  const [digits, setDigits] = useState([]);

  useEffect(() => {
    const valueLength = value.toString().length;
    setDigits(Array.from({ length: valueLength }, (_, index) => 10 ** (valueLength - index - 1)));
  }, [value]);


  return (
    <div
      style={{ fontSize }}
      className="flex overflow-hidden leading-none "
    >
      {digits.map((place, index) => (
        <Digit key={index} place={place} value={value} height={height} />
      ))}
    </div>
  );
}


const Digit = ({ place, value, height }) => {
  let valueRoundedToPlace = Math.floor(value / place);
  let animatedValue = useSpring(valueRoundedToPlace);

  useEffect(() => {
    animatedValue.set(valueRoundedToPlace);
  }, [animatedValue, valueRoundedToPlace]);

  return (
    <div style={{ height }} className="relative w-[1ch] tabular-nums" >
      {[...Array(10).keys()].map((i) => (
        <Number key={i} mv={animatedValue} number={i} height={height} />
      ))}
    </div>
  );
}

const Number = ({ mv, number, height }) => {
  let y = useTransform(mv, (latest) => {
    let placeValue = latest % 10;
    let offset = (10 + number - placeValue) % 10;

    let memo = offset * height;

    if (offset > 5) {
      memo -= 10 * height;
    }

    return memo;
  });

  return (
    <motion.span
      style={{ y }}
      className="absolute inset-0 flex items-center justify-center"
    >
      {number}
    </motion.span>
  );
}

export default Counter;
