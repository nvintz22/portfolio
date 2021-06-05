import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import FileSaver from 'file-saver'
import {
    Section,
    IntroContainer,
    NameContainer,
    Description,
    MyToon,
    Background,
    InTouchButton,
    ProfileContainer,
    CustomNameContainer
} from './LandingPage.style'
import {useSpring} from 'react-spring'
import cv from '../assets/img/cv.pdf'
import mobile from '../utils/isMobile'


const LandingPage = () => {
    const [toggle, setToggle] = useState([false, false, false]);
    const [open, toggleOpen] = useState(false)
  
    const props = {
        hello: useSpring({
            paddingLeft: toggle[0] ? '18px' : '0px'
        }),
        work: useSpring({
            paddingLeft: toggle[1] ? '18px' : '0px'
        }),
        name: useSpring({
            paddingLeft: toggle[2] ? '22px' : '0px'
        })
    }

    const handleToggle = (index, stat) => {
        const tempT = [...toggle]
        tempT[index] = stat
        setToggle([...tempT])
    }

    const handleDownload = () => {
        FileSaver.saveAs(cv, "DannielCajuban-Resume.pdf")
    }
    
    const toggleAll = () => {
        if (!mobile.any()) return;
        
        const tempT = [!open, !open, !open]
        setToggle(tempT)
        toggleOpen(!open)
    }
    
    return (
      <Section onClick={toggleAll}>
          <Background />
          <ProfileContainer>
            <MyToon />

            <IntroContainer>
                    <Link to="/about" style={{ textDecoration: 'none', pointerEvents: mobile.any() && !open ? 'none' : '' }}>
                        <CustomNameContainer 
                            text={open ? 'ABOUT' : 'HELLO.'} 
                            subtext={'ABOUT'} 
                            onMouseOver={() => handleToggle(0, true)} 
                            onMouseOut={() => handleToggle(0, false)} 
                            style={props.hello}
                        />
                    </Link>
                    <Link to="/work" style={{ textDecoration: 'none', pointerEvents: mobile.any() && !open ? 'none' : '' }}>
                        <CustomNameContainer 
                            text={open ? 'WORK' : 'I AM'} 
                            subtext={'WORK'}
                            onMouseOver={() => handleToggle(1, true)} 
                            onMouseOut={() => handleToggle(1, false)} 
                            style={props.work}
                        />
                    </Link>
                    <Link to="/contact" style={{ textDecoration: 'none', pointerEvents: mobile.any() && !open ? 'none' : '' }}>
                        <NameContainer 
                            text={open ? 'CONTACT' : 'DAN'} 
                            subtext={'CONTACT'}
                            onMouseOver={() => handleToggle(2, true)} 
                            onMouseOut={() => handleToggle(2, false)} 
                            style={props.name}
                        />
                    </Link>
                    <Description>
                    Hi, my name's Danniel Irvin Cajuban.
                    <br />
                    I'm a Web Frontend Developer.
                    </Description>
                    <div>
                        <InTouchButton onClick={handleDownload}>
                            Download CV
                        </InTouchButton>            
                    </div>
            </IntroContainer>
          </ProfileContainer>
      </Section>
    )
}

export default LandingPage;