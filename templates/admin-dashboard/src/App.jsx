import { useEffect } from 'react';
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { FiSettings } from "react-icons/fi";
import { Navbar, Sidebar, ThemeSettings, Footer } from "./components";
import {
    Customers,
    Ecommerce,
    Editor,
    Employees,
    Kanban,
    Orders,
    Calendar,
    ColorPicker,
    Line,
    Area,
    Bar,
    Pie,
    Financial,
    ColorMapping,
    Pyramid,
    Stacked,
} from "./pages";
import { useStateContext } from "./contexts/ContextProvider";

function App() {
    const {
        setCurrentColor,
        setCurrentMode,
        currentMode,
        activeMenu,
        currentColor,
        themeSettings,
        setThemeSettings,
    } = useStateContext();
	
	useEffect(() => {
    const currentThemeColor = localStorage.getItem('colorMode');
    const currentThemeMode = localStorage.getItem('themeMode');
    if (currentThemeColor && currentThemeMode) {
      setCurrentColor(currentThemeColor);
      setCurrentMode(currentThemeMode);
    }
  }, []);

    return (
        <div className={currentMode === "Dark" ? "dark" : ""}>
            <Router>
                <div className="flex relative dark:bg-main-dark-bg">
                    <div className="fixed right-4 bottom-4" style={{ zIndex: "999" }}>
                        <TooltipComponent content="Settings" position="Top">
                            <button
                                type="button"
                                className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white"
                                style={{ backgroundColor: currentColor, borderRadius: "50%" }}
                                onClick={() => setThemeSettings(true)}
                            >
                                <FiSettings />
                            </button>
                        </TooltipComponent>
                    </div>
                    {activeMenu ? (
                        <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
                            <Sidebar />
                        </div>
                    ) : (
                        <div className="w-0 dark:bg-secondary-dark-bg">
                            <Sidebar />
                        </div>
                    )}
                    <div
                        className={`dark:bg-main-dark-bg bg-main-bg min-h-screen
                        w-full ${activeMenu ? " md:ml-72" : "flex-2 "}`}
                    >
                        <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
                            <Navbar />
                        </div>
                        <div>
                            {themeSettings && <ThemeSettings />}
                            <Routes>
                                {/* dashboard  */}
                                <Route path="/" element={<Ecommerce />} />
                                <Route path="/ecommerce" element={<Ecommerce />} />

                                {/* pages  */}
                                <Route path="/orders" element={<Orders />} />
                                <Route path="/employees" element={<Employees />} />
                                <Route path="/customers" element={<Customers />} />

                                {/* apps  */}
                                <Route path="/calendar" element={<Calendar />} />
                                <Route path="/kanban" element={<Kanban />} />
                                <Route path="/editor" element={<Editor />} />
                                <Route path="/color-picker" element={<ColorPicker />} />

                                {/* charts  */}
                                <Route path="/line" element={<Line />} />
                                <Route path="/area" element={<Area />} />
                                <Route path="/bar" element={<Bar />} />
                                <Route path="/pie" element={<Pie />} />
                                <Route path="/financial" element={<Financial />} />
                                <Route path="/color-mapping" element={<ColorMapping />} />
                                <Route path="/pyramid" element={<Pyramid />} />
                                <Route path="/stacked" element={<Stacked />} />
                            </Routes>
                        </div>
                        <Footer />
                    </div>
                </div>
            </Router>
        </div>
    );
}

export default App;
