import { StyleSheet, Text, View, FlatList } from "react-native";
import {babydata} from "./data/babydata";
import { endEvent } from "react-native/Libraries/Performance/Systrace";
import Foundation from '@expo/vector-icons/Foundation';


export default function Page() {
  return (
    <View style={styles.container}>
      <FlatList
        data={babydata}
        keyExtractor={(item) => item.cid.toString()}
        horizontal
        renderItem={({ item }) => (
          <View 
          style={{
            height:100,
            margin:10,
            padding:10,
            backgroundColor:"#967f7f" ,

          }}>
            
           <Text style={{ fontSize: 40 }}>
            <Foundation name="photo" size={24} color="black" />
            {item.cname}
          </Text>
          </View>
         
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
