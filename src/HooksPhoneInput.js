import { useState } from "react";
import formatPhoneNum from "./formatPhoneNum";

export default function PhoneInput() {
  const [phoneNum, setPhoneNum] = useState("");

  const handleInput = (event) => {
    setPhoneNum(formatPhoneNum(event.target.value));
  };

  return <input value={phoneNum} onChange={handleInput} />;
}
