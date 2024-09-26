import styled from 'styled-components/native';

export const ButtonGroupContainer = styled.View`
  align-items: center;
  justify-content: center;
  padding: 0 24px;
  margin-top: ${({ theme, mt }) => theme.metrics.px(mt || 0)}px;
  width: 100%;
  height: auto;
`;
