import React from "react";
import {useReducer, useState, useRef} from "react";
import {View, StyleSheet, Text} from "react-native";
import {Card} from "react-native-elements";
import { TextInput } from "react-native-gesture-handler";
import RNPickerSelect, {defaultStyles} from "react-native-picker-select";

export default function Calculator() {
    const [numbers, setNumbers] = useState({
        numberOne: 0,
        numberTwo: 0
    });
  const inputRefs = useRef({
      firstTextInput: null,
      numberOne: null,
      numberTwo: null
  })
    const symbols = [
        {
            label: "+",
            value: "add"
        },
        {
            label: "-",
            value: "subtract"
        },
        {
            label: "x",
            value: "multiply"
        },
        {
            label: "/",
            value: "divide"
        }
    ]


    const [result, dispatch] = useReducer((internalState, action) => {
        switch (action.operation){
            case "add":
                return (internalState = action.payload.numberOne + action.payload.numberTwo);
            case "subtract":
                return (internalState = action.payload.numberOne - action.payload.numberTwo);
            case "multiply":
                return (internalState = action.payload.numberOne * action.payload.numberTwo);
            case "divide":
                return (internalState = action.payload.numberOne / action.payload.numberTwo);
            default: internalState
        }
    }, "");

    console.log(result)
    
    const placeholder = {
      label: "Choose a function",
      value: null,
      color: '#9EA0A4',
    }
    
    return(
            <Card>
        <View>
            <TextInput style={styles.input} onChangeText={(text) => setNumbers({...numbers, numberOne: parseInt(text)})}/>
            
            <RNPickerSelect style={pickerSelectStyles.picker}
            placeholder={placeholder}
            items={symbols}
            onValueChange={(text) => 
                dispatch({
                    operation: text,
                    payload: { numberOne: numbers.numberOne, numberTwo: numbers.numberTwo }
                  })  
                }
            // 
          /> 
        <View>
            <TextInput style={styles.inputtwo} onChangeText={(text) => setNumbers({...numbers, numberTwo: parseInt(text)})}/>
  </View>
            {/* <View style="sumsymbol">  */}
            <Text style={styles.result}> equals {result}</Text> 
            {/* </View> */}

        </View>
            </Card>
    )
}
const styles = StyleSheet.create({
 input: {
     marginTop: 20,
     marginBottom: 10,
     width: "20%",
     height: "45%",
     margin: "auto",
     borderColor: "slategray",
     borderWidth: 3,
     textAlign: "center",
     fontSize: 40,
     padding: 20,
 },
 inputtwo: {
     marginTop: 10,
     marginBottom: 30,
    borderColor: "slategray",
    borderWidth: 3,
    padding: 30,
    width: "20%",
    height: "55%",
    textAlign: "center",
    margin: "auto",
    fontSize: 40,
 },
 result: {
     fontSize: 60,
     backgroundColor: "lightblue",
     textAlign: "center",
 },
 picker: {
     
 }
 })


const pickerSelectStyles = StyleSheet.create({
    picker: {
 width: "20%",
 height: 40,
 textAlign: "center",
    },

 })