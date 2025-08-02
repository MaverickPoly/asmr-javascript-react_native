import { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

import DropDownPicker from "react-native-dropdown-picker"

const rates = {
  USD: 1,
  RUB: 79.89,
  USZ: 12760,
  EUR: 0.86,
  CNY: 7.2,
  TRY: 40.65,
  RS: 87.2,
  KZT: 542.53,
}

const items = [
  {label: "USD", value: "USD"},
  {label: "RUB", value: "RUB"},
  {label: "USZ", value: "USZ"},
  {label: "EUR", value: "EUR"},
  {label: "CNY", value: "CNY"},
  {label: "TRY", value: "TRY"},
  {label: "RS", value: "RS"},
  {label: "KZT", value: "KZT"},
]

type Currency = "USD" | "RUB" | "USZ" | "EUR" | "CNY" | "TRY" | "RS" | "KZT"


export default function Index() {
  const [openFrom, setOpenFrom] = useState(false);
  const [openTo, setOpenTo] = useState(false);
  const [valueFrom, setValueFrom] = useState<Currency>("USD")
  const [fromVal, setFromVal] = useState("0");
  const [valueTo, setValueTo] = useState<Currency>("RUB")
  const [converted, setConverted] = useState<string | null>(null)

  function convert() {
    const numVal = parseFloat(fromVal)
    if (isNaN(numVal)) return alert("Invalid value!")
    const fromRes = numVal / rates[valueFrom]
    const toRes = fromRes * rates[valueTo]
    setConverted(toRes.toFixed(2))
  }

  return (
    <View
      style={styles.container}
    >
      {/* From Dropdown */}
      <Text style={styles.hint_text}>From:</Text>
      <DropDownPicker 
        open={openFrom}
        setOpen={setOpenFrom}
        value={valueFrom}
        setValue={setValueFrom}
        items={items}
        placeholder="Select currency"
        style={styles.dropdown}
        listMode="SCROLLVIEW"
      />
      {/* From Text input */}
      <TextInput 
        style={styles.input}
        keyboardType="numeric"
        value={fromVal}
        onChangeText={newText => setFromVal(newText)}
        placeholder="From value"
      />

      {/* To Dropdown */}
      <Text style={styles.hint_text}>To:</Text>
      <DropDownPicker 
        open={openTo}
        setOpen={setOpenTo}
        value={valueTo}
        setValue={setValueTo}
        items={items}
        placeholder="Select currency"
        style={styles.dropdown}
        listMode="SCROLLVIEW"
      />

      {/* Convert Button */}
      <TouchableOpacity style={styles.button} onPress={convert}>
        <Text style={styles.btn_text}>Convert</Text>
      </TouchableOpacity>

      {/* Result */}
      <Text style={styles.converted}>{converted}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, display: "flex", flexDirection: "column",
    padding: 20,
  },
  hint_text: {
    fontSize: 18, fontWeight: "600", marginBottom: 8,
  },
  dropdown: {
    marginBottom: 20, borderColor: "#999", zIndex: 1000,
  },
  input: {
    padding: 10, borderRadius: 12, borderWidth: 1,
    borderColor: "#999", marginBottom: 28,
  },
  button: {
    paddingHorizontal: 28, paddingVertical: 14, borderRadius: 12,
    backgroundColor: "green", marginTop: 10
  },
  btn_text: {
    color: "white", textAlign: "center", fontSize: 18,
    fontWeight: "700"
  },
  converted: {
    fontSize: 48, fontWeight: "600", marginTop: 20, textAlign: "center"
  },
});
