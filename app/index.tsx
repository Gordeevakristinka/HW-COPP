import { View, Text, StyleSheet, TouchableOpacity} from "react-native";

export default function HomeScreen() {
  const handlePressButton = () => {
    console.log('Button pressed')
  }
    
  return (
  <View style={styles.container}>
    <Text style={styles.getStartedText}>
      Get Started with Tracking Your Health!
      </Text>
      <Text style={styles.noteText}>
      Calculate your BMI and stay on top of your wellness journey, effortlessly.
      </Text>   
      <View style={{width: '100%'}}>
        <TouchableOpacity onPress={handlePressButton} style={styles.button}>
          <Text style={styles.buttonText}>
            Get Started
          </Text>
        </TouchableOpacity>
      </View>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: "#6C63FF", 
    justifyContent: 'center',
    alignItems: 'center'
  },
  getStartedText: {
    fontStyle: 'normal', 
    fontWeight: '700', 
    fontSize: 25, 
    lineHeight: 33,
    color: '#FFFFFF',
    marginLeft: 56,
    marginRight: 67
  },
  noteText: {
    fontSize: 15.33, 
    lineHeight: 19,
    color: '#C6C3F9',
    marginHorizontal: 56,
    marginTop: 21,
  },
  button: {
    marginTop: 38,
    backgroundColor: '#ffffff', 
    marginHorizontal: 30, 
    alignItems: 'center', 
    justifyContent: 'center', 
    borderRadius: 63, 
    paddingVertical: 27,
  },
  buttonText: {
    fontWeight: 500,
    fontSize: 17.6,
    lineHeight: 21,
    color: '#081854'
  }
})
