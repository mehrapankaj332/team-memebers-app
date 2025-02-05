import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import Foundation from '@expo/vector-icons/Foundation';
import AntDesign from '@expo/vector-icons/AntDesign';
import { StyleSheet, View } from 'react-native';

const TopHeader = () => {
  return (
    <ThemedView style={styles.titleContainer}>
      <View style={{ flexDirection: "row", gap: 5 }}>
        <AntDesign name="team" size={24} color="black" />
        <ThemedText type="subtitle">Team members</ThemedText>
      </View>
      <Foundation name="info" size={28} color="#339C8E" />
    </ThemedView>
  );
};
export default TopHeader;

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-between',
    gap: 8,
    backgroundColor:"light"
  }
});
