import styled from 'styled-components/native';

export const GoBackContainer = styled.TouchableOpacity`
  position: absolute;
  top: ${({ theme, top }) => theme.metrics.px(top || 56)}px;
  left: ${({ theme }) => theme.metrics.px(24)}px;
  background-color: ${({ theme }) => theme.colors.green};
  border-radius: 10px;
`;
