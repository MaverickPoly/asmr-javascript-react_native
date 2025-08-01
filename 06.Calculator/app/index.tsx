import { useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import Button from "@/components/Button";



export default function Index() {
  const [calculation, setCalculation] = useState("0");

  function calculate() {
    setCalculation(eval(calculation).toString())
  }

  function deleteBtn() {
    if (calculation.length == 1) {
      setCalculation("0")
    } else {
      setCalculation(calculation.slice(0, -1))
    }
  }
  
  function clearField() {
    setCalculation("0")
  }

  function calculatePercent() {
    const res: number = eval(calculation) / 100
    setCalculation(res.toFixed(2))
  }

  function addChar(char: string) {
    if (calculation == "0" && char !== ".") {
      setCalculation(char)
    } else {
      setCalculation(calculation + char)
    }
  }
  
  const buttons_data = [
    {text: "C", command: clearField},
    {text: "❌", command: deleteBtn},
    {text: "%", command: calculatePercent},
    {text: "+", command: () => addChar("+")},

    {text: "7", command: () => addChar("7")},
    {text: "8", command: () => addChar("8")},
    {text: "9", command: () => addChar("9")},
    {text: "-", command: () => addChar("-")},

    {text: "4", command: () => addChar("4")},
    {text: "5", command: () => addChar("5")},
    {text: "6", command: () => addChar("6")},
    {text: "✕", command: () => addChar("*")},

    {text: "1", command: () => addChar("1")},
    {text: "2", command: () => addChar("2")},
    {text: "3", command: () => addChar("3")},
    {text: "÷", command: () => addChar("/")},

    {text: "0", command: () => addChar("0"), style: {flex: 2}},
    {text: ".", command: () => addChar(".")},
    {text: "=", command: calculate},
  ]

  return (
    <View
      style={styles.container}
    >
      <Text style={styles.calculation}>{calculation}</Text>

      <FlatList 
        data={buttons_data}
        renderItem={({item: btn}) => (
          <Button 
            text={btn.text}
            command={btn.command}
            style={btn.style}
          />
        )}
        numColumns={4}
        contentContainerStyle={styles.grid}
        ItemSeparatorComponent={() => <View style={{width: 100}} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, display: "flex", flexDirection: "column", 
    gap: 10, padding: 12,
  },
  calculation: {
    textAlign: "right", fontSize: 40, fontWeight: "700"
  },
  grid: {
    gap: 10
  },
})
