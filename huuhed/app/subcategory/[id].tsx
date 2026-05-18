import FontAwesome from "@expo/vector-icons/FontAwesome";
import { router, useLocalSearchParams } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Image, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";

import { babydata } from "../data/babydata";

const findSubCategory = (id: number) => {
  for (const category of babydata) {
    const subCategory = category.subcat.find((subcat) => subcat.sid === id);
    if (subCategory) {
      return { category, subCategory };
    }
  }

  return { category: babydata[0], subCategory: babydata[0].subcat[0] };
};

export default function SubCategoryPage() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const subCategoryId = Number(id);
  const { category, subCategory } = findSubCategory(subCategoryId);

  return (
    <SafeAreaView style={styles.screen}>
      <StatusBar style="dark" />

      <View style={styles.appFrame}>
        <View style={styles.header}>
          <Pressable accessibilityRole="button" onPress={() => router.back()} style={styles.backButton}>
            <FontAwesome name="chevron-left" size={18} color="#2f80ed" />
          </Pressable>
          <Text numberOfLines={1} style={styles.headerTitle}>
            {subCategory.sname}
          </Text>
          <View style={styles.headerSpacer} />
        </View>

        <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
          <View style={[styles.hero, { backgroundColor: `${category.accent}12` }]}>
            {subCategory.image ? (
              <Image source={subCategory.image} style={styles.heroImage} />
            ) : (
              <Text style={styles.heroIcon}>{subCategory.icon}</Text>
            )}
            <Text style={styles.heroTitle}>{subCategory.sname}</Text>
          </View>

          <View style={styles.itemGrid}>
            {subCategory.item.map((item) => (
              <Pressable
                accessibilityRole="button"
                key={item.iid}
                style={({ pressed }) => [styles.itemCard, pressed && styles.pressed]}
              >
                <Text style={styles.itemIcon}>{item.icon}</Text>
                <Text numberOfLines={2} style={styles.itemName}>
                  {item.iname}
                </Text>
              </Pressable>
            ))}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
  appFrame: {
    flex: 1,
    maxWidth: 430,
    width: "100%",
  },
  header: {
    alignItems: "center",
    borderBottomColor: "#e7e7e7",
    borderBottomWidth: 1,
    flexDirection: "row",
    height: 58,
    paddingHorizontal: 14,
  },
  backButton: {
    alignItems: "center",
    height: 42,
    justifyContent: "center",
    width: 42,
  },
  headerTitle: {
    color: "#1f2937",
    flex: 1,
    fontSize: 17,
    fontWeight: "800",
    textAlign: "center",
  },
  headerSpacer: {
    width: 42,
  },
  content: {
    padding: 14,
    paddingBottom: 28,
  },
  hero: {
    alignItems: "center",
    borderRadius: 8,
    minHeight: 176,
    justifyContent: "center",
    marginBottom: 14,
    padding: 16,
  },
  heroImage: {
    height: 116,
    resizeMode: "contain",
    width: 150,
  },
  heroIcon: {
    fontSize: 86,
    lineHeight: 104,
  },
  heroTitle: {
    color: "#1f2937",
    fontSize: 20,
    fontWeight: "900",
    marginTop: 8,
    textAlign: "center",
  },
  itemGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
  },
  itemCard: {
    alignItems: "center",
    backgroundColor: "#f7f8fb",
    borderColor: "#e6e9f0",
    borderRadius: 8,
    borderWidth: 1,
    height: 118,
    justifyContent: "center",
    padding: 10,
    flexGrow: 1,
    flexBasis: "47%",
  },
  pressed: {
    opacity: 0.72,
  },
  itemIcon: {
    fontSize: 42,
    lineHeight: 54,
  },
  itemName: {
    color: "#333333",
    fontSize: 15,
    fontWeight: "800",
    marginTop: 6,
    textAlign: "center",
  },
});
