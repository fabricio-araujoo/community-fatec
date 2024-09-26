import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import { useState } from 'react';
import { ToastAndroid } from 'react-native';
import { Form, Header, ScreenScrollContainer } from '~/components';
import { UserService } from '~/services';

const months = 6;
const date = new Date();
const currentDate = new Date(new Date().setMonth(date.getMonth() + months));

export const SignInCommunityScreen = ({ navigation }) => {
  const [signIn, setSignIn] = useState({
    type: 'owner',
    nome: '',
    email: '',
    dataNascimento: '',
    telefone: '',
    endereco: '',
    senha: ''
  });
  const [community, setCommunity] = useState({
    endereco: '',
    cep: '',
    cidade: '',
    estado: '',
    horta: true,
    status: 'ativo',
    prazo: currentDate
  });
  const [isSecondStep, setIsSecondStep] = useState(false);

  const inputsUser = [
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
      label: 'Endereço',
      value: signIn.endereco,
      onChange: (value) => setSignIn({ ...signIn, endereco: value })
    },
    {
      label: 'Senha *',
      isPassword: true,
      value: signIn.senha,
      onChange: (value) => setSignIn({ ...signIn, senha: value })
    }
  ];

  const inputsCommunity = [
    {
      label: 'Endereço *',
      value: community.endereco,
      onChange: (value) => setCommunity({ ...community, endereco: value })
    },
    {
      label: 'Cep *',
      value: community.cep,
      onChange: (value) => setCommunity({ ...community, cep: value })
    },
    {
      label: 'Cidade *',
      value: community.cidade,
      onChange: (value) => setCommunity({ ...community, cidade: value })
    },
    {
      label: 'Estado *',
      value: community.estado,
      onChange: (value) => setCommunity({ ...community, estado: value })
    },
    {
      label: 'Prazo *',
      value: `${community.prazo.getDate()}/${
        community.prazo.getMonth() + 1
      }/${community.prazo.getFullYear()}`,
      onClick: () => showDatepicker()
    }
  ];

  const continueButtonProps = {
    text: 'Continuar',
    color: 'green',
    textColor: 'white',
    onPress: () => handlePressContinue()
  };

  const confirmButtonProps = {
    text: 'Cadastrar',
    color: 'green',
    textColor: 'white',
    onPress: () => handlePressSignIn()
  };

  const handlePressContinue = async () => {
    if (!signIn.nome || !signIn.email || !signIn.senha) {
      ToastAndroid.show('Campos com * são obrigatórios', ToastAndroid.SHORT);
      return;
    }

    setIsSecondStep(true);
  };

  const handlePressSignIn = async () => {
    if (!signIn.nome || !signIn.email || !signIn.senha) {
      ToastAndroid.show('Campos com * são obrigatórios', ToastAndroid.SHORT);
      return;
    }

    if (community.prazo < new Date()) {
      ToastAndroid.show('O prazo mínimo é de 6 meses', ToastAndroid.SHORT);
      return;
    }

    if (
      !community.endereco ||
      !community.cep ||
      !community.cidade ||
      !community.estado ||
      !community.prazo
    ) {
      ToastAndroid.show('Campos com * são obrigatórios', ToastAndroid.SHORT);
      return;
    }

    const communityData = {
      ...community,
      prazo: `${community.prazo.getFullYear()}-${
        community.prazo.getMonth() + 1
      }-${community.prazo.getDate()}`
    };

    try {
      await UserService.signInCommunityUser(signIn, communityData);
      navigation.navigate('LoginScreen');
    } catch (err) {
      console.log(err);
      ToastAndroid.show(
        'Houve um problema na autenticação, tente mais tarde',
        ToastAndroid.SHORT
      );
      return;
    }
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showMode = (currentMode) => {
    DateTimePickerAndroid.open({
      value: community.prazo,
      onChange: (event, selectedDate) => {
        setCommunity({ ...community, prazo: selectedDate });
      },
      mode: currentMode,
      is24Hour: true
    });
  };

  return (
    <>
      <Header text="Cadastro Proprietário" goBackButton />
      <ScreenScrollContainer align="center" justify="flex-start">
        {!isSecondStep ? (
          <Form
            inputs={inputsUser}
            buttonProps={continueButtonProps}
            mt={30}
            mb={30}
          />
        ) : (
          <Form
            inputs={inputsCommunity}
            buttonProps={confirmButtonProps}
            mt={30}
            mb={30}
          />
        )}
      </ScreenScrollContainer>
    </>
  );
};
