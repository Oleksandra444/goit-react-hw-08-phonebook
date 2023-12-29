import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  gap: 10px;
`;

export const StyledNavLink = styled(NavLink)`
  color: #eac645;
  font-size: 20px;
  font-weight: 700;
  text-decoration: none;
  padding: 10px 20px;
  margin: 0 10px;
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
    color: white;}
`;