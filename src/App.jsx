import { useState } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import NewsFeed from "./components/NewsFeed";
import { useNewsQuery } from "./hooks/useNewsQuery";
import { useDebounce } from "./hooks/useDebounce";

export default function App() {
    const [category, setCategory] = useState("");
    const [searchQuery, setSearchQuery] = useState("");
    const debouncedSearchQuery = useDebounce(searchQuery, 500);

    let allNews = [];
    let url = "";

    if (debouncedSearchQuery) {
        url = `http://localhost:8000/v2/search?q=${debouncedSearchQuery}`;
    } else {
        url = `http://localhost:8000/v2/top-headlines?category=${category}`;
    }

    allNews = useNewsQuery(url);

    if (debouncedSearchQuery) {
        allNews = allNews?.result;
    } else {
        allNews = allNews?.articles;
    }

    const handleCategoryFilter = (category) => {
        if (category) {
            // lowercase the category
            setCategory(category.toLowerCase());
        }
    };

    const onSearchInputChange = (e) => {
        const value = e.target.value;
        setSearchQuery(value);
    };

    return (
        <>
            <Navbar
                handleCategoryFilter={handleCategoryFilter}
                searchInputValue={searchQuery}
                onSearchInputChange={onSearchInputChange}
            />
            <main className="my-10 lg:my-14">
                <NewsFeed allNews={allNews} />
            </main>

            <Footer />
        </>
    );
}
