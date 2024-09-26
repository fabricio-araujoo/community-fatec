import { View } from 'react-native';
import { Button } from '~/components/molecules';
import { ButtonGroupContainer } from './styles';

export const ButtonGroup = ({ buttons, mt }) => {
  return (
    buttons && (
      <ButtonGroupContainer mt={mt}>
        {buttons.map((button, index) => (
          <View key={button.name}>
            <Button
              text={button.name}
              mt={!(index === 0) && 32}
              color={button.color}
              textColor={button.textColor}
              onPress={button.onPress}
            />
          </View>
        ))}
      </ButtonGroupContainer>
    )
  );
};
