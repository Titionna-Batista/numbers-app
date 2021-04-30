import React, { useReducer } from "react";
import { StyleSheet, SafeAreaView, Text, View } from "react-native";
import { Button, Card } from "react-native-elements";
import ArithComponent from "./components/mathcomponents/ArithmeticComponent";
import { initialState, reducer } from "./ApplicationState";

export default function MathScreen() {
	// Used to be App(), so keep that in mind.//
	const [currentState, dispatch] = useReducer(reducer, initialState);

	return (
		<SafeAreaView style={styles.container}>
			<Card>
				<Card.Title>Do Some Math!</Card.Title>
				<Text style={styles.counter}>
					{" "}
					Your result is: {currentState.numberOne}{" "}
				</Text>
				<Button
					style={styles.button}
					title="Add Number"
					onPress={() => dispatch({ type: "add", value: 1 })}
				></Button>
				<Button
					style={styles.button}
					title="Subtract Number"
					onPress={() => dispatch({ type: "subtract", value: 1 })}
				></Button>

				<ArithComponent currentState={currentState} dispatch={dispatch} />
			</Card>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
	button: {
		padding: 5,
	},
	counter: {
		fontSize: 40,
		textAlign: "center",
	},
	balance: {},
});
