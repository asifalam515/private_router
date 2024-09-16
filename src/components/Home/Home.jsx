import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Home = () => {
  const authInfo = useContext(AuthContext);
  console.log(authInfo);
  return (
    <div>
      <h2 className="text-2xl">this is home </h2>
      <h2 className="text-5xl">I am home</h2>
    </div>
  );
};

export default Home;
