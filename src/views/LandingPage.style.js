import styled from '@emotion/styled';
import me from '../assets/img/me-toon.jpg'
import bg from '../assets/img/2049.jpg'
import {animated} from 'react-spring'
import mq from '../utils/mediaQueries'


export const Section = styled('section')({
    height: '100vh',
    background: 'rgb(47,45,47)',
    backgroundColor: '#000',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: '0 10% 0 10%',
    overflow: 'hidden'
})

export const IntroContainer = styled('div')(mq({
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    fontSize: 42,
    height: '100%',
    width: 'auto',
    overflow: 'hidden',
    marginTop: ['10%', 0, 0]
}))

export const NameContainer = styled(animated.div)(({ text, subtext }) => mq({
    paddingLeft: 10,
    position: 'relative',
    zIndex: 1,
    margin: 0,
    color: '#FFF',
    fontSize: [50, 50, 120],
    fontWeight: 'bold',
    '&::before': {
        content: '""',
        position: 'absolute',
        left: 0,
        top: 0,
        width: ['8px', '20px', '20px'],
        height: '100%',
        zIndex: -1,
        background: '#ff4800'
    },
    '&:after': {
        content: `'${text}'`
    },
    '&:hover': {
        cursor: 'pointer',
        '&:after': {
            content: `'${subtext}'`,
        }
    }
})
)

export const CustomNameContainer = styled(animated.div)(({ text, subtext }) => mq({
    position: 'relative',
    zIndex: 1,
    margin: 0,
    fontSize: [50, 50, 120],
    fontWeight: 'bold',
    color: '#ff4800',
    '&:after': {
        content: `"${text}"`
    },
    '&:hover': {
        cursor: 'pointer',
        '&:after': {
            content: subtext && `'${subtext}'`
        }
    }
}))

export const Description = styled('div')({
    marginTop: '30px',
    marginBottom: '30px',
    color: '#d6d6d6',
    lineHeight: '1.9',
    fontSize: 15
})

export const MyToon = styled('div')(mq({
    width: [180, 360, 360],
    height:  [180, 360, 360],
    background: `url(${me})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% 100%',
    borderRadius: '50%',
    zIndex: 1
}))

export const Background = styled('div')({
    position: 'absolute',
    background: `url(${bg})`,
    backgroundPosition: 'center',
    width: '100%',
    height: '100%',
    opacity: .3
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

export const ProfileContainer = styled('div')({
    display: 'flex',
    justifyContent: 'space-evenly',
    width: '100%',
    aligntItems: 'center',
    flexWrap: 'wrap',
    alignItems: 'center'
})