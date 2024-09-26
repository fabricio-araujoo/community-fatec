import styled from 'styled-components/native';

export const SearchContainer = styled.View`
  position: absolute;
  top: ${({ theme }) => theme.metrics.px(64)}px;
  width: ${({ theme }) => theme.metrics.px(320)}px;
`;
