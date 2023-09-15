import 'react-native-gesture-handler';
import StackScreen from './src/screens/StackScreen';
import AuthContext from './src/context/AuthContext';

export default function App() {
  return (
   <AuthContext>
     <StackScreen />
   </AuthContext>
  );
}


