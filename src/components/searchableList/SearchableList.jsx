import { useState } from "react";

export default function SearchableList({ items, children, itemKeyFn }) {
    const [searchTerms, setSearchTerms] = useState('');

    const searchResults = items.filter(item => JSON.stringify(item).toLocaleLowerCase().includes(searchTerms.toLocaleLowerCase()));

    function handleSearch(event) {
        const searchInput = event.target.value;
        setSearchTerms(searchInput);
    }

    return (
        <div className="searchable-list">
            <input type="search" placeholder="Search" onChange={handleSearch} />
            <ul>
                {
                    searchResults.map((item) => <li key={itemKeyFn(item)}>{children(item)}</li>)
                }
            </ul>
        </div>
    )
}