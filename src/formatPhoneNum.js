export default function formatPhoneNum(inputStr) {
  const digits = inputStr.split("").filter((char) => char.match(/[0-9]/));

  const parts = [];
  const areaCode = digits.slice(0, 3);
  if (areaCode.length) {
    parts.push("(", ...areaCode);
  }

  const firstGroup = digits.slice(3, 6);
  if (firstGroup.length) {
    parts.push(") ", ...firstGroup);
  }

  const secondGroup = digits.slice(6, 10);
  if (secondGroup.length) {
    parts.push("-", ...secondGroup);
  }

  return parts.join("");
}
