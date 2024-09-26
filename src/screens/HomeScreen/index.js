import { Banner, ButtonGroup, Container, Text } from '~/components';

export function HomeScreen({ navigation }) {
  const buttons = [
    {
      name: 'Entrar',
      color: 'green',
      textColor: 'white',
      onPress: () => {
        navigation.navigate('LoginScreen');
      }
    },
    {
      name: 'Cadastrar',
      color: 'default',
      textColor: 'green',
      onPress: () => {
        navigation.navigate('SignInSimpleScreen');
      }
    },
    {
      name: 'Cadastrar como Proprietário',
      color: 'default',
      textColor: 'green',
      onPress: () => {
        navigation.navigate('SignInCommunityScreen');
      }
    }
  ];

  return (
    <Container align="center" justify="flex-start">
      <Banner h={300} />
      <Text
        fontFamily="Nunito-SemiBold"
        textAlign="center"
        size={18}
        mt={60}
        padding={10}
      >
        Encontre a horta comunitária mais próxima de você!
      </Text>
      <ButtonGroup buttons={buttons} mt={48} />
    </Container>
  );
}
