import { Text } from '~/components/atoms';
import { ButtonContainer } from './styles';

export const Button = ({ color, textColor, mt, text, onPress }) => {
  return (
    <ButtonContainer
      title="text"
      color={color || 'green'}
      mt={mt}
      onPress={onPress}
    >
      <Text color={textColor || 'white'}>{text}</Text>
    </ButtonContainer>
  );
};
