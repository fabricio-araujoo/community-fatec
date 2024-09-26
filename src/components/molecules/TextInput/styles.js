import styled from 'styled-components/native';

export const TextInputContainer = styled.View`
  width: ${({ theme }) => theme.metrics.px(280)}px;
  margin-top: ${({ theme, mt }) => theme.metrics.px(mt || 0)}px;
`;

export const Input = styled.TextInput`
  height: ${({ theme }) => theme.metrics.px(48)}px;
  margin-top: ${({ theme }) => theme.metrics.px(8)}px;
  padding: 0 ${({ theme }) => theme.metrics.px(16)}px;
  border-radius: 10px;
  background-color: #f3f1f1;
`;
