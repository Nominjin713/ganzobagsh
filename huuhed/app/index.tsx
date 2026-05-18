import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useMemo, useState } from "react";
import {
  FlatList,
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { BabySubCategory, babydata } from "./data/babydata";

export default function Page() {
  const router = useRouter();
  const [selectedCatId, setSelectedCatId] = useState(babydata[0].cid);

  const selectedCategory = useMemo(
    () => babydata.find((category) => category.cid === selectedCatId) ?? babydata[0],
    [selectedCatId],
  );

  const selectCategory = (categoryId: number) => {
    const nextCategory = babydata.find((category) => category.cid === categoryId);
    if (!nextCategory) {
      return;
    }

    setSelectedCatId(categoryId);
  };

  const renderSubCategory = ({ item }: { item: BabySubCategory }) => {
    return (
      <Pressable
        accessibilityRole="button"
        onPress={() =>
          router.push({
            pathname: "/subcategory/[id]",
            params: { id: item.sid },
          })
        }
        style={({ pressed }) => [
          styles.subRow,
          pressed && styles.pressed,
        ]}
      >
        {item.image ? (
          <Image source={item.image} style={styles.subImage} />
        ) : (
          <Text style={styles.subIcon}>{item.icon}</Text>
        )}
        <Text style={styles.subName}>{item.sname}</Text>
      </Pressable>
    );
  };

  return (
    <SafeAreaView style={styles.screen}>
      <StatusBar style="dark" />
      <View style={styles.appFrame}>
        <View style={styles.tabs}>
          {babydata.map((category) => {
            const isSelected = category.cid === selectedCatId;

            return (
              <Pressable
                accessibilityRole="tab"
                accessibilityState={{ selected: isSelected }}
                key={category.cid}
                onPress={() => selectCategory(category.cid)}
                style={styles.tabButton}
              >
                <FontAwesome
                  name={category.cicon as React.ComponentProps<typeof FontAwesome>["name"]}
                  size={26}
                  color={isSelected ? category.accent : "#b9c9f5"}
                />
                <View
                  style={[
                    styles.tabIndicator,
                    isSelected && { backgroundColor: category.accent },
                  ]}
                />
              </Pressable>
            );
          })}
        </View>

        <Text style={styles.categoryTitle}>{selectedCategory.cname}</Text>

        <FlatList
          columnWrapperStyle={styles.subRowWrap}
          contentContainerStyle={styles.subList}
          data={selectedCategory.subcat}
          key={selectedCategory.cid}
          keyExtractor={(item) => item.sid.toString()}
          numColumns={2}
          renderItem={renderSubCategory}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#ffffff",
    justifyContent: "flex-start",
  },
  appFrame: {
    width: "100%",
    maxWidth: 430,
    flex: 1,
    overflow: "hidden",
    backgroundColor: "#ffffff",
  },
  tabs: {
    height: 58,
    alignItems: "center",
    borderBottomColor: "#e7e7e7",
    borderBottomWidth: 1,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  tabButton: {
    alignItems: "center",
    height: 58,
    justifyContent: "center",
    minWidth: 54,
  },
  tabIndicator: {
    bottom: 0,
    height: 3,
    left: 0,
    position: "absolute",
    right: 0,
  },
  categoryTitle: {
    color: "#1f2937",
    fontSize: 15,
    fontWeight: "800",
    paddingBottom: 8,
    paddingTop: 16,
    textAlign: "center",
  },
  subList: {
    paddingBottom: 24,
    paddingHorizontal: 14,
    paddingTop: 4,
  },
  subRowWrap: {
    gap: 12,
    marginBottom: 12,
  },
  subRow: {
    alignItems: "center",
    backgroundColor: "#ffffff",
    borderColor: "#e8edf5",
    borderRadius: 8,
    borderWidth: 1,
    flex: 1,
    minHeight: 146,
    justifyContent: "center",
    padding: 10,
    shadowColor: "#1f2937",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
  },
  pressed: {
    opacity: 0.72,
  },
  subIcon: {
    fontSize: 48,
    lineHeight: 58,
    marginBottom: 8,
    textAlign: "center",
    width: 72,
  },
  subImage: {
    borderRadius: 8,
    height: 82,
    marginBottom: 10,
    resizeMode: "contain",
    width: 98,
  },
  subName: {
    color: "#252525",
    fontSize: 15,
    fontWeight: "800",
    minHeight: 38,
    textAlign: "center",
  },
});
