'use client'
import { useState, useEffect } from 'react'


type Props = {
    onSearch: (query: string) => void
}

export default function SearchBar({ onSearch }: Props) {
    const [query, setQuery] = useState('');

    useEffect(() => {
        const delay = setTimeout(() => {
            onSearch(query)
        }, 500)
        return () => clearTimeout(delay)
    }, [query, onSearch])

    return (
        <input
            type="text"
            className="w-full p-2 border rouded-lg shadow"
            placeholder="Search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
        />
    )
}