import React from "react";
// import {useReducer, useState} from "react";
import {View, StyleSheet, Text} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import RNPickerSelect, {defaultStyles} from "react-native-picker-select";
import { render } from "react-native-web";

export default class Calculator extends React.Component {
    // const [numbers, setNumbers] = useState({
    //     numberOne: 0,
    //     numberTwo: 0
    // });

    state={
        numberOne: 0,
        numberTwo: 0
    }

    const symbols = [
        {
            label: "+",
            value: "add"
        },
        {
            label: "-",
            value: "minus"
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


    // const [result, dispatch] = useReducer((internalState, action) => {
    //     switch (action.operation){
    //         case "add":
    //             return (internalState = action.payload.numberOne + action.payload.numberTwo);
    //         case "subtract":
    //             return (internalState = action.payload.numberOne - action.payload.numberTwo);
    //         case "multiply":
    //             return (internalState = action.payload.numberOne + action.payload.numberTwo);
    //         case "divide":
    //             return (internalState = action.payload.numberOne - action.payload.numberTwo);
    //         default: break;
    //     }
    // }, "");

    
    const placeholder = {
      label: "Choose a function",
      value: null,
      color: '#9EA0A4',
    }
    render(){
    return(
        <View>
            <TextInput onChangeText={(e) => setNu({...numbers, numberOne: parseInt(e.target.value)})}/>

            <RNPickerSelect
            placeholder={placeholder}
            items={symbols}
            onValueChange={(e) => 
              setNumbers({...numbers, numberOne: parseInt(e.target.value)})
            }
            onUpArrow={() => {
              this.inputRefs.firstTextInput.focus();
            }}
            onDownArrow={() => {
              this.inputRefs.numberOne.togglePicker();
            }}
            style={pickerSelectStyles}
            value={numbers.numberOne}
            ref={el => {
              this.inputRefs.numberOne = el;
            }}

            
          />
            <TextInput onChangeText={(e) => setNumbers({...numbers, numberTwo: parseInt(e.target.value)})}/>

            <View style="sumsymbol"> 
            <Text> equals {result}</Text> 
            </View>


        </View>
    )
        }
}

const styles = StyleSheet.create({

})

const pickerSelectStyles = StyleSheet.create({
    

})
