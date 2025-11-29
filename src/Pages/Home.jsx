import { useNavigate } from "react-router-dom";

function Home() {
  const nav = useNavigate();
  return (
    <div>
      <h1>Welcome to the Todo App</h1>
      <button onClick={() => nav('/login')}>Go to login</button>
    </div>
  );
}

export default Home;
