import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ExerciseDetails from "./pages/ExerciseDetails";
import Footer from "./components/Footer";
import { useState } from "react";
import { ArrowUpward } from "@mui/icons-material";

function App() {
    const [displayButton, setDisplayButton] = useState("");

    window.onscroll = function () {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            setDisplayButton("block");
        } else {
            setDisplayButton("none");
        }
    };

    function topFunction() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }

    return (
        <Router>
            <Box width="400px" sx={{ width: { xl: "1488px" } }} m="auto">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/exercise/:id" element={<ExerciseDetails />} />
                </Routes>
            </Box>
            <Footer />
            <button onClick={topFunction} id="top" style={{ display: displayButton }}>
                <ArrowUpward />
            </button>
        </Router>
    );
}

export default App;
