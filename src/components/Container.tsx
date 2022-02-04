import styled, { css } from 'styled-components';
import colorShiftAnimation from '../animation/colorShiftAnimation';

interface Props {
    children: any;
    style?: any;
    main?: boolean;
}

const Container: React.FC<Props> = ({ children, style, main = false }) => {
    const StyledDiv = styled.div`
        background-color: ${main ? 'black' : 'white'};
        flex: 1 1 auto;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        padding: 0 1rem 0 1rem;
        animation: ${main
            ? css`
                  ${colorShiftAnimation('black', 'white', true)} 1s ease-in-out
            forwards 2.5s
              `
            : css`
                  ${colorShiftAnimation('black', 'white', true)} 0.5s ease-in-out
            forwards
              `};
    `;

    return <StyledDiv style={{ ...style }}>{children}</StyledDiv>;
};

export default Container;
