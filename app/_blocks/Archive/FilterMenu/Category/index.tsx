export function Category ({title, isActive } : { title: string, isActive: boolean }) {
    return (
        <div role="button" className="lowercase inline-block border border-1 border-stone-400 py-1 px-2 bg-black text-white hover:bg-white hover:text-black">{title}</div>
    )    
}