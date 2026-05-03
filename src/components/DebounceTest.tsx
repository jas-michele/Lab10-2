import { useState } from "react";
import { useDebounce } from "../hooks/useDebounce";

export default function DebounceSearchTest() {

    const [input, setInput] = useState("");

    const debouncedValue = useDebounce(input, 500);

    return (
        <div>
            <h2>Debounce Test</h2>

            <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Search..."
            />

            <p>Typing: {input}</p>
            <p>Debounced: {debouncedValue}</p>    
        </div>
    )
}