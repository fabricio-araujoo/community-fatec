import {
  CURRENT_USER,
  LOGIN_USER,
  SIGNIN_COMMUNITY_USER,
  SIGNIN_SIMPLE_USER
} from '~/utils/urls';
import { api } from '../api';
import { CommunityService } from '../communityService';

const loginUser = async (body) => {
  return api.post(LOGIN_USER, body);
};

const getCurrentUser = async (user) => {
  return api.get(CURRENT_USER, { params: user });
};

const signInSimpleUser = async (body) => {
  return api.post(SIGNIN_SIMPLE_USER, body);
};

const signInCommunityUser = async (body, community) => {
  const user = await api.post(SIGNIN_COMMUNITY_USER, body);
  await CommunityService.signInCommunityMarker({
    ...community,
    fk_Proprietario_idPropretario: user.data[0].idProprietario
  });
};

export const UserService = {
  loginUser,
  getCurrentUser,
  signInSimpleUser,
  signInCommunityUser
};
