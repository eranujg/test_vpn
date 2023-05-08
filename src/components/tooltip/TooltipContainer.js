export default function TooltipContainer({ children, x, y, contentRef }) {
    return (
        <div
            style={{
                position: 'absolute',
                pointerEvents: 'none',
                left: 0,
                top: 0,
                transform: `translate3d(${x}px, ${y}px, 0)`
            }}
            className="bg-black text-white p-6 text-center max-w-sm  rounded-xl"
            ref={contentRef}
        >
            <div className="tooltip">
                {children}
            </div>
        </div>
    );
}
