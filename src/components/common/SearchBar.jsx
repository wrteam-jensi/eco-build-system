import React from 'react';
import './SearchBar.css';

/**
 * SearchBar Component
 * Search input with icon and button
 */
const SearchBar = ({
    placeholder = 'Search Keyword',
    onSearch,
    className = ''
}) => {
    const [searchValue, setSearchValue] = React.useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (onSearch) {
            onSearch(searchValue);
        }
    };

    return (
        <form className={`search-bar ${className}`} onSubmit={handleSubmit}>
            <input
                type="text"
                className="search-input"
                placeholder={placeholder}
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
            />
            <button type="submit" className="search-button">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M9 17A8 8 0 1 0 9 1a8 8 0 0 0 0 16zM19 19l-4.35-4.35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Search
            </button>
        </form>
    );
};

export default SearchBar;
