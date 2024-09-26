import { Container, Logo, Text } from '~/components/atoms';

export const Banner = ({ w, h }) => {
  return (
    <Container align="center" justify="center" bg="lightGreen" w={w} h={h}>
      <Text fontFamily="Nunito-Bold" color="green" size={24} mt={16}>
        <Logo size="small" /> Community
      </Text>
    </Container>
  );
};
