import { useEffect, useState } from "react";

export default function UserName(props) {
  const { id, label } = props;
  const [name, setName] = useState("...");

  useEffect(() => {
    setName("...");

    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => response.json())
      .then((userJson) => setName(userJson.name));
  }, [id]);

  return (
    <>
      <span>Name: {name}</span>
      <br />
      <span>Label: {label}</span>
    </>
  );
}
