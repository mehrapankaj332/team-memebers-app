import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const AddMemberButton = () => {
  const handlePress = () => {
    console.log('Add members button pressed');
  };
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity onPress={handlePress} style={styles.buttonDesign}>
        <Text style={styles.addMembersText}>Add members</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddMemberButton;

const styles = StyleSheet.create({
    buttonContainer: { 
      justifyContent: "center", 
      alignItems: "center", 
      marginTop: 20 
    },
    buttonDesign: {
      width:200,
      backgroundColor: '#9C3353',
      alignItems: 'center',
      borderRadius: 20
    },
    addMembersText: {
      paddingVertical: 8,
      color: '#FFF',
      fontSize: 16,
    }
});
  