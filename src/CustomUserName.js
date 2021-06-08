import useUser from "./useUser";

export default function UserName(props) {
  const { id, label } = props;
  const user = useUser(id);

  return (
    <>
      <span>Name: {user?.name || "..."}</span>
      <br />
      <span>Label: {label}</span>
    </>
  );
}
