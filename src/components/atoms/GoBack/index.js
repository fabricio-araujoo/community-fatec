import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { theme } from '~/theme';
import { GoBackContainer } from './styles';

export function GoBack({ top }) {
  const navigation = useNavigation();
  return (
    <GoBackContainer top={top} onPress={() => navigation.goBack()}>
      <Ionicons
        name="chevron-back"
        color={theme.colors.lightGreen}
        size={theme.metrics.px(28)}
      />
    </GoBackContainer>
  );
}
