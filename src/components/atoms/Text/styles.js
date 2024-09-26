import styled from 'styled-components/native';

export const CustomText = styled.Text`
  font-size: ${({ theme, size }) => theme.metrics.px(size || 16)}px;
  font-family: ${({ fontFamily }) => fontFamily || 'Nunito-Regular'};
  color: ${({ color, theme }) => theme.colors[color || 'black']};
  text-align: ${({ textAlign }) => textAlign || 'left'};
  padding: ${({ theme, padding }) => theme.metrics.px(padding || 0)}px;
  margin-top: ${({ theme, mt }) => theme.metrics.px(mt || 0)}px;
  margin-bottom: ${({ theme, mb }) => theme.metrics.px(mb || 0)}px;
  margin-left: ${({ theme, ml }) => theme.metrics.px(ml || 0)}px;
  margin-right: ${({ theme, mr }) => theme.metrics.px(mr || 0)}px;
`;
