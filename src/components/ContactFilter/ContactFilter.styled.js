import styled from 'styled-components';

export const ContactFilterWrapper = styled.div`
/* width: 400px; */
display: flex;
flex-direction: column;

`;

export const ContactFilterButton = styled.button`
color: #eac645;
  font-size: 18px;
  font-weight: 700;
  text-decoration: none;
  padding: 10px 20px;
  border: 2px solid #eac645;
  width: 150px; 
  height: 50px; 
  border-radius: 25px;   
  background-color: #392f2f;
  transition: all 0.3s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  /* margin-top: 30px; */
  margin:  30px auto 0;

  &:hover {
    background-color: #eac645;
    color: white;}
`;

export const ContactFilterInput = styled.input`
 font: inherit;
  border: 3px solid #eac645;
border-radius: 25px;
width:250px;
padding: 4px 10px;
background: white; 
&:hover, &:focus {
  outline: none;
  background: white;  
  }

`

