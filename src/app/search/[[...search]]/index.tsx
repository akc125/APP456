import React from 'react'

export default async function DynamicalSearch({ params }: { params: Promise<{ search?: string[] }> }) {
  const { search } = await params;
  console.log({search})
    // const myParams = search
    const category =search?.[0]
    const group = search?.[1];
    const brand = search?.[2];
    const model = search?.[3]
  return (
    <div>
      search page: {category},{group},{brand},{model} 
    </div>
  )
}
