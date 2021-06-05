import styled from '@emotion/styled'
import { Link } from 'react-router-dom'
import timg from '../../assets/img/tg2.jpg'
import { UilMobileAndroid, UilEnvelopeEdit, UilLinkedin, UilFacebook, UilGithub } from '@iconscout/react-unicons'
import mq from '../../utils/mediaQueries'

const Container = styled('div')({
    width: '100%',
    height: '100%',
    color: '#FFF'
})

const DotText = styled('div')(mq({
    fontSize: 20,
    lineHeight: '24px',
    fontWeight: 'bold',
    position: 'fixed',
    bottom: '3em',
    right: ['1em', '3em', '3em'],
    color: '#FFF',
    '&:after': {
        content: '"."',
        fontSize: 40
    }
}))

const Gap = styled('div')(mq({
    padding: ['0 1em 1em','0 2em 2em','0 3em 3em']
}))

const Title = styled('div')({
    fontSize: '6em',
    fontWeight: 'bold',
    paddingTop: '2em'
})

const LandingContainer = styled('div')({
    height: '100vh',
    width: '100%'
})

const ImgContainer = styled('div')({
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
    marginBottom: '99px'
})

const Img = styled('div')(mq({
    width: ['360px','480px','480px'],
    height: ['360px','480px','480px'],
    background: `url(${timg})`,
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    opacity: .8,
    borderRadius: '50%'
}))

const Details = styled('div')(mq({
    width: ['100%','60%','60%'],
    lineHeight: '26px',
    marginTop: '1em'
}))

const IconContainer = styled('div')({
    color: '#2bcbba',
    fill: '#2bcbba',
    display: 'flex',
    alignItems: 'center',
    margin: '10px 0'
})

const Spacer = styled('div')({ width: '10px'})

const Contact = () => (
    <Container>
        <Gap>
            <Link to="/" style={{ textDecoration: 'none' }}>
                <DotText>
                    Dan
                </DotText>
            </Link>
            <LandingContainer>
                <Title>
                    Let's get in touch.
                </Title>
            </LandingContainer>
            <ImgContainer>
                <Img />
            </ImgContainer>
            <Details>
                Though I am currently employed, I welcome opportunities where I could grow on my professional development and where I could contribute and be of help to any organization.
            </Details>
            <Details>
                Feel free to contact me in any of the platforms below.
            </Details>
            <Details>
                <IconContainer>
                    <UilMobileAndroid size="26px"/>
                    <Spacer />
                    <a href="tel:09278170077" style={{ textDecoration: 'none', color: '#2bcbba' }}>+639278170077</a>
                </IconContainer>
                <IconContainer>
                    <UilEnvelopeEdit size="26px"/> 
                    <Spacer />
                    <a href="mailto:jhon.danniel22@gmail.com" style={{ textDecoration: 'none', color: '#2bcbba' }}>jhon.danniel22@gmail.com</a>
                </IconContainer>
                <IconContainer>
                    <UilLinkedin size="26px"/> 
                    <Spacer />
                    <a 
                        href="https://www.linkedin.com/in/danniel-irvin-cajuban/" 
                        style={{ textDecoration: 'none', color: '#2bcbba' }} 
                        rel="noreferrer" 
                        target="_blank"
                    >
                        LinkedIn
                    </a>
                </IconContainer>
                <IconContainer>
                    <UilFacebook size="26px"/> 
                    <Spacer />
                    <a 
                        href="https://www.facebook.com/dannielirvin.cajuban/" 
                        style={{ textDecoration: 'none', color: '#2bcbba' }}
                        rel="noreferrer" 
                        target="_blank"    
                    >
                        Facebook
                    </a>
                </IconContainer>
                <IconContainer>
                    <UilGithub size="26px"/> 
                    <Spacer />
                    <a 
                        href="https://github.com/nvintz22" 
                        style={{ textDecoration: 'none', color: '#2bcbba' }}
                        rel="noreferrer" 
                        target="_blank"    
                    >
                        Github
                    </a>
                </IconContainer>
            </Details>
        </Gap>
    </Container>
)

export default Contact