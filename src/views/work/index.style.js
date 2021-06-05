import mq from '../../utils/mediaQueries'
import styled from '@emotion/styled'

export const Container = styled('div')({
    background: '#545864',
    width: '100%',
    height: '100vh'
})

export const DotText = styled('div')({
    fontSize: 20,
    lineHeight: '24px',
    fontWeight: 'bold',
    position: 'fixed',
    bottom: '3em',
    right: '3em',
    color: '#545864',
    zIndex: 1,
    '&:after': {
        content: '"."',
        fontSize: 40
    }
})

export const Content = styled('div')({
    padding: '2em',
})

export const Title = styled('div')(mq({
    fontSize: ['auto','30px','30px'],
    fontWeight: 'bold',
    color: '#54586 !important',
    margin: '30px 0'
}))

export const SubTitle = styled('div')({
    fontSize: '16px',
    lineHeight: '25px'
})

export const Description = styled('div')(mq({
    fontSize: '12px',
    lineHeight: '16px',
    marginTop: '10px',
    letterSpacing: '1px',
    width: ['100%','60%','60%']
}))

export const StackContainer = styled('div')(mq({
    display: 'flex',
    marginTop: '5px',
    width: ['80%','50%','50%'],
    flexWrap: 'wrap'
}))

export const BoxStack = styled('div')({
    border: '1px solid #545864',
    borderRadius: '5px',
    marginLeft: '5px',
    marginTop: '5px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2px 5px',
    color: '#545864'
})