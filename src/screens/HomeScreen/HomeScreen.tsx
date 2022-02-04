import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled, { keyframes, css } from 'styled-components';
import { openBlackboxRequest } from '../../store/actions';
import { RootState } from '../../store/reducers';
import growAnimation from '../../animation/growAnimation';
import fadeInAnimation from '../../animation/fadeInAnimation';
import Container from '../../components/Container';
import colorShiftAnimation from '../../animation/colorShiftAnimation';
import TextContainer from '../../components/TextContainer';

interface Props {
    showHeader: (show: boolean) => void;
}

interface StyledProps {
    grow: boolean;
    isOpened: boolean;
}

const BoxContainer = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const BlackBox = styled.div`
    ${(props: StyledProps) =>
        props.isOpened
            ? css`
                  height: 100%;
                  width: 100%;
              `
            : css`
                  height: 16rem;
                  width: 16rem;
              `};
    background-color: black;
    animation: ${(props: StyledProps) =>
            props.grow
                ? css`
                      ${growAnimation}
                  `
                : css`
          none
        `}
        3.5s forwards;
    transition: 0.1s;
    &:hover {
        ${(props: StyledProps) =>
            props.isOpened
                ? css`none`
                : css`
                      height: 18rem;
                      width: 18rem;
                  `};
    }
`;

const AnimatedDiv = styled.div`
    opacity: 0;
    color: red;
    animation: ${fadeInAnimation} 1s ease-in-out forwards 0.1s,
        ${colorShiftAnimation('red', 'white')} 1s ease-in-out forwards 1.5s,
        ${colorShiftAnimation('white', 'black')} 1s ease-in-out forwards 2.5s;
    font-size: 3rem;
    padding-bottom: 1rem;
`;

const DelayedAnimatedDiv = styled.div`
    opacity: 0;
    color: white;
    animation: ${fadeInAnimation} 1s ease-in-out forwards 1.5s,
        ${colorShiftAnimation('white', 'black')} 1s ease-in-out forwards 2.5s;
    font-size: 2rem;
`;

const HomeScreen: React.FC<Props> = ({ showHeader }) => {
    const [grow, setGrow] = useState(false);
    const [isOpened, setIsOpened] = useState(
        useSelector((state: RootState) => state.layout.blackboxIsOpened)
    );

    const dispatch = useDispatch();

    const openBox = () => {
        if (!isOpened) {
            setGrow(true);
            dispatch(openBlackboxRequest());
        }
    };

    const openedBoxHandler = () => {
        setIsOpened(true);
        showHeader(true);
    };

    return (
        <>
            {isOpened ? (
                <Container main>
                    <TextContainer>
                        <AnimatedDiv>
                            You have opened the Pandora's Box
                        </AnimatedDiv>
                        <DelayedAnimatedDiv>
                            developoment team website
                        </DelayedAnimatedDiv>
                    </TextContainer>
                </Container>
            ) : (
                <BoxContainer>
                    <BlackBox
                        isOpened={isOpened}
                        onAnimationEnd={openedBoxHandler}
                        grow={grow}
                        onClick={openBox}
                    />
                </BoxContainer>
            )}
        </>
    );
};

export default HomeScreen;
