import { useState } from "react";
import searchImg from "../assets/icons/search.svg";
import lwsLogo from "../assets/logo.png";

export default function Navbar({
    handleCategoryFilter,
    searchInputValue,
    onSearchInputChange,
}) {
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    const handleToggleSearchBar = () => {
        setIsSearchOpen(!isSearchOpen);
    };

    const newsCategories = [
        {
            id: crypto.randomUUID(),
            name: "General",
        },
        {
            id: crypto.randomUUID(),
            name: "Business",
        },
        {
            id: crypto.randomUUID(),
            name: "Entertainment",
        },

        {
            id: crypto.randomUUID(),
            name: "Health",
        },

        {
            id: crypto.randomUUID(),
            name: "Science",
        },

        {
            id: crypto.randomUUID(),
            name: "Sports",
        },

        {
            id: crypto.randomUUID(),
            name: "Technology",
        },
    ];

    return (
        <>
            <nav className="border-b border-black py-6 md:py-8">
                <div className="container mx-auto flex flex-wrap items-center justify-between gap-6">
                    {/* <!-- date --> */}
                    <div className="flex items-center space-x-4">
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M8 0.5C12.1421 0.499999 15.5 3.85786 15.5 8C15.5 12.1421 12.1421 15.5 8 15.5C3.85786 15.5 0.5 12.1421 0.5 8C0.499999 3.85786 3.85786 0.5 8 0.5Z"
                                stroke="#00D991"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M8 15.4286L8 0.571507"
                                stroke="#00D991"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M10.4995 14.9999C10.4995 14.9999 12.5715 12.6429 12.5715 8.00008C12.5715 3.35722 10.4995 0.999939 10.4995 0.999939"
                                stroke="#00D991"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M5.50049 1.00006C5.50049 1.00006 3.4285 3.35706 3.4285 7.99992C3.4285 12.6428 5.50049 15.0001 5.50049 15.0001"
                                stroke="#00D991"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M15.4282 8L0.499512 8"
                                stroke="#00D991"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M1.5 5C1.5 5 3.5 5 8 5C12.5 5 14.5 5 14.5 5"
                                stroke="#00D991"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M1.5 11C1.5 11 3.5 11 8 11C12.5 11 14.5 11 14.5 11"
                                stroke="#00D991"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                        <span>
                            {new Date().toLocaleDateString("en-US", {
                                weekday: "long",
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                            })}
                        </span>
                    </div>

                    {/* <!-- Logo --> */}
                    <a href="/">
                        <img
                            className="max-w-[100px] md:max-w-[165px]"
                            src={lwsLogo}
                            alt="Lws"
                        />
                    </a>
                    <div className="flex">
                        {/* <!-- search bar Input Box--> */}
                        {isSearchOpen && (
                            <div className="hidden md:block">
                                <input
                                    type="text"
                                    placeholder="Search"
                                    className="border border-black px-4 py-2 rounded-md w-60"
                                    value={searchInputValue}
                                    onChange={onSearchInputChange}
                                />
                            </div>
                        )}

                        {/* <!-- Logo Ends --> */}
                        <div
                            className="flex items-center space-x-3 lg:space-x-8"
                            onClick={handleToggleSearchBar}
                        >
                            <img src={searchImg} alt="search" />
                        </div>
                    </div>
                </div>
                {/* <!-- categories --> */}
                <div className="container mx-auto mt-6">
                    <ul className="flex flex-wrap items-center justify-center gap-5 text-xs font-semibold lg:text-base">
                        {newsCategories.map((category) => (
                            <li key={category.id}>
                                <button
                                    onClick={() =>
                                        handleCategoryFilter(category?.name)
                                    }
                                >
                                    {category.name}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </>
    );
}
