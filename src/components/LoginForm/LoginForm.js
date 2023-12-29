import { useDispatch } from 'react-redux';
import { login } from 'redux/api';
import { Form, Label, Input, LabelText, ButtonText } from './LoginForm.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      login({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Label>
        <LabelText>Email</LabelText>
        <Input type="email" name="email" />
      </Label>
      <Label>
        <LabelText>Password</LabelText>
        <Input type="password" name="password" />
      </Label>
      <ButtonText type="submit">Log In</ButtonText>
    </Form>
  );
};