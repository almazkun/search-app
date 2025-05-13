'use client'

type SortDirection = "asc" | "desc" | "none"

type Props = {
    sortDirection: SortDirection
    onSortChange: (direction: SortDirection) => void
}

export default function SortControls({ sortDirection, onSortChange }: Props) {
    return (
        <div className='flex items-center justify-end space-x-2 mb-2'>
            <span className='text-sm text-gray-500'>Sort:</span>
            <button
                className={`px-3 py-1 text-sm rounded-md ${sortDirection === 'asc'
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-200 hover:bg-gray-300'
                    }`}
                onClick={() => onSortChange("asc")}
            >A-Z
            </button>

            <button
                className={`px-3 py-1 text-sm rounded-sm ${sortDirection === 'desc'
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-200 hover:bg-gray-300'
                    }`}
                onClick={() => onSortChange("desc")}
            >
                Z-A
            </button>

            {sortDirection !== "none" && (
                <button
                    className='px-3 py-1 text-sm bg-gray-200 hover:bg-gray-300 rounded-md'
                    onClick={() => onSortChange("none")}
                >
                    Clear
                </button>
            )}

        </div>
    )
}