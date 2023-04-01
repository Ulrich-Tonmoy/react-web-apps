import { Suspense, useState, useTransition } from "react";
import { lazyLoader } from "../utils/lazyLoader";

const AdminData = lazyLoader("../components/AdminData", "AdminData");

const Home = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isPending, startTransition] = useTransition();

  const sumHandler = () => {
    import("../utils/sum.js").then((module) => {
      alert(module.sum(2, 2));
    });
  };

  const adminToggleHandler = () => {
    startTransition(() => {
      setIsAdmin((prev) => !prev);
    });
  };

  return (
    <>
      <h1>Home</h1>
      <button onClick={() => sumHandler()}>Add 2+2</button>
      <br />
      <br />
      <button onClick={() => adminToggleHandler()}>Toggle Admin</button>
      {isPending && <h1>Loading...</h1>}
      <Suspense fallback={<h1>Loading...</h1>}>
        {isAdmin ? <AdminData /> : <h2>Not Admin</h2>}
      </Suspense>
    </>
  );
};

export default Home;
