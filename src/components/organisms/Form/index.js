import { Button, TextInput } from '~/components/molecules';
import { FormContainer } from './styles';

export const Form = ({ inputs, buttonProps, mt, mb }) => {
  return (
    <FormContainer mt={mt} mb={mb}>
      {inputs.map((input, index) => (
        <TextInput
          key={`${input.label}_${index}`}
          value={input.value}
          onChange={input.onChange}
          onPressIn={input.onClick}
          label={input.label}
          placeholder={input.placeholder}
          type={input.isPassword}
          autoComplete={input.autoComplete}
          keyboardType={input.keyboardType}
          mt={!(index === 0) && 32}
        />
      ))}

      <Button
        text={buttonProps.text}
        mt={32}
        color={buttonProps.color}
        textColor={buttonProps.textColor}
        onPress={buttonProps.onPress}
      />
    </FormContainer>
  );
};
