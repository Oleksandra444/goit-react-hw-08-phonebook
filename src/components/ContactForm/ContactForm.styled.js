import {
  Form as FormikForm,
  Field as FormikField,
  ErrorMessage as FormikError,
} from 'formik';
import styled from 'styled-components';

export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  gap: 18px;
  max-width: 320px;
`;

export const Field = styled(FormikField)`
  
  /* font: inherit; */
  border: 3px solid #eac645;
border-radius: 25px;
width:250px;
padding: 4px 10px;
background: white; 
&:hover, &:focus {
  /* border: 3px solid #404BBF;
  border-radius: 25px; */
  /* color: #404BBF; */
  outline: none;
  background: white; 
  }

   
`;

export const FormGroup = styled.label`
  display: flex;
  flex-direction: column;
  gap: 4px;
  font-size: 20px;
  font-weight: 700;
  text-decoration: none;
  color: #eac645;
`;

export const ErrorMessage = styled(FormikError)`
  color: red;
  font-size: 14px;
`;

export const ContactAddButton = styled.button`
 color: #eac645;
  font-size: 18px;
  font-weight: 700;
  text-decoration: none;
  padding: 10px 20px;
  margin: 0 auto;
  margin-top: 30px;
  border: 2px solid #eac645;
  width: 150px; 
  height: 50px; 
  border-radius: 25px;   
  background-color: #392f2f;
  transition: all 0.3s ease;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: #eac645;
    color: white;}`
