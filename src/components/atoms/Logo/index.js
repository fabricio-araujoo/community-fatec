import logoImage from '../../../../assets/image/logo-community.png';
import { LogoImage } from './styles';

const sizes = {
  small: 28,
  large: 64
};

export function Logo({ size }) {
  return <LogoImage source={logoImage} size={sizes[size || 'large']} />;
}
