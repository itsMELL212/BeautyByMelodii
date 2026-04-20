import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function DetailScreen({ navigation, route }) {
  const { product } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Image
          source={{ uri: product.image_link }}
          style={styles.image}
          resizeMode="contain"
        />

        <View style={styles.infoContainer}>
          <Text style={styles.name}>{product.name}</Text>
          <Text style={styles.brand}>Brand: {product.brand}</Text>
          <Text style={styles.price}>Price: ${product.price}</Text>
          <Text style={styles.detail}>Type: {product.product_type}</Text>
          <Text style={styles.detail}>Category: {product.category}</Text>
          <Text style={styles.detail}>Rating: {product.rating ? product.rating : "N/A"}</Text>
          <Text style={styles.detail}>
            Price greater than: {product.price_greater_than ? product.price_greater_than : "N/A"}
          </Text>
          <Text style={styles.detail}>
            Price less than: {product.price_less_than ? product.price_less_than : "N/A"}
          </Text>
          <Text style={styles.detail}>
            Tags: {product.tag_list.length > 0 ? product.tag_list.join(", ") : "N/A"}
          </Text>
        </View>

        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backButtonText}>Volver</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF5F5",
  },
  image: {
    height: 300,
    width: "100%",
    marginBottom: 10,
  },
  infoContainer: {
    padding: 20,
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#E75480",
    marginBottom: 10,
    textAlign: "center",
  },
  brand: {
    fontSize: 16,
    color: "#333",
    marginBottom: 8,
  },
  price: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#E75480",
    marginBottom: 8,
  },
  detail: {
    fontSize: 15,
    color: "#555",
    marginBottom: 8,
  },
  backButton: {
    backgroundColor: "#FFB6C1",
    padding: 15,
    borderRadius: 12,
    alignItems: "center",
    marginHorizontal: 20,
    marginBottom: 20,
  },
  backButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});