import styled from 'styled-components';
import background from '../img/bcgyellow.png';
import isPropValid from '@emotion/is-prop-valid';


export const LowerLayout = styled.div.withConfig({
  shouldForwardProp: (prop) => isPropValid(prop),
})`
  margin: 0;
  padding: 0;
  background-image: url(${background});
  background-size: cover; 
  background-position: center; 
  background-repeat: no-repeat; 
  min-height: 100vh;
  display: flex; 
  flex-direction: column;
  
  ${(props) =>
    props.iscontactspage === "true" &&
    `
    background-image: none;
    background-color: #f7c928;
  `}
`;