import { StyleSheet,View } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import {LinearGradient} from 'expo-linear-gradient'

export default function App() {
  return (
    <LinearGradient colors={["#ddb52f","#4e0329"]} style={styles.rootScreen}>
      <StartGameScreen/>

    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen:{
    backgroundColor:"#ddb52f",
    flex:1
  }
});
