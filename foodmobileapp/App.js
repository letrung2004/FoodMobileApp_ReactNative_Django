
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './src/navigation/CustomerNavigation';
import RootNavigator from './src/navigation/CustomerNavigation';






export default function App() {
  return (
    <NavigationContainer>
      <RootNavigator/>
    </NavigationContainer>
  );
}


