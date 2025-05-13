type Result = {
    title: string
}

type Props = {
    results: Result[] | null
}

export default function ResultList({ results }: Props) {
    if (!results) return null
    if (results.length === 0) return <p className="text-gray-500">No results found.</p>

    return (
        <ul className="space-y-2">
            {results.map(
                (item, i) => (
                    <li key={i} className="p-4 bg-white shadow rounded-lg">
                        {item.title}
                    </li>
                ))}
        </ul>
    )
}