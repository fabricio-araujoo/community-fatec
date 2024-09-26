import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomBar } from '~/components';
import {
  HomeScreen,
  LoginScreen,
  MapScreen,
  SignInCommunityScreen,
  SignInSimpleScreen,
  UserScreen
} from '~/screens';
import { MyCommunityScreen } from '~/screens/MyCommunityScreen';

const Tab = createBottomTabNavigator();

const BottomRoute = () => (
  <Tab.Navigator tabBar={(props) => <BottomBar {...props} />}>
    {bottomRouteItems.map((item, index) => (
      <Tab.Screen
        key={index}
        name={item.name}
        component={item.component}
        options={item.options}
      />
    ))}
  </Tab.Navigator>
);

export const routeItems = [
  {
    name: 'HomeScreen',
    component: HomeScreen,
    options: { headerShown: false }
  },
  {
    name: 'LoginScreen',
    component: LoginScreen,
    options: { headerShown: false }
  },
  {
    name: 'SignInSimpleScreen',
    component: SignInSimpleScreen,
    options: { headerShown: false }
  },
  {
    name: 'SignInCommunityScreen',
    component: SignInCommunityScreen,
    options: { headerShown: false }
  },
  {
    name: 'MapScreen',
    component: BottomRoute,
    options: { headerShown: false }
  },
  {
    name: 'UserScreen',
    component: UserScreen,
    options: { headerShown: false }
  },
  {
    name: 'MyCommunityScreen',
    component: MyCommunityScreen,
    options: { headerShown: false }
  }
];

export const bottomRouteItems = [
  {
    name: 'Map',
    component: MapScreen,
    options: {
      headerShown: false,
      icon: 'map-outline'
    }
  },
  {
    name: 'Plant',
    component: MapScreen,
    options: {
      headerShown: false,
      icon: 'leaf-outline'
    }
  },
  {
    name: 'User',
    component: UserScreen,
    options: {
      headerShown: false,
      icon: 'person-circle-outline'
    }
  }
];
