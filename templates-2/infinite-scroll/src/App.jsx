import Example1 from "./components/Example1";
import Example2 from "./components/Example2";
import { useState } from "react";

function App() {
    const [example, setExample] = useState("Example1");

    const handleClick = () => {
        if (example === "Example1") setExample("Example2");
        else setExample("Example1");
    };

    if (example === "Example1")
        return (
            <>
                <button onClick={handleClick}>Example2</button>
                <Example1 />
            </>
        );
    else
        return (
            <>
                <button onClick={handleClick}>Example1</button>
                <Example2 />
            </>
        );
}

export default App;
