import { NavigationContainer } from '@react-navigation/native';
import RestaurantNavigator from './src/navigation/RestaurantNavigation';

export default function App() {
  return (
    <NavigationContainer>
      <RestaurantNavigator />
    </NavigationContainer>
  );
}

