import styled from 'styled-components'
import img from '../../assets/background-tech.png'

export const ContainerHeader = styled.div`
 background-image: url(${img});
 background-repeat: no-repeat;
 background-size:100%;
 display: flex;
 margin: none;
 width: 100vw;
 height: 45vw;
 mix-blend-mode: normal;
 backdrop-filter: blur(4px);
`;

export const Nav = styled.div`
color: #FFFFFF;
font-size: 3.2vh;
height: 10vh;
width: 100vw;
text-align: center;
display: flex;
justify-content: flex-end;
`
