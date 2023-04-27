import { Routes, Route, Link, Outlet } from "react-router-dom";
import { Suspense } from "react";
import { lazyLoader } from "./utils/lazyLoader";

// Default Export Component
// const Home = lazy(() => import("../components/Home"))
// Named Export Component
/* const About = lazy(() =>
  import("../components/About").then((module) => {
    return { default: module.About };
  })
); */

const Home = lazyLoader("../components/Home");
const Store = lazyLoader("../components/Store");
const About = lazyLoader("../components/About", "About");

function App() {
  return (
    <Routes>
      <Route path="/" element={<NavWrapper />}>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/about" element={<About />} />
      </Route>
    </Routes>
  );
}

function NavWrapper() {
  return (
    <>
      <nav style={{ display: "flex", gap: "1rem" }}>
        <Link to="/">Home</Link>
        <Link to="/store">Store</Link>
        <Link to="/about">About</Link>
      </nav>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Outlet />
      </Suspense>
    </>
  );
}

export default App;
