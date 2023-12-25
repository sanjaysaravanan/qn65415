import "./App.css";

import { BrowserRouter, Route, Routes, Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      {/* header */}
      <div
        style={{
          position: "fixed",
          backgroundColor: "pink",
          top: 0,
          left: 0,
          height: 75,
          width: "100%",
        }}
      ></div>
      {/* sidebar */}
      <div
        style={{
          position: "fixed",
          backgroundColor: "black",
          top: 75,
          height: "100vh",
          width: "250px",
          left: 0,
          color: "#fff",
        }}
      >
        <Link to="/">Home</Link>
        <br />
        <br />

        <Link to="/page-one">Page One</Link>
        <br />
        <br />

        <Link to="/page-two">Page Two</Link>
      </div>
      {/* Inner Content for the Layout */}
      <div style={{ margin: "75px 0 0 250px", padding: 16 }}>
        <Outlet />
      </div>
    </>
  );
};

const Home = () => {
  return <h1>Home</h1>;
};

const PageOne = () => {
  return <h1>Page One</h1>;
};

const PageTwo = () => {
  return <h1>Page Two</h1>;
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/page-one" element={<PageOne />} />
          <Route path="/page-two" element={<PageTwo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
