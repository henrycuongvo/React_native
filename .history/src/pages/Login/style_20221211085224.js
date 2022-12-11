import { StyleSheet } from "react-native";
export default styles = StyleSheet.create({
  container: {
    flex: 100,
    marginTop: 40,
  },
  loginWrapper: {
    flex: 2,
    paddingHorizontal: 10,
  },
  username: {
    borderColor: "#FED049",
    borderWidth: 2,
    borderRadius: 5,
    padding: 10,
    paddingHorizontal: 20,
    shadowColor: "#FCF9BE",
  },
  password: {
    marginTop: 5,
    borderColor: "#FED049",
    borderWidth: 2,
    borderRadius: 5,
    padding: 10,
    paddingHorizontal: 20,
  },
  eyePassword: {
    position: "absolute",
    top: 20,
    color: "red",
    width: 20,
  },
  signUpWrapper: {
    backgroundColor: "#46C2CB",
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    width: "50%",
    alignSelf: "center",
    marginTop: 40,
  },
  creactAccount: {
    flexDirection: "row",
    alignContent: "center",
    marginTop: 20,
    alignSelf: "center",
  },
});
