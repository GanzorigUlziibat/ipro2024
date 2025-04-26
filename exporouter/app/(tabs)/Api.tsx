import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ActivityIndicator,
  FlatList,
  StyleSheet,
} from "react-native";
import { fetchData, ResponseInterface } from "../../utils/needful";

const HomeScreen = () => {
  const [response, setResponse] = useState<ResponseInterface | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchList();
  }, []);

  const fetchList = async () => {
    try {
      const data = await fetchData({
        //url: "http://127.0.0.1:8000/apihabit/",
        url: "http://issw.mandakh.org/apihabit/",
        method: "POST",
        body: { action: "getallhabit" },
      });
      setResponse(data);
    } catch (err: any) {
      setError(err.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  const renderItem = ({ item }: { item: any }) => (
    <View style={styles.card}>
      <Text style={styles.title}>ID: {item.id}</Text>
      <Text style={styles.subtitle}>{item.name}</Text>
    </View>
  );

  const keyExtractor = (item: any) => item.id.toString();

  if (loading)
    return <ActivityIndicator size="large" style={styles.centered} />;
  if (error) return <Text style={styles.errorText}>Error: {error}</Text>;
  if (response?.resultCode !== 200 || !response?.data?.length)
    return <Text style={styles.noDataText}>No data available.</Text>;

  return (
    <FlatList
      data={response.data}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 60,
  },
  card: {
    padding: 16,
    backgroundColor: "#e3f2fd",
    marginBottom: 12,
    borderRadius: 8,
    elevation: 2,
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
  },
  subtitle: {
    color: "#333",
    marginTop: 4,
  },
  centered: {
    flex: 1,
    justifyContent: "center",
  },
  errorText: {
    color: "red",
    padding: 20,
    textAlign: "center",
  },
  noDataText: {
    padding: 20,
    fontSize: 16,
    textAlign: "center",
  },
});

export default HomeScreen;
