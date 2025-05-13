import { NextRequest, NextResponse } from 'next/server'

const mockData = [
    { title: "Search result One" },
    { title: "Search result Tne" },
    { title: "Search result 3" },
    { title: "Search result Four" },
    { title: "Search result Five" },
    { title: "Search result Six" },
]

export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams
    const query = searchParams.get('q')?.toLowerCase() || ''

    await new Promise(resolve => setTimeout(resolve, 500))

    const results = query
        ? mockData.filter(item => item.title.toLowerCase().includes(query))
        : []

    return NextResponse.json(results)
}