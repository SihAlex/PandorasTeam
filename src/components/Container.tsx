import styled, { css } from 'styled-components';
import colorShiftAnimation from '../animation/colorShiftAnimation';

interface Props {
    children: any;
    style?: any;
    black?: boolean;
}

const Container: React.FC<Props> = ({ children, style, black = false }) => {
    const StyledDiv = styled.div`
        background-color: ${black ? 'black' : 'white'};
        flex: 1 1 auto;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        padding: 0 1rem 0 1rem;
        animation: ${colorShiftAnimation('black', 'white', true)} 1s ease-in-out
            forwards 2.5s;
    `;

    return <StyledDiv style={{ ...style }}>{children}</StyledDiv>;
};

export default Container;
