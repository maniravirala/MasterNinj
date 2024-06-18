import { Link } from 'react-router-dom';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { ScrollShadow } from "@nextui-org/react";
import { ArrowDown2 } from 'iconsax-react';

const NavigationMenu = ({ navLinks, activeLink, isExpanded, setIsExpanded }) => {
    const [isOpened, setIsOpened] = useState('')
    return (
        <div className="flex flex-col gap-2 flex-1 overflow-y-auto overflow-x-hidden">
            <ScrollShadow hideScrollBar size={80} >
                <div className="flex flex-col gap-2 flex-1 overflow-y-auto overflow-x-hidden">
                    {navLinks.map((link) => (
                        link.children ? (
                            <div key={link.name} >
                                <button
                                    className={`flex w-full items-center gap-4 p-2 rounded-lg border-0 focus:outline-none ${activeLink === link.path ? "bg-bgActive" : "hover:bg-bgHover"}`}
                                    onClick={() => {
                                        setIsOpened(isOpened === link.path ? '' : link.path)
                                        setIsExpanded(true)
                                    }
                                    }
                                >
                                    {link.icon}
                                    {isExpanded && <span>{link.name}</span>}
                                    {isExpanded &&
                                        <ArrowDown2 size={20} className={`ml-auto ${isOpened === link.path ? 'transform rotate-180' : ''}`} />
                                    }
                                </button>

                                {
                                    link.children && isOpened === link.path &&
                                    isExpanded &&
                                    (<div className="flex flex-col gap-2 ml-8">
                                        {link.children.map((child) => (
                                            <Link
                                                to={child.path}
                                                key={child.name}
                                                className={`flex items-center gap-4 p-2 rounded-lg ${activeLink === child.path ? "bg-bgActive" : "hover:bg-bgHover"}`}
                                            >
                                                {child.icon}
                                                {isExpanded && <span>{child.name}</span>}
                                            </Link>
                                        ))}
                                    </div>
                                    )
                                }
                            </div>

                        ) : (
                            <Link
                                to={link.path}
                                key={link.name}
                                className={`flex items-center gap-4 p-2 rounded-lg ${activeLink === link.path ? "bg-bgActive" : "hover:bg-bgHover"}`}
                            >
                                {link.icon}
                                {isExpanded && <span>{link.name}</span>}
                            </Link>
                        )
                    ))}
                </div>
            </ScrollShadow>
        </div>
    );
};

NavigationMenu.propTypes = {
    navLinks: PropTypes.array.isRequired,
    activeLink: PropTypes.string.isRequired,
    isExpanded: PropTypes.bool.isRequired,
    setIsExpanded: PropTypes.func.isRequired,
};


export default NavigationMenu;
