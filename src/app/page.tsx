'use client'
import { useState, useCallback } from 'react'
import SearchBar from '@/components/SearchBar'
import ResultList from '@/components/ResultsList'
import Spinner from '@/components/Spinner'
import SortControls from '@/components/SortControls'

type Result = {
  title: string
}


type SortDirection = "asc" | "desc" | "none"



export default function Home() {
  const [results, setResults] = useState<Result[] | null>(null)
  const [loading, setLoading] = useState(false)
  const [sortDirection, setSortDirection] = useState<SortDirection>("none")


  const fetchResults = useCallback(async (query: string) => {
    if (!query) return setResults([])
    setLoading(true)

    try {
      const res = await fetch(`/api/search?q=${query}`)
      const data: Result[] = await res.json()
      setResults(data)
    } catch (err) {
      setResults([])
    } finally {
      setLoading(false)
    }
  }, [])

  const sortedResults = useCallback(() => {
    if (!results) return null

    if (sortDirection === "none") return results

    return [...results].sort((a, b) => {
      if (sortDirection === "asc") {
        return a.title.localeCompare(b.title)
      } else {
        return b.title.localeCompare(a.title)
      }
    }
    )
  }, [results, sortDirection])

  const handleSortChange = (direction: SortDirection) => {
    setSortDirection(direction)
  }

  return (
    <div className="max-w-xl mx-auto p-6 space-y-4">
      <h1 className='text-2xl font-boldtext-center mb-6'>Search</h1>
      <SearchBar onSearch={fetchResults} />

      {results && results.length > 0 && (
        <SortControls
          sortDirection={sortDirection}
          onSortChange={handleSortChange}
        />
      )}

      {loading ? <Spinner /> : <ResultList results={sortedResults()} />}
    </div>
  )
}