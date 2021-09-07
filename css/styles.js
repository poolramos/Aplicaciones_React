import COLORS from "../constants/colors";
import FONTS from "../assets/fonts";
import { StyleSheet } from "react-native";

export const gStyles = StyleSheet.create({
  container: {
    paddingTop: 70,
    padding: 50,
    flex: 1,
    backgroundColor: COLORS.background,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textInput: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    flex: 1,
    marginRight: 10,
  inputText: {
    borderColor: COLORS.white,
    color: COLORS.white,
    borderWidth: 1,
    borderRadius: 6,
    padding: 10,
    marginBottom: 0,
    width: "100%",
    fontSize: 14,
  },
  inputContainer: {
    width: "95%",
    backgroundColor: COLORS.primary,
  },
  button: {
    color: "white",
    alignItems: "center",
    backgroundColor: "#34fddd",
    padding: 10,
  },
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    backgroundColor: "#ddd",
    borderRadius: 6,
    width: 70,
    marginLeft: 2,
  },
  text: {
    padding: 10,
    color: COLORS.white,
    fontFamily: FONTS.primary,
    fontSize: 14,
  },
  inputError: {
    color: "red",
    flex: 1,
    fontFamily: FONTS.primary,
    color: COLORS.error,
    padding: 4,
    alignSelf: "flex-start"
  },
});