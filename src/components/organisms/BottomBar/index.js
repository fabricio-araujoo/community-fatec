import { Icon } from '~/components/atoms';
import { theme } from '~/theme';
import { BarItem, BottomBarContainer } from './styles';

const routeIcons = {
  Home: 'home-outline',
  Search: 'search-outline',
  Favorite: 'heart-outline'
};

export function BottomBar({ state, descriptors, navigation }) {
  return (
    state && (
      <BottomBarContainer>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];

          const icon = options.icon;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true
            });

            if (!isFocused && !event.defaultPrevented) {
              // The `merge: true` option makes sure that the params inside the tab screen are preserved
              navigation.navigate({ name: route.name, merge: true });
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key
            });
          };

          return (
            <BarItem
              key={index}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
            >
              {icon && (
                <Icon
                  name={isFocused ? icon.replace('-outline', '') : icon}
                  size={theme.metrics.px(30)}
                  color={theme.colors.green}
                />
              )}
            </BarItem>
          );
        })}
      </BottomBarContainer>
    )
  );
}
