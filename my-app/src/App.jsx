import React, { useEffect, useState } from "react";
import axios from "axios";
import QuoteCard from "./components/QuoteCard";
import ThemeToggle from "./components/ThemeToggle";
import QuoteButton from "./components/QuoteButton";

function App() {
    const [quote, setQuote] = useState({ text: "", author: "" });
    const [liked, setLiked] = useState(false);
    const [theme, setTheme] = useState("light");
    const [fontSize, setFontSize] = useState("16px");
    const [loading, setLoading] = useState(false);

    const fetchQuote = async () => {
        setLoading(true);
        try {
            const res = await axios.get(
                "https://api.allorigins.win/get?url=" +
                    encodeURIComponent("https://zenquotes.io/api/random")
            );
            const dataArray = JSON.parse(res.data.contents);
            const data = dataArray[0];
            console.log("data:", data);
            setQuote({ text: data.q, author: data.a });
            setLiked(false);
        } catch (error) {
            console.error("Error fetching quote:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchQuote();
    }, []);

    const toggleTheme = () =>
        setTheme((prev) => (prev === "light" ? "dark" : "light"));

    return (
        <div className={`app-container ${theme}`}>
            <h1>QuoteSage</h1>

            <ThemeToggle toggleTheme={toggleTheme} theme={theme} />

            <select
                onChange={(e) => setFontSize(e.target.value)}
                value={fontSize}
            >
                <option value="14px">Small</option>
                <option value="16px">Medium</option>
                <option value="20px">Large</option>
            </select>

            {loading ? (
                <div className="spinner"></div>
            ) : (
                <>
                    <QuoteCard
                        quote={quote.text}
                        author={quote.author}
                        fontSize={fontSize}
                        theme={theme}
                        liked={liked}
                        onLike={() => setLiked(!liked)}
                    />
                    <QuoteButton
                        onClick={fetchQuote}
                        label={loading ? "Loading" : "New Quote"}
                        disabled={loading}
                    />
                </>
            )}
        </div>
    );
}

export default App;
