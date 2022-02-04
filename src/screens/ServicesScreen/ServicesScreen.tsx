import Container from '../../components/Container';
import TextContainer from '../../components/TextContainer';

const ServicesScreen = () => {
    return (
        <Container style={{ flexDirection: 'column' }}>
            <TextContainer
                style={{
                    padding: '2rem',
                    maxWidth: '50rem',
                    fontSize: '1.5rem'
                }}
            >
                Pandora's box - is your new way of expressing yourself and
                exploring the world of media content with delight
            </TextContainer>
            <TextContainer
                style={{
                    paddingTop: '2rem',
                    maxWidth: '50rem',
                    fontSize: '1.2rem',
                    textAlign: 'center'
                }}
            >
                Pandora's Box - is our current main work in progress. It is a
                media hosting resource where you can find content on almost any
                topic in your favorite short video format. Be a part of the
                community and share your content with others. We believe you
                will fell in love once it is released!
            </TextContainer>
        </Container>
    );
};

export default ServicesScreen;
