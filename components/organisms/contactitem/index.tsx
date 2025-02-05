import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const ContactItem = ({ item }: { item: any }) => {
  const getInitials = (name: string) => {
    if (typeof name !== "string") return "";
    const letters = name.match(/[A-Za-z]/g);
    if (letters && letters.length >= 2) {
      return (letters[0] + letters[1]).toUpperCase();
    } else if (letters && letters.length === 1) {
      return letters[0].toUpperCase();
    }
    return "";
  };

  return (
    <View style={styles.contactItem}>
      <View style={styles.initialsCircle}>
        <Text style={styles.initialsText}>{getInitials(item.name)}</Text>
      </View>
      <View style={styles.contactInfo}>
        <Text style={styles.nameText}>{item.name}</Text>
        <View style={{ flexDirection: "row", gap: 5, alignItems: "center" }}>
          <Feather name="phone-call" size={14} color="#666" />
          <Text style={styles.phoneText}>{item.phone}</Text>
        </View>
      </View>
      <MaterialIcons name="delete-outline" size={24} color="#9C3353" />
    </View>
  );
};

export default React.memo(ContactItem, (prevProps, nextProps) => {
  return (
    prevProps.item.name === nextProps.item.name &&
    prevProps.item.phone === nextProps.item.phone
  );
});

const styles = StyleSheet.create({
  container: {
    height: "80%",
    flex: 1,
  },
  contactItem: {
    flexDirection: "row",
    padding: 18,
    alignItems: "center",
    borderRadius: 10,
    boxShadow:
      "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset",
  },
  initialsCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#E1C1CB",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
  },
  initialsText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#666",
  },
  contactInfo: {
    flex: 1,
  },
  nameText: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 4,
  },
  phoneText: {
    fontSize: 14,
    color: "#666",
  },
});
