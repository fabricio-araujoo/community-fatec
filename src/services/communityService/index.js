import { api } from '../api';
const { SIGNIN_MARKER, GET_MARKERS, GET_COMMUNITY } = require('~/utils/urls');

const signInCommunityMarker = async (body) => {
  api.post(SIGNIN_MARKER, body);
};

const getMarkers = async () => {
  const { data } = await api.get(GET_MARKERS);

  return data.map((item) => {
    return {
      title: 'Horta',
      details: [
        {
          label: 'Endereço',
          value: item.endereco
        },
        {
          label: 'Cep',
          value: item.cep
        },
        {
          label: 'Estado',
          value: `${item.cidade} - ${item.estado}`
        }
      ],
      coords: {
        latitude: Number(item.lat),
        longitude: Number(item.lng)
      }
    };
  });
};

const getCommunity = async (id) => {
  const { data } = await api.get(GET_COMMUNITY, { params: { id } });
  return data[0];
};

export const CommunityService = {
  signInCommunityMarker,
  getMarkers,
  getCommunity
};
