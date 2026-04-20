import React, { useEffect, useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";

const HomeScreen = ({ navigation }) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = () => {
    const URL = "https://makeup-api.herokuapp.com/api/v1/products.json";
    fetch(URL)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Something bad is happening, send help");
        }
        return res.json();
      })
      .then((data) => {
        setProducts(data.slice(0, 20));
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setIsLoading(false);
      });
  };

  if (isLoading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator color="#E75480" size="large" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.centered}>
        <Text style={styles.errorText}>Error: {error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}> Beauty by Melodii</Text>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.cardContainer}
            onPress={() => navigation.navigate("Detail", { product: item })}
          >
           <Image
                source={{ uri: item.image_link }}
                style={styles.image}
                resizeMode="contain"
            />
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.price}>
              ${item.price ? item.price : "N/A"}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF5F5",
    paddingTop: 20,
  },
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF5F5",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#E75480",
    textAlign: "center",
    marginBottom: 10,
  },
  cardContainer: {
    backgroundColor: "#FFF",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
    marginHorizontal: 15,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: "#FFB6C1",
  },
  image: {
    height: 200,
    width: 200,
    marginBottom: 10,
  },
  name: {
    fontSize: 14,
    textAlign: "center",
    marginTop: 5,
    color: "#333",
  },
  price: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
    color: "#E75480",
  },
  errorText: {
    color: "#E75480",
    fontSize: 16,
  },
});