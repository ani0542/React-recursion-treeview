import React from 'react'

function RecursiveComponent({ name, items }) {
    const hasChildren = items && items.length
    
    return (
        <>
                    {name}
                    {hasChildren && items.map((item) => (
                        <RecursiveComponent key={item.name} {...item} />
                    ))}
        </>
    )
}

export default RecursiveComponent
