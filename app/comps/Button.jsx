'use client'

export default function Button({children, handleClick}){
    return (
            <button onClick={handleClick}>
                {children}
            </button>
    )
}