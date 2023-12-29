import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/api';
import { selectUser } from 'redux/selectors';
import { Container, Text, LogText } from './UserMenu.styled';
// import { StarIcon } from '@chakra-ui/icons';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { name } = useSelector(selectUser);

  const handleLogOut = () => {
    dispatch(logOut());
  };

  return (
    <Container>
      <Text>Wellcome, {name}</Text>
      {/* <StarIcon color="white"></StarIcon> */}
      <button type="button" onClick={handleLogOut}>
        <LogText>LogOut</LogText>
      </button>
    </Container>
  );
};