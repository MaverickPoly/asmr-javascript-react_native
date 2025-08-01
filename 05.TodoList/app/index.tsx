import Form from "@/components/Form";
import { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import "react-native-get-random-values"
import AsyncStorage from '@react-native-async-storage/async-storage';
import {v4} from "uuid";


interface Todo {
  id: string,
  title: string;
  completed: boolean;
}

export default function Index() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetchTodos()
    setLoading(false);
  }, [])

  if (loading) {
    return <Text>Loading...</Text>
  }

  async function createTodo(title: string) {
    const id = v4()
    const todo: Todo = {title, id, completed: false}
    const updatedTodos = [...todos, todo]
    setTodos(updatedTodos)
    await AsyncStorage.setItem("todos", JSON.stringify(updatedTodos))    
  }

  async function fetchTodos() {
    const res = JSON.parse(await AsyncStorage.getItem("todos") || "[]")
    console.log(res);
    setTodos(res)
  }

  async function toggleTodoComplete(id: string) {
    const updatedTodos = todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo)
    setTodos(updatedTodos)
    await AsyncStorage.setItem("todos", JSON.stringify(updatedTodos))
  }

  async function deleteTodo(id: string) {
    const updatedTodos = todos.filter(todo => todo.id !== id)
    setTodos(updatedTodos)
    await AsyncStorage.setItem("todos", JSON.stringify(updatedTodos))
  }


  return (
    <View
      style={styles.container}
    >
      <Form createTodo={createTodo} />

      <FlatList 
        style={styles.list}
        data={todos}
        keyExtractor={(todo) => todo.id}
        renderItem={({item}) => (
          <View style={[styles.card, item.completed ? styles.card_completed : styles.card_uncompleted]}>
            <Text style={styles.title}>{item.title}</Text>
            <View style={styles.actions}>
              <TouchableOpacity 
                style={styles.checkbox}
                onPress={() => toggleTodoComplete(item.id)}
              >
                <Text style={styles.checkbox_text}>{item.completed ? "🔴" : "🟢"}</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                style={styles.checkbox}
                onPress={() => deleteTodo(item.id)}
              >
                <Text style={styles.checkbox_text}>❌</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}  
        ItemSeparatorComponent={() => <View style={{height: 16}} />}
      />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    paddingVertical: 30,
    paddingHorizontal: 18
  },
  list: {
    display: "flex", flex: 1,
  },

  card: {
    borderWidth: 1, padding: 8, display: "flex", flexDirection: "row",
    alignItems: "center", justifyContent: "space-between",
    borderRadius: 10,
  },
  card_completed: {
    backgroundColor: "#70ff69"
  },
  card_uncompleted: {
    backgroundColor: "#ff5e5e"
  },

  actions: {
    display: "flex", flexDirection: "row", gap: 10,
  },

  title: {
    fontSize: 18, fontWeight: "500",
  },
  checkbox: {
    borderRadius: 8, padding: 5, backgroundColor: "#b58a26"
  },
  checkbox_text: {
    fontSize: 16,
  }
})
