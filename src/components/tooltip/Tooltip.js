import { useRef, useLayoutEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import TooltipContainer from './TooltipContainer.js';

export default function Tooltip({ children, targetRect }) {
    const ref = useRef(null);
    const [tooltipHeight, setTooltipHeight] = useState(0);
    const [tooltipWidth, setTooltipWidth] = useState(0);

    useLayoutEffect(() => {
        const { height, width } = ref.current.getBoundingClientRect();
        setTooltipHeight(height);
        setTooltipWidth(width);
    }, []);

    let tooltipX = 0;
    let tooltipY = 0;
    if (targetRect !== null) {
        tooltipX = targetRect.left - tooltipWidth / 2 + targetRect.width / 2;
        if (tooltipX <= 0) {
            if (targetRect.left < 0) {
                tooltipX = 0;
            } else {
                tooltipX = targetRect.left;
            }

        }
        tooltipY = targetRect.top - tooltipHeight;
        if (tooltipY < 0) {
            // It doesn't fit above, so place below.
            tooltipY = targetRect.bottom + targetRect.height / 2;
        }
    }

    return createPortal(
        <TooltipContainer x={tooltipX} y={tooltipY} contentRef={ref}>
            {children}
        </TooltipContainer>,
        document.body
    );
}
