import Container from '../../components/Container';
import TextContainer from '../../components/TextContainer';

const ContactScreen = () => {
    return (
        <Container style={{ flexDirection: 'column' }}>
            <TextContainer
                style={{
                    padding: '2rem',
                    maxWidth: '50rem',
                    fontSize: '1.5rem'
                }}
            >
                kostyabek@gmail.com
            </TextContainer>
            <TextContainer
                style={{
                    padding: '2rem',
                    maxWidth: '50rem',
                    fontSize: '1.5rem'
                }}
            >
                danielboyko02@gmail.com
            </TextContainer>
            <TextContainer
                style={{
                    padding: '2rem',
                    maxWidth: '50rem',
                    fontSize: '1.5rem'
                }}
            >
                siheev.alex@gmail.com
            </TextContainer>
            <TextContainer
                style={{
                    padding: '2rem',
                    maxWidth: '50rem',
                    fontSize: '1.5rem'
                }}
            >
                choutaakuma@gmail.com
            </TextContainer>
        </Container>
    );
};

export default ContactScreen;
