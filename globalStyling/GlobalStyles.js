import { StyleSheet } from "react-native";

const GlobalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#171717",
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleStyle: {
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#E74C3C',
    marginVertical: 20,
  },
  btn: {
    borderRadius: 10,
    backgroundColor: '#3498DB',
    padding: 12,
    margin: 10,
    width: 150,
  },
  btn_txt: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
  },
  blue: {
    backgroundColor: '#3498DB',
  },
  green: {
    backgroundColor: '#2ECC71',
  },
  textContainer: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#ECF0F1',
    marginBottom: 20,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 0.2,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  buttonGallery: {
    fontSize: 18,
    color: "white",
    padding: 12,
    borderRadius: 10,
    backgroundColor: '#E67E22',
  },
  button: {
    padding: 10,
    alignSelf: 'flex-end',
    backgroundColor: '#E74C3C',
    borderRadius: 30,
  },
  text: {
    fontSize: 20,
    color: '#ECF0F1',
  },
  gallery: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default GlobalStyles;
