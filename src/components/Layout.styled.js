import styled from 'styled-components';
import background from '../img/bcgyellow.png'

export const LowerLayout = styled.div`
/* max-width: 1120px; */
margin: 0;
padding: 0;
 background-image: url(${background});
background-size: cover; 
  background-position:center; 
  background-repeat: no-repeat; 
  min-height: 100vh;
  display: flex; 
  flex-direction: column;
  /* opacity: 0.4; */
`