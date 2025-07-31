import { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";


interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}

const API = "https://json-placeholder-olive.vercel.app/posts"

export default function Index() {
  const [posts, setPosts] = useState<Post[] | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    fetch(API)
      .then(res => res.json())
      .then(data => setPosts(data))
      .catch(err => alert(err))
    setLoading(false)
  }, [])

  if (loading) {
    return <Text>Loading...</Text>
  }
  if (!posts) {
    return <Text>Error...</Text>
  }

  return (
    <View style={styles.container}>
        <FlatList 
          data={posts}
          keyExtractor={(post) => post.id.toString()}
          style={styles.list}
          renderItem={({item: post}) => (
            <View style={styles.card}>
              <Text style={styles.title}>{post.title}</Text>
              <Text style={styles.body}>{post.body}</Text>
            </View>
          )}
          ItemSeparatorComponent={() => <View style={{height: 16}} />}
        />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1, justifyContent: "center", alignItems: "center",
    padding: 20
  },
  list: {
    display: "flex", flexDirection: "column", gap: 50
  },
  card: {
    padding: 8, borderRadius: 8, flex: 1,
    display: "flex", flexDirection: "column", gap: 2,
    borderWidth: 1, borderColor: "#bbb",
  },
  title: {
    fontSize: 22, fontWeight: "500"
  },
  body: {
    fontSize: 14, fontWeight: "300"
  },
})
