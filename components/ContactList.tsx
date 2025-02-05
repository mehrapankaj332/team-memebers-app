import React, { useState, useCallback } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import ContactItem from "./organisms/contactitem";

const CONTACTS = [
  { name: "Test1", phone: "9999999999" },
  { name: "Test2", phone: "9999999998" },
  { name: "ATest3", phone: "9999999997" },
  { name: "BTest4", phone: "9999999996" },
  { name: "CTest5", phone: "9999999995" },
  { name: "DTest6", phone: "9999999994" },
  { name: "ETest7", phone: "9999999993" },
  { name: "FTest8", phone: "9999999992" },
  { name: "GTest9", phone: "9999999991" },
  { name: "HTest10", phone: "9999999990" },
  { name: "ITest11", phone: "9999999981" },
  { name: "JTest12", phone: "9999999982" },
  { name: "KTest13", phone: "9999999983" },
  { name: "LTest14", phone: "9999999984" },
  { name: "MTest15", phone: "9999999985" },
  { name: "NTest16", phone: "9999999986" },
  { name: "OTest17", phone: "9999999987" },
  { name: "PTest18", phone: "9999999988" },
  { name: "QTest19", phone: "9999999989" },
  { name: "RTest20", phone: "9999999970" },
];

const ITEMS_PER_PAGE = 5;
const ContactList = () => {
  const [data, setData] = useState(CONTACTS.slice(0, ITEMS_PER_PAGE));
  const [loading, setLoading] = useState(false);

  const loadMoreContacts = useCallback(() => {
    if (loading || data.length === CONTACTS.length) return;
    setLoading(true);
    setTimeout(() => {
      const nextData = CONTACTS.slice(0, data.length + ITEMS_PER_PAGE);
      setData(nextData);
      setLoading(false);
    }, 1000);
  }, [data.length, loading]);

  const renderFooter = () => {
    if (!loading) return null;
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="small" color="#0000ff" />
      </View>
    );
  };

  const renderItem = useCallback(
    ({ item }: any) => <ContactItem item={item} />,
    []
  );

  return (
    <View style={styles.container}>
      <FlatList
        style={{
          padding: 4,
          paddingBottom: 10,
        }}
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.phone}
        onEndReached={loadMoreContacts}
        onEndReachedThreshold={0.5}
        ListFooterComponent={renderFooter}
        ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
      />
    </View>
  );
};

export default ContactList;

const styles = StyleSheet.create({
  container: {
    height: "80%",
  },
  loader: {
    paddingVertical: 20,
    alignItems: "center",
  },
});
