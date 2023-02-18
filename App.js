import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from 'react-native';
import Screens from './Screens';
export default function App() {
  return (
    <SafeAreaView className="flex-1">
      <NavigationContainer >
        <Screens />
      </NavigationContainer>
    </SafeAreaView>
  );
}
