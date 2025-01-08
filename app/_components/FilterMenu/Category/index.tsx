export function Category ({title, isActive, onClick } : { title: string, isActive: boolean, onClick?: () => void}) {
    return (
        <div role="button" onClick={onClick} className={`lowercase inline-block border border-1 border-stone-400 py-1 px-2 ${isActive ? 'bg-white text-black' : 'bg-black text-white'} hover:bg-white hover:text-black`}>{title}</div>
    )    
}