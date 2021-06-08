import { useEffect, useState } from "react";

export default function Clock() {
  const [time, setTime] = useState(Date.now());

  useEffect(() => {
    const intervalId = setInterval(() => setTime(Date()), 100);

    return () => clearInterval(intervalId);
  }, []);

  return <span>{time}</span>;
}
