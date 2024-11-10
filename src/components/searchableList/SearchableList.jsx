import { useRef, useState } from "react";

export default function SearchableList({ items, children, itemKeyFn }) {
    const [searchTerms, setSearchTerms] = useState('');
    const lastInputChange = useRef();

    const searchResults = items.filter(item => JSON.stringify(item).toLocaleLowerCase().includes(searchTerms.toLocaleLowerCase()));

    function handleSearch(event) {
        if (lastInputChange) {
            clearTimeout(lastInputChange.current);
        }

        lastInputChange.current = setTimeout(() => {
            lastInputChange.current = null;
            const searchInput = event.target.value;
            setSearchTerms(searchInput);
        }, 500);
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