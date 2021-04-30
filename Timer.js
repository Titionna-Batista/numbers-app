import React, { useReducer, useEffect } from "react";
import { StyleSheet, Text, SafeAreaView, View } from "react-native";
import { Button } from "react-native-elements";

let patchCall = "startCount"

export default function App() {
	return (
		<SafeAreaView>
			<Timer></Timer>
		</SafeAreaView>
	);
}

function StartCount() {
	return (
		<>
			<Button
				style={styles.button}
				title="Start Timer"
				onPress={startPatch}
			></Button>
		</>
	);
}

// Function for Stopping Timer//
function StopCount() {
	return (
		<>
			<Button
				style={styles.button}
				title="Stop Timer"
				onPress={stopPatch}
			></Button>
		</>
	);
}

//Function for Resetting Timer//
function ResetCount() {
	return (
		<>
			<Button
				style={[styles.button, styles.reset]}
				title="Reset Timer"
				onPress={resetPatch}
			></Button>
		</>
	);
}

// Timer State Stuff//

let initialState = { seconds: 0 };

const reducer = (state, action) => {
	switch (action.type) {
		case "startCount":
			return { seconds: action.payload };
		case "stopCount":
			return { seconds: state.seconds };
		case "resetCount":
			return { seconds: 0 };
		default:
			return state;
	}
};

function stopPatch() {
	patchCall = "stopCount";
}
function startPatch() {
	patchCall = "startCount";
}
function resetPatch() {
	patchCall = "resetCount";
}

const Timer = () => {
	const [state, dispatch] = useReducer(reducer, initialState);

	useEffect(() => {
		const interval = setInterval(() => {
			dispatch({ type: patchCall, payload: state.seconds + 1 });
		}, 1000);
		return () => clearInterval(interval);
	});

	return (
		<SafeAreaView>
			<Text style={styles.text}>
				{" "}
				You have been on this site for {state.seconds} seconds.
			</Text>
			<View style={[{ flexDirection: "row" }, { margin: "auto" }]}>
				<StartCount />
				<StopCount />
			</View>
			<ResetCount />
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},

	text: {
		fontSize: 30,
		padding: 20,
		margin: "auto",
		textAlign: "center",
	},

	button: {
		width: 200,
		margin: "auto",
		textAlign: "center",
		padding: 20,
	},
	reset: {
		justifyContent: "center",
	},
});
