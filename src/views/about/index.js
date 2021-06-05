import styled from '@emotion/styled'
import FileSaver from 'file-saver'
import { Link } from 'react-router-dom'
import cv from '../../assets/img/cv.pdf'
import mq from '../../utils/mediaQueries'


const Container = styled('div')({
    width: '100%',
    height: '100%',
    color: '#FFF'
})

const Gap = styled('div')(mq({
    padding: ['0 1em 1em','0 2em 2em','0 3em 3em']
}))

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

const Title = styled('div')(mq({
    fontSize: ['60px', '6em', '6em'],
    fontWeight: 'bold',
    paddingTop: ['2em', '2em', '2em']
}))

const LandingContainer = styled('div')({
    height: '100vh',
    width: '100%'
})

const AboutContainer = styled('div')(mq({
    width: ['100%','60%','60%']
}))

const Bar = styled('div')({
    position: 'relative',
    zIndex: 1,
    background: '#ff4800',
    width: 55,
    height: 3,
    marginTop: '12px',
    transition: '.5s'
})

const OpenText = styled('div')({
    fontSize: 22,
    lineHeight: '29px',
    marginTop: '40px'
})

const Description = styled('div')({
    fontSize: 18,
    lineHeight: '24px',
    marginTop: '20px'
})


export const InTouchButton = styled('button')({
    width: 'auto',
    border: '2px solid #ff4800',
    backgroundColor: '#ff4800',
    color: '#FFF',
    cursor: 'pointer',
    fontSize: 15,
    fontWeight: 600,
    lineHeight: 'unset',
    textTransform: 'capitalize',
    padding: '13px 32px',
    '&::hover': {
        width: 10
    }
})

const Spacer = styled('div')({ height: '3em'})

const handleDownload = () => {
    FileSaver.saveAs(cv, "DannielCajuban-Resume.pdf")
}

const About = () => (
    <Container>
        <Gap>
            <Link to="/" style={{ textDecoration: 'none' }}>
                <DotText>
                    Dan
                </DotText>
            </Link>
            <LandingContainer>
                <Title>
                    I build web based applications
                </Title>
            </LandingContainer>
            <AboutContainer>
                <h1>About</h1>
                <Bar />
                <OpenText>
                        {
                            `
                                Hi, I'm Dan. I'm a Lead Frontend Engineer with over 9+ years of working experience related to software development.
                            `
                        }
                </OpenText>
                <Description>
                    {`
                        I'm currently based here in the Philippines and working at Samsung RND. 
                        I develop any web related applications primarily on the frontend side.
                        Though my skills and expertise are more inclined on frontend development, 
                        I also have experience and skillset for a fullstack development.

                    `}
                </Description>
                <Description>
                    {`
                        Aside from frontend development, by being a lead engineer at Samsung I also developed my skills and knowedge for Project and People management.
                        Part of my responsibilities at Samsung are to manage Project deliverables, making sure that everything are developed and delivered on or ahead of time.
                        In order to maintaint high standard and quality of work, I utitlize Agile best practices during our project developments.

                    `}
                </Description>
                <Description>
                    {`
                        I work closely with Client and other members of the Development Team to both develop detalied specification documents with clear project deliverables and timelines, 
                        and to ensure timely completion of deliverables.

                    `}
                </Description>
                <Description>
                    {`
                        As an individual I am a strong conceptual thinker who has a keen interest in all things related to the internet. 
                        I have the ability and experience needed to design and execute complex software applications for a diverse variety of users. 
                        I possess the enthusiasm and commitment to learn and develop my career within a fast paced and growing business.

                    `}
                </Description>
                <Description>
                    {`
                        You can read more about the details of my experience and expertice from my resume which is downloadable below.
                    `}
                </Description>

                <Spacer/>
                <InTouchButton onClick={handleDownload}>
                    Download CV
                </InTouchButton>
            </AboutContainer>
        </Gap>
    </Container>
)


export default About