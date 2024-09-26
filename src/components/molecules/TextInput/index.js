import { Text } from '~/components/atoms';
import { Input, TextInputContainer } from './styles';

export const TextInput = ({
  value,
  onChange,
  onPressIn,
  label,
  placeholder,
  type,
  mt
}) => {
  return (
    <TextInputContainer mt={mt}>
      <Text>{label}</Text>
      <Input
        name="name"
        value={value}
        onChangeText={onChange}
        onPressIn={onPressIn}
        placeholder={placeholder}
        secureTextEntry={type}
      />
    </TextInputContainer>
  );
};
