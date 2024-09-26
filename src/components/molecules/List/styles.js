import styled from 'styled-components/native';

export const ListContainer = styled.FlatList`
  width: 100%;
  padding-top: ${({ theme }) => theme.metrics.px(12)}px;
`;

export const SimpleCellContainer = styled.View`
  height: ${({ theme }) => theme.metrics.px(72)}px;
  width: 100%;
  padding-horizontal: ${({ theme }) => theme.metrics.px(24)}px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: #f4f4f4;
`;

export const ButtonCellContainer = styled.TouchableOpacity`
  height: ${({ theme }) => theme.metrics.px(72)}px;
  width: 100%;
  padding-horizontal: ${({ theme }) => theme.metrics.px(24)}px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: #f4f4f4;
`;
