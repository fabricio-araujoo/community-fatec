import styled from 'styled-components/native';

export const ButtonContainer = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  background-color: ${({ theme, color }) => theme.colors[color || 'green']};
  color: ${({ theme, color }) => theme.colors[color || 'white']};
  padding: 10px;
  margin-top: ${({ theme, mt }) => theme.metrics.px(mt || 0)}px;
  border-radius: 10px;
  width: ${({ theme }) => theme.metrics.px(280)}px;
  height: ${({ theme }) => theme.metrics.px(48)}px;
`;
