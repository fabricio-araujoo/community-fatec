import { Backdrop as ReactBackdrop } from 'react-native-backdrop';
import { Container } from '~/components/atoms';

export const Backdrop = ({
  visible,
  handleOpen,
  handleClose,
  onClose,
  children
}) => {
  return (
    <ReactBackdrop
      visible={visible}
      handleOpen={handleOpen}
      handleClose={handleClose}
      onClose={onClose}
      swipeConfig={{
        velocityThreshold: 0.3,
        directionalOffsetThreshold: 80
      }}
      animationConfig={{
        speed: 14,
        bounciness: 4
      }}
      overlayColor="rgba(0,0,0,0.32)"
      backdropStyle={{
        backgroundColor: '#fff'
      }}
      containerStyle={{
        borderTopLeftRadius: 50
      }}
      closeOnBackButton
    >
      <Container
        align="flex-start"
        justify="flex-start"
        h={400}
        padding={24}
        radius={24}
      >
        {children}
      </Container>
    </ReactBackdrop>
  );
};
