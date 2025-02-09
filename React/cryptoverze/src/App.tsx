import "./App.css";
import "antd/dist/reset.css";
import { Routes, Route, Link } from "react-router-dom";
import { Layout, Typography, Space } from "antd";
import { Navbar, Homepage, Exchanges, Cryptocurrencies, CryptoDetails, News } from "./components";

function App() {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>

      <div className="main">
        <Layout>
          <div className="routes">
            <Routes>
              <Route path="/exchanges" element={<Exchanges />} />
              <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
              <Route path="/crypto/:coinId" element={<CryptoDetails />} />
              <Route path="/news" element={<News />} />
              <Route path="/" element={<Homepage />} />
            </Routes>
          </div>
        </Layout>

        <div className="footer">
          <Typography.Title level={5} className="footer-title">
            Cryptoverse <br /> All rights reserved.
          </Typography.Title>

          <Space>
            <Link to="/">Home</Link>
            <Link to="/exchanges">Exchanges</Link>
            <Link to="/news">News</Link>
          </Space>
        </div>
      </div>
    </div>
  );
}

export default App;
