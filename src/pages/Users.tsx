import { useUserData } from "../hooks/useUserData";

function UserList(props) {
  return <div>{props.user?.name}</div>;
}

const Users = () => {
  const { users, error, loading } = useUserData();

  return (
    <div>
      {users.map((user) => (
        <UserList key={user?.id} user={user}></UserList>
      ))}
    </div>
  );
};

export default Users;
