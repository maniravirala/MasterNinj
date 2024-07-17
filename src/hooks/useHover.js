import { useRef, useState, useEffect } from "react";

const useHover = (hoverPadding = 0) => {
    const [hovering, setHovering] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const handleMouseEnter = () => setHovering(true);
        const handleMouseLeave = () => setHovering(false);

        const node = ref.current;
        if (node) {
            const handleMouseMove = (e) => {
                const rect = node.getBoundingClientRect();
                const isHovering = (
                    e.clientX >= rect.left - hoverPadding &&
                    e.clientX <= rect.right + hoverPadding &&
                    e.clientY >= rect.top - hoverPadding &&
                    e.clientY <= rect.bottom + hoverPadding
                );
                setHovering(isHovering);
            };

            document.addEventListener("mousemove", handleMouseMove);
            node.addEventListener("mouseenter", handleMouseEnter);
            node.addEventListener("mouseleave", handleMouseLeave);

            return () => {
                document.removeEventListener("mousemove", handleMouseMove);
                node.removeEventListener("mouseenter", handleMouseEnter);
                node.removeEventListener("mouseleave", handleMouseLeave);
            };
        }
    }, [hoverPadding]);

    return [ref, hovering];
};

export default useHover;
