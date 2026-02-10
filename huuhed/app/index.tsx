import { StyleSheet, Text, View, FlatList, TouchableOpacity } from "react-native";
import {babydata} from "./data/babydata";
import { endEvent } from "react-native/Libraries/Performance/Systrace";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useState } from "react";

export default function Page() {
   const [selectedCatId, SelectedCatId] = useState(1)
  return (
    <View style={styles.container}>
      <FlatList
      data={babydata}
      keyExtractor={(item) => item.cid.toString()}
      horizontal
      renderItem={({ item }) => (
    <TouchableOpacity
      style={{
        height: 100,
        margin: 10,
        padding: 10,
        backgroundColor: selectedCatId===item.cid? "#967f7f": "rgb(95, 94, 177)",
        justifyContent: "center",
        alignItems: "center",
      }}
      onPress={() => {
        SelectedCatId(item.cid);
        console.log(selectedCatId)
      }} 
    >
      <FontAwesome name={item.cicon} size={24} color="black" />
      <Text style={{ fontSize: 16, marginTop: 5 }}>{item.cname}</Text>
    </TouchableOpacity>
  )}
/>


      <View style={styles.main}>
        {/* <Text style={styles.title}>Cat size {babydata.length}</Text>
        <Text style={styles.title}>{babydata[0].cid} cat id</Text>
        <Text style={styles.title}>{babydata[0].cname} cat name</Text>
        <Text style={styles.title}>{babydata[0].cicon} cat icon name</Text>
        <Text style={styles.subtitle}>
          This is the first page of your app.
        </Text> */}
      </View>

    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});
