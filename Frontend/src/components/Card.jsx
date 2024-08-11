
const Card = ({ className, onClick, children, hoverEnable, variant='fill' }) => {

    const bgClass = 'bg-white dark:bg-gray-800'
    const hoverClass = 'hover:bg-gray-100 dark:hover:bg-gray-700'
    const borderClass = 'border border-gray-200/50 dark:border-gray-700/50 hover:border-gray-200/90 dark:hover:border-gray-700/80'

    var finalClass = className;
    finalClass += hoverEnable ? ' ' + hoverClass : '';
    finalClass += variant === 'border' ? ' ' + borderClass : '';
    finalClass += variant === 'fill' ? ' ' + bgClass : '';

    return (
        <div className={`shadow-[rgba(71,75,255,0.075)_0px_2px_3px] rounded-lg overflow-hidden transition-all duration-200 ${finalClass}`} onClick={onClick}>
            {children}
        </div>
    )
}

export default Card;