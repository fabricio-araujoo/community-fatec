import { useState } from 'react';
import { ToastAndroid } from 'react-native';
import { useDispatch } from 'react-redux';
import { Banner, Button, Container, Form, GoBack } from '~/components';
import { setUser } from '~/reducers/user';
import { UserService } from '~/services';

export const LoginScreen = ({ navigation }) => {
  const [login, setLogin] = useState({ email: '', password: '' });
  const dispatch = useDispatch();

  const inputs = [
    {
      label: 'E-mail',
      value: login.email,
      autoComplete: 'email',
      keyboardType: 'email-address',
      onChange: (value) => setLogin({ ...login, email: value })
    },
    {
      label: 'Senha',
      isPassword: true,
      value: login.password,
      onChange: (value) => setLogin({ ...login, password: value })
    }
  ];

  const buttonProps = {
    text: 'Entrar',
    color: 'green',
    textColor: 'white',
    onPress: () => handlePressLogin()
  };

  const handlePressGuestLogin = () => {
    dispatch(setUser({}));
    navigation.navigate('MapScreen');
  };

  const handlePressLogin = async () => {
    if (!login.email || !login.password) {
      ToastAndroid.show('E-mail ou senha inválido!', ToastAndroid.SHORT);
      return;
    }

    const loginSession = await UserService.loginUser(login);

    if (loginSession.data && !loginSession.data.id) {
      ToastAndroid.show('Sessão inválida!', ToastAndroid.SHORT);
      return;
    }

    const user = await UserService.getCurrentUser(loginSession.data);

    dispatch(setUser(user.data[0]));
    navigation.navigate('MapScreen');
  };

  return (
    <>
      <Container align="center" justify="flex-start">
        <Banner h={300} mt={12} />
        <Form inputs={inputs} buttonProps={buttonProps} mt={60} />
        <Button
          text="Entrar como Convidado"
          mt={32}
          color="default"
          textColor="green"
          onPress={() => handlePressGuestLogin()}
        />
      </Container>
      <GoBack />
    </>
  );
};
