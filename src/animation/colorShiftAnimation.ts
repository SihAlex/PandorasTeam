import { keyframes } from 'styled-components';

const colorShiftAnimation = (
    startingColor: string,
    resultingColor: string,
    bg = false
) => {
    const anim = bg
        ? keyframes` 
        0% { background-color: ${startingColor} }
        100% { background-color: ${resultingColor} }
    `
        : keyframes` 
        0% { color: ${startingColor} }
        100% { color: ${resultingColor} }
    `;
    return anim;
};
export default colorShiftAnimation;
