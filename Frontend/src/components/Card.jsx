
const Card = ({ className, children, hoverEnable}) => {

    const bgClass = 'bg-white dark:bg-gray-800'
    const hoverClass = hoverEnable && 'hover:bg-gray-100 dark:hover:bg-gray-700'

    return (
        <div className={`shadow-[rgba(71,75,255,0.075)_0px_2px_3px] rounded-lg overflow-hidden transition-all duration-200 ${className} ${hoverClass} ${bgClass}`}>
            {children}
        </div>
    )
}

export default Card;