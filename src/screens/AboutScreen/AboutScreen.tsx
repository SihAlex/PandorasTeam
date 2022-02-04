import Container from '../../components/Container';
import TextContainer from '../../components/TextContainer';

const AboutScreen = () => {
    return (
        <Container>
            <TextContainer style={{ padding: '2rem', maxWidth: '50rem', fontSize: '1.5rem' }}>
                Who are we? Well, we consider ourselves as a group of fresh and ambitious software developers, who is looking forward to make our work as professional as it could possibly be
            </TextContainer>
        </Container>
    );
};

export default AboutScreen;
