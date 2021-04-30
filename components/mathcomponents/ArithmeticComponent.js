//Guided by https://www.c-sharpcorner.com/article/usereducer-hook-in-reactjs-part-one/

import React from "react";
import { Button} from "react-native-elements";
import { StyleSheet, View } from "react-native";

function ArithComponent({ currentState, dispatch }) {
	return (
		<>
			
				<View style={{ flexDirection: "row" }}>
					<Button
						style={styles.button}
						title="Multiply Number"
						onPress={() => dispatch({ type: "multiply", value: 2 })}
					></Button>
					<Button
						style={styles.button}
						title="Divide Number"
						onPress={() => dispatch({ type: "divide", value: 2 })}
					></Button>
				</View>

				<Button
					style={styles.button}
					title="Reset Number"
					onPress={() => dispatch({ type: "reset" })}
				></Button>
			
		</>
	);
}

const styles = StyleSheet.create({
	button: {
		padding: 5,
	},
	align: {
		marginVertical: "auto",
	},
	counter: {
		fontSize: 40,
		textAlign: "center",
	},
});

export default ArithComponent;
