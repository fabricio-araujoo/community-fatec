import { useState } from 'react';
import { ToastAndroid } from 'react-native';
import { Container, Form, Header } from '~/components';
import { UserService } from '~/services';

export const SignInSimpleScreen = ({ navigation }) => {
  const [signIn, setSignIn] = useState({
    type: 'simple',
    nome: '',
    email: '',
    dataNascimento: '',
    telefone: '',
    senha: ''
  });

  const inputs = [
    {
      label: 'Nome *',
      value: signIn.nome,
      onChange: (value) => setSignIn({ ...signIn, nome: value })
    },
    {
      label: 'E-mail *',
      value: signIn.email,
      onChange: (value) => setSignIn({ ...signIn, email: value })
    },
    {
      label: 'Data de Nascimento',
      value: signIn.dataNascimento,
      onChange: (value) => setSignIn({ ...signIn, dataNascimento: value })
    },
    {
      label: 'Telefone',
      value: signIn.telefone,
      onChange: (value) => setSignIn({ ...signIn, telefone: value })
    },
    {
      label: 'Senha *',
      isPassword: true,
      value: signIn.senha,
      onChange: (value) => setSignIn({ ...signIn, senha: value })
    }
  ];

  const buttonProps = {
    text: 'Cadastrar',
    color: 'green',
    textColor: 'white',
    onPress: () => handlePressSignIn()
  };

  const handlePressSignIn = async () => {
    if (emptyObject()) {
      ToastAndroid.show(
        'Para o cadastro, é necessário os campos marcados com *!',
        ToastAndroid.SHORT
      );
      return;
    }

    try {
      await UserService.signInSimpleUser(signIn);
      navigation.navigate('LoginScreen');
    } catch {
      ToastAndroid.show(
        'Ocorreu um erro no cadastro, por favor tente novamente!',
        ToastAndroid.SHORT
      );
      return;
    }
  };

  const emptyObject = () => {
    if (!signIn.nome || !signIn.email || !signIn.senha) return true;
    return false;
  };

  return (
    <>
      <Container align="center" justify="flex-start">
        <Header text="Cadastro" goBackButton />
        <Form inputs={inputs} buttonProps={buttonProps} mt={30} />
      </Container>
    </>
  );
};
