import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Button } from "react-native-elements";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ColorShift() {
    const [darkMode, setDarkMode] = useState(false);
    const [lastNumber, setLastNumber] = useState("");
    const [curNum, setCurNum] = useState("");
    const calcButtons = [
        "Clear","Delete", "/", 1, 2, 3, "*", 4, 5, 6, "-", 7, 8, 9, "+", 0, ".", "=", ];

    function calculator() {
        let prevSymbol = curNum[curNum.length - 1];

        if (
            prevSymbol === "/" ||
            prevSymbol === "*" ||
            prevSymbol === "-" ||
            prevSymbol === "+" ||
            prevSymbol === "."
        ) {
            setCurNum(curNum);
            return;
        } else {
            let result = eval(curNum).toString();
            setCurNum(result);
            return;
        }
    }

    function handleInput(buttonPressed) {
        if (
            buttonPressed === "+" ||
            buttonPressed === "-" ||
            buttonPressed === "*" ||
            buttonPressed === "/"
        ) {
            setCurNum(curNum + buttonPressed);
            return;
        }
        switch (buttonPressed) {
            case "Delete":
                setCurNum(curNum.substring(0, curNum.length - 1));
                return;
            case "Clear":
                setLastNumber("");
                setCurNum("");
                return;
            case "=":
                setLastNumber(curNum + "=");
                calculator();
                return;
        }
        setCurNum(curNum + buttonPressed);
    }

    const styles = StyleSheet.create({
        background: {
            backgroundColor: "darkBlue",
        },
        colorChange:{
            alignItems: "left",
            width: "30%",
        },
        results: {
            backgroundColor: darkMode ? "#282f3b" : "#f5f5f5",
            maxWidth: "100%",
            minHeight: "35%",
            alignItems: "flex-end",
            justifyContent: "flex-end",
        },
        sum: {
            maxHeight: 45,
            color: darkMode ? "#00b9d6" : "#76AEB6" ,
            margin: 15,
            fontSize: 35,
        },
        textHistory: {
            color: darkMode ? "#B5B7BB" : "#7c7c7c",
            fontSize: 20,
            marginRight: 10,
            alignSelf: "flex-end",
        },
        themeButton: {
            alignSelf: "flex-start",
            top: 5,
            margin: "auto",
            backgroundColor: darkMode ? "#7b8084" : "#e5e5e5",
            alignItems: "left",
            justifyContent: "center",
            width: "20%",
            height: 50,
            borderRadius: 25,
        },
        calcButtons: {
            width: "100%",
            height: "35%",
            flexDirection: "row",
            flexWrap: "wrap",
            alignItems: "flex-end",
        },
        button: {
            borderColor: darkMode ? "#3f4d5b" : "#e5e5e5",
            alignItems: "center",
            justifyContent: "center",
            minWidth: "24%",
            minHeight: "54%",
            flex: 2,
        },
        textButton: {
            color: darkMode ? "#b5b7bb" : "#7c7c7c",
            fontSize: 28,
        },
    });

    return (
        <SafeAreaView style={styles.background}>
            <View>
                <Button
                    style={styles.colorChange}
                    title="Press to Change Colors"
                    name={darkMode ? "1" : "O"}
                    size={24}
                    color={darkMode ? "0" : "1"}
                    onPress={() => (darkMode ? setDarkMode(false) : setDarkMode(true))}
                />
                <View style={styles.results}>
                    <Text style={styles.textHistory}>{lastNumber}</Text>
                    <Text style={styles.sum}>{curNum}</Text>
                </View>
                <View style={styles.calcButtons}>
                    {calcButtons.map((button) =>
                        button === "=" ||
                        button === "/" ||
                        button === "*" ||
                        button === "-" ||
                        button === "+" ? (
                            <TouchableOpacity
                                key={button}
                                style={[
                                    styles.button,
                                    { backgroundColor: darkMode ? "#307681" : "#00b9d6" },
                                ]}
                                onPress={() => handleInput(button)}
                            >
                                <Text
                                    style={[styles.textButton, { color: "white", fontSize: 28 }]}
                                >
                                    {button}
                                </Text>
                            </TouchableOpacity>
                        ) : button === 0 ? (
                            <TouchableOpacity
                                key={button}
                                style={[
                                    styles.button,
                                    {
                                        backgroundColor:
                                            typeof button === "number"
                                                ? darkMode
                                                    ? "#303946"
                                                    : "#fff"
                                                : darkMode === true
                                                ? "#414853"
                                                : "#ededed",
                                        minWidth: "36%",
                                    },
                                ]}
                                onPress={() => handleInput(button)}
                            >
                                <Text style={styles.textButton}>{button}</Text>
                            </TouchableOpacity>
                        ) : button === "." || button === "Delete" ? (
                            <TouchableOpacity
                                key={button}
                                style={[
                                    styles.button,
                                    {
                                        backgroundColor:
                                            button === "."
                                                ? darkMode
                                                    ? "#303946"
                                                    : "#fff"
                                                : darkMode === true
                                                ? "#414853"
                                                : "#ededed",
                                        minWidth: "37%",
                                    },
                                ]}
                                onPress={() => handleInput(button)}
                            >
                                <Text style={styles.textButton}>{button}</Text>
                            </TouchableOpacity>
                        ) : button === "Clear" ? (
                            <TouchableOpacity
                                key={button}
                                style={[
                                    styles.button,
                                    {
                                        backgroundColor:
                                            typeof button === "number"
                                                ? darkMode
                                                    ? "#303946"
                                                    : "#fff"
                                                : darkMode === true
                                                ? "#414853"
                                                : "#ededed",
                                        minWidth: "36%",
                                    },
                                ]}
                                onPress={() => handleInput(button)}
                            >
                                <Text style={styles.textButton}>{button}</Text>
                            </TouchableOpacity>
                        ) : (
                            <TouchableOpacity
                                key={button}
                                style={[
                                    styles.button,
                                    {
                                        backgroundColor:
                                            typeof button === "number"
                                                ? darkMode
                                                    ? "#303946"
                                                    : "#fff"
                                                : darkMode === true
                                                ? "#414853"
                                                : "#ededed",
                                    },
                                ]}
                                onPress={() => handleInput(button)}
                            >
                                <Text style={styles.textButton}>{button}</Text>
                            </TouchableOpacity>
                        )
                    )}
                </View>
            </View>
        </SafeAreaView>
    );
}

