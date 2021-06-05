import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import {useSpring, animated} from 'react-spring'

import sambg from '../assets/img/samsungpad.jpg'

const Section = styled('section')({
    height: '100vh',
    width: '100vw',
    background: `url(${sambg})`,
    backgroundPosition: 'center center',
    position: 'absolute',
    overflow: 'hidden'
})

const IntroContainer = styled('div')({
    height: '100%',
    width: '100%',
    position: 'absolute'
})

const TimelineContainer = styled(animated.div)({
    color: '#FFF',
    opacity: 1,
    position: 'absolute',
    width: 0,
    zIndex: 1,
    height: '20%',
    padding: '2em',
    bottom: 0,
    '&:before': {
        right: '0px',
        background: "#000",
        content: '""',
        position: 'absolute',
        height: '100%',
        width: '100%',
        opacity: .8,
        top: 0,
        zIndex: -1
    }
})

const Title = styled('div')({
    fontSize: 30,
    color: '#FFF',

})

const Bar = styled('div')({
    position: 'relative',
    zIndex: 1,
    background: '#ff4800',
    width: 55,
    height: 3,
    marginTop: '12px',
    transition: '.5s'
})

const Description = styled('div')({
    color: '#d6d6d6',
    fontSize: 18,
    lineHeight: '24px'
})

const LandingPage = () => {
    const [toggle, setToggle] = useState(false);
    const [offsetY, setOffsetY] = useState(0);
    
    const props = useSpring({
        opacity: toggle ? 0 : 1,
        width: toggle ? '0%' : '100%'
    })

    
    const handleSetY = () => {
        setOffsetY(window.pageYOffset);
    }
    

    useEffect(() => {
        window.addEventListener('scroll', handleSetY)

        return () => window.removeEventListener('scroll', handleSetY)

    }, [])

    return (
      <Section>
          <IntroContainer>
            <TimelineContainer style={props}>
                <Title>
                    My Journey as a Web Developer
                </Title>
                <Bar />
                <br/>
                <Description>
                    {
                        `
                            Currently I am working as Lead Frontend Engineer at Samsung RND Philippines. I started my career with Samsung back in 2018. I was hired as a Frontend Engineer then later got promoted as a Lead Enginer.
                            If you wish to know more about the my work with Samsung, please click this link.
                        `
                    }
                </Description>
                <br />
                <Description>
                    {
                        `
                            But before getting here, I was FullStack developer, a designer, a teacher, and a student.
                        `
                    }
                </Description>

            </TimelineContainer>
          </IntroContainer>
      </Section>
    )
}

export default LandingPage;