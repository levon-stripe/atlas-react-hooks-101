import { useEffect, useState } from "react";

export default function useUser(id) {
  const [user, setUser] = useState(null);
  useEffect(() => {
    setUser(null);

    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => response.json())
      .then((userJson) => setUser(userJson));
  }, [id]);
  return user;
}
