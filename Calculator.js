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
        <View>
            <TextInput style={styles.input } onChangeText={(text) => setNumbers({...numbers, numberOne: parseInt(text)})}/>
            
            <RNPickerSelect
            placeholder={placeholder}
            items={symbols}
            onValueChange={(text) => 
                dispatch({
                    operation: text,
                    payload: { numberOne: numbers.numberOne, numberTwo: numbers.numberTwo }
                  })  
                }
            // style={pickerSelectStyles}
          /> 
        <View>
            <TextInput style={styles.input} onChangeText={(text) => setNumbers({...numbers, numberTwo: parseInt(text)})}/>
  </View>
            <Card>
            {/* <View style="sumsymbol">  */}
            <Text> equals {result}</Text> 
            {/* </View> */}
            </Card>

        </View>
    )
}
const styles = StyleSheet.create({
 input: {
     marginTop: 20,
     marginBottom: 10,
     width: "50%",
     margin: "auto",
     borderColor: "red",
     borderWidth: 3,
 }
 })


// const pickerSelectStyles = StyleSheet.create({


// })