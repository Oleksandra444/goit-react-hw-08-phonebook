import styled from 'styled-components';


export const ContactCardWrappper = styled.div`
border: 3px solid #392f2f;
border-radius: 25px;
display: flex;
justify-content: space-between;
height: 70px;
width: 400px;
align-items: center;
padding:5px;
`;

export const ContactValuedWrappper = styled.div`
display: flex;
gap: 12px;
`


export const ContactCardValue = styled.p`
font-size: 20px;
font-weight: 700;
`;

export const ContactCardDelButton = styled.button`
color: #eac645;
  font-size: 14px;
  font-weight: 700;
  text-decoration: none;
  padding: 5px 5px;
 
  border: 2px solid #eac645;
  width: 100px; 
  /* height: 50px;  */
  border-radius: 25px;   
  background-color: #392f2f;
  transition: all 0.3s ease;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: #eac645;
    color: white;}
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
`;
