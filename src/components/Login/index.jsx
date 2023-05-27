import { useUserStore } from "../../store";

const Login = () => {
  const [user, setName, logOut] = useUserStore((state) => [
    state.name,
    state.setName,
    state.logOut,
  ]);
  console.log("RENDERING LOGIN");
  return (
    <div>
      <h1>{user ? `user logged in: ${user}` : "Guest"}</h1>
      {user ? (
        <button onClick={logOut}>Log Out</button>
      ) : (
        <button onClick={() => setName("Yous")}>Log In</button>
      )}
    </div>
  );
};
export default Login;
