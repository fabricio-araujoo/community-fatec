import { Text } from '~/components/atoms';
import {
  ButtonCellContainer,
  ListContainer,
  SimpleCellContainer
} from './styles';

const buildCell = (type, children, props) => {
  if (type === 'VIEW')
    return <SimpleCellContainer {...props}>{children}</SimpleCellContainer>;
  if (type === 'BUTTON')
    return <ButtonCellContainer {...props}>{children}</ButtonCellContainer>;
};

export const List = ({ data }) => {
  return (
    <ListContainer
      data={data}
      renderItem={({ item }) => {
        const content = (
          <>
            {item.title && <Text Size={16}>{item.title}</Text>}
            <Text size={16} fontFamily="Nunito-Light">
              {item.text}
            </Text>
          </>
        );

        return buildCell(item.type, content, {
          onPress: item?.onClick
        });
      }}
    />
  );
};
