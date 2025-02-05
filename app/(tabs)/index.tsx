import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import ContactList from "../../components/ContactList";
import TopHeader from "@/components/organisms/topbar";
import AddMemberButton from "@/components/atoms/addmemberbtn";

export default function HomeScreen() {
  return (
    <View style={styles.mainContainer}>
      <TopHeader />
      <ContactList />
      <AddMemberButton />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    paddingTop: 64,
    padding: 20,
    gap: 16,
  },
});
