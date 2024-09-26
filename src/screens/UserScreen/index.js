import { useDispatch } from 'react-redux';
import { Container, Header, List } from '~/components';
import { setUser } from '~/reducers/user';
import { store } from '~/stores';

export const UserScreen = ({ navigation }) => {
  const { user } = store.getState().userSession;
  const dispatch = useDispatch();

  const listData = [
    {
      title: 'Nome',
      text: user.nome || 'Não possui',
      type: 'VIEW'
    },
    {
      title: 'Email',
      text: user.email || 'Não possui',
      type: 'VIEW'
    },
    {
      title: 'Telefone',
      text: user.telefone || 'Não possui',
      type: 'VIEW'
    },
    {
      title: 'Data de Nascimento',
      text: user.dataNascimento || 'Não possui',
      type: 'VIEW'
    },
    {
      title: user.endereco && 'Endereço',
      text: user.endereco || 'Não possui',
      type: user.endereco && 'VIEW'
    }
  ];

  user.type === 'community' &&
    listData.push({
      text: 'Minha horta',
      type: 'BUTTON',
      onClick: () => navigation.navigate('MyCommunityScreen')
    });

  listData.push(
    {
      text: 'Alterar senha',
      type: 'BUTTON',
      onClick: () => console.log('alterar senha')
    },
    {
      text: 'Sair',
      type: 'BUTTON',
      onClick: () => {
        dispatch(setUser({}));
        navigation.navigate('LoginScreen');
      }
    }
  );

  return (
    <>
      <Container align="center" justify="flex-start">
        <Header text="Meus dados" />
        <List data={listData} />
      </Container>
    </>
  );
};
