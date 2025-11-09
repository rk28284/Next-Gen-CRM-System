import React from 'react';

export const Loading = React.memo(function Loading({
    size = 48,
    color = '#1976d2',
    message = 'Loading...',
    fullscreen = false,
    ariaLabel = 'Loading',
}) {
    const wrapperStyle = {
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        color,
        fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial',
        fontSize: 14,
        ...(fullscreen
            ? {
                    position: 'fixed',
                    inset: 0,
                    background: 'rgba(255,255,255,0.6)',
                    justifyContent: 'center',
                    zIndex: 9999,
                }
            : { justifyContent: 'flex-start' }),
    };

    const svgSize = typeof size === 'number' ? size : parseInt(size, 10) || 48;

    return (
        <div role="status" aria-live="polite" aria-label={ariaLabel} style={wrapperStyle}>
            <svg
                width={svgSize}
                height={svgSize}
                viewBox="0 0 50 50"
                aria-hidden="true"
                style={{ display: 'block' }}
            >
                <circle
                    cx="25"
                    cy="25"
                    r="20"
                    stroke={color}
                    strokeWidth="4"
                    strokeLinecap="round"
                    fill="none"
                    strokeOpacity="0.18"
                />
                <path
                    d="M45 25a20 20 0 0 1-20 20"
                    stroke={color}
                    strokeWidth="4"
                    strokeLinecap="round"
                    fill="none"
                >
                    <animateTransform
                        attributeName="transform"
                        type="rotate"
                        from="0 25 25"
                        to="360 25 25"
                        dur="0.9s"
                        repeatCount="indefinite"
                    />
                </path>
            </svg>

            <span style={{ opacity: 0.9 }}>{message}</span>
        </div>
    );
});
