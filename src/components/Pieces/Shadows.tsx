import React from 'react';
export const BlackShadow = () => (
    <defs>
        <radialGradient id="blackShadowGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%" >
            <stop offset="0%" style={{ stopColor: 'rgb(75, 85, 99)', stopOpacity: 1 }} /> {/* Corresponds to bg-gray-800 */}
            <stop offset="70%" style={{ stopColor: 'rgb(45, 55, 72)', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: 'rgb(26, 32, 44)', stopOpacity: 1 }} />
        </radialGradient>
    </defs>
);


export const WhiteShadow = () => (
    <defs>
        <radialGradient id="whiteShadowGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%" >
            <stop offset="0%" style={{ stopColor: 'rgb(230, 230, 230)', stopOpacity: 1 }} />
            < stop offset="70%" style={{ stopColor: 'rgb(180, 180, 180)', stopOpacity: 1 }} />
            < stop offset="100%" style={{ stopColor: 'rgb(150, 150, 150)', stopOpacity: 1 }} />
        </radialGradient>
    </defs>
);
