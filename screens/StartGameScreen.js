import { TextInput, View, StyleSheet } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
function StartGameScreen() {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        maxLength={2}
        keyboardType="number-pad"
        style={styles.numberInput}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
        <PrimaryButton>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
        <PrimaryButton>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
}

export default StartGameScreen;
// caja de estilos para poner Sombra
const styles = StyleSheet.create({
  inputContainer: {
    justifyContent:"center",
    alignItems:"center",
    padding: 16,
    marginTop: 100,
    backgroundColor: "#4e0329",
    marginHorizontal: 20,
    borderRadius: 6,
    elevation: 8,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 6,
    shadowOpacity: 0.2,

  },
  numberInput: {
    height: 50,
    fontSize: 32,
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,
    color: "#ddb52f",
    marginVertical: 8,
    fontWeight: "bold",
    width: 50,
    textAlign: "center",
  },
  buttonsContainer:{
    flexDirection:"row"
  },
  buttonContainer:{
    flex:1
  }
});
