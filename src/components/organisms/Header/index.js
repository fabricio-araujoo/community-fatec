import { Container, GoBack, Text } from '~/components/atoms';

export const Header = ({ text, goBackButton }) => {
  return (
    <>
      <Container align="center" justify="center" bg="lightGreen" h={135}>
        <Text fontFamily="Nunito-Bold" color="green" size={24} mt={32}>
          {text}
        </Text>
      </Container>
      {goBackButton && <GoBack top={70} />}
    </>
  );
};
