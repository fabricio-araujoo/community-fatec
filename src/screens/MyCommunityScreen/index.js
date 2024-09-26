import { useEffect, useState } from 'react';
import { Container, Header, List } from '~/components';
import { CommunityService } from '~/services/communityService';
import { store } from '~/stores';

export const MyCommunityScreen = ({ navigation }) => {
  const { user } = store.getState().userSession;
  const [community, setCommunity] = useState();

  useEffect(() => {
    getCommunity();
  }, []);

  const getCommunity = async () => {
    setCommunity(await CommunityService.getCommunity(user.idProprietario));
  };

  const listData = [
    {
      title: 'Endereço',
      text: community.endereco,
      type: 'VIEW'
    },
    {
      title: 'Cep',
      text: community.cep,
      type: 'VIEW'
    },
    {
      title: 'Cidade',
      text: community.cidade,
      type: 'VIEW'
    },
    {
      title: 'Estado',
      text: community.estado,
      type: 'VIEW'
    }
  ];

  listData.push(
    {
      text: 'Meu usuário',
      type: 'BUTTON',
      onClick: () => navigation.navigate('UserScreen')
    },
    {
      text: 'Meu usuário',
      type: 'BUTTON',
      onClick: () => navigation.navigate('UserScreen')
    }
  );

  return (
    <>
      <Container align="center" justify="flex-start">
        <Header text="Minha horta" />
        <List data={listData} />
      </Container>
    </>
  );
};
