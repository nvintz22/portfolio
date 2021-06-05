import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import styles from './styles.module.css'
import { Jobs, Gradient } from './work'
import {
    Container,
    DotText,
    Content,
    Title,
    SubTitle,
    Description,
    StackContainer,
    BoxStack
} from './index.style'

const Page = ({ offset, gradient, onClick, children }) => (
    <>
      <ParallaxLayer offset={offset} speed={0.2} onClick={onClick}>
        <div className={styles.slopeBegin} />
      </ParallaxLayer>
  
      <ParallaxLayer offset={offset} speed={0.6} onClick={onClick}>
        <div className={`${styles.slopeEnd} ${styles[gradient]}`} />
      </ParallaxLayer>
  
      <ParallaxLayer className={`${styles.text}`} offset={offset} speed={0.3}>
       {children}
      </ParallaxLayer>
    </>
  )

const Work = () => {
    const parallax = useRef(null)

    const scroll = (to) => {
        if (parallax.current) {
          parallax.current.scrollTo(to)
        }
      }


    const Works = Jobs.map((job, index) => (
        <Page offset={index} gradient={Gradient[index]} onClick={() => scroll(index + 1 === Jobs.length ? 0 : index + 1)}>
            <Content>
                <Title>{job.title}</Title>
                <SubTitle>{job.company}</SubTitle>
                <Description>
                    <div>Key roles:</div>
                    <ul>
                        {
                            job.roles.map(role => (
                                <li>{role}</li>
                            ))
                        }
                    </ul>
                    { job.stacks.length >= 1 && 
                    (
                    <>
                    <div>Tech Stack</div>
                    <StackContainer>
                        {
                            job.stacks.map(stack => (
                                <BoxStack>{stack}</BoxStack>
                            ))
                        }
                    </StackContainer>
                    </>
                    )}   
                </Description>
            </Content>
        </Page>
    ))

    return (
        <Container>
            <Link to="/" style={{ textDecoration: 'none' }}>
                <DotText>
                    Dan
                </DotText>
            </Link>
            <div style={{ background: '#dfdfdf' }}>
                <Parallax className={styles.container} ref={parallax} pages={Jobs.length} horizontal>
                    {Works}
                </Parallax>
            </div>
        </Container>
    )
}


export default Work