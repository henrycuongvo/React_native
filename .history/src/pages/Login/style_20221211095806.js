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
  emailWrapper: {
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
  eyePasswordWrapper: {
    position: "absolute",
    top: 10,
    right: 10,
  },
  eyePassword: {
    width: 25,
    height: 25,
    resizeMode: "cover",
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
  iconWrapper: {
    flexDirection: "row",
    marginHorizontal: 10,
    alignSelf: "center",
    marginTop: 30,
    marginBottom: 20,
    // backgroundColor: "grey",
  },
  iconFacebook: {
    // width: 10,
    paddingRight: 10,
  },
  icon: {
    // backgroundColor: "grey",
    // width: 45,
    // borderRadius: 10,
    // borderWidth: 1,
  },
});
