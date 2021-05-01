import * as React from "react";
import { View, Text, StyleSheet} from "react-native";
import { useState } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { PropTypes } from "prop-types";
import MathScreen from "./MathScreen";
import Timer from "./Timer";
import Calculator from "./Calculator";
import AboutMe from "./Card";
import { Overlay, Input, Button } from "react-native-elements";
import Modal from "modal-react-native-web";

function HomeScreen({ navigation }) {
	const [showLogin, setShowLogin] = useState(false);
	const [login, setLogin] = useState(false);
	const [username, setUsername] = useState("");

	return (
		<View style={styles.looks}>
			{!login ? (
				<>
					<Text style={styles.title}> Welcome! Please Enter Your Name.</Text>
					<Button
						style={styles.button}
						onPress={() => setShowLogin(true)}
						title="Enter Name"
					/>
				</>
			) : (
				<>
					<Text style={styles.title}> Hello, {username}</Text>
					<Text style={styles.secondary}> Let's mess with math! </Text>
					<Button
						style={styles.button}
						onPress={() => setLogin(false)}
						title="Wipe Name"
					/>
				</>
			)}

			<Button
				style={styles.homeButton}
				onPress={() => navigation.openDrawer()}
				title="Open Left Drawer"
			/>
			<Overlay isVisible={showLogin} ModalComponent={Modal}>
				<Text>Please Enter Your Name</Text>
				<Input
					title="Username"
					value={username}
					onChangeText={(un) => setUsername(un)}
				></Input>

				<Button
					title="Submit"
					onPress={() => {
						setLogin(true);
						setShowLogin(false);
					}}
				></Button>
			</Overlay>
		</View>
	);
}
HomeScreen.propTypes = {
	navigation: PropTypes.any,
};

function DoSomeMath({ navigation }) {
	return (
		<View>
			<MathScreen />
			<Button
				style={styles.calButt}
				onPress={() => navigation.openDrawer()}
				title="Open Drawer"
			/>

			<Button
				style={styles.dosomemathback}
				onPress={() => navigation.goBack()}
				title="Go Back Home"
			/>
		</View>
	);
}

function CalculatorScreen({ navigation }) {
	return (
		<View>
			<Calculator/>
			<Button
				onPress={() => navigation.openDrawer()}
				title="Open Drawer"
			/>
			<Button
				onPress={() => navigation.goBack()}
				title="Go Back Home"
			/>
		</View>
	);
}

function ContinuousTimer({ navigation }) {
	return (
		<View>
			<Timer></Timer>
			<Button
				style={styles.calButt}
				onPress={() => navigation.openDrawer()}
				title="Open Drawer"
			/>
			<Button
				style={styles.calButt}
				onPress={() => navigation.goBack()}
				title="Go Back Home" 
			/>
		</View>
	);
}

function ColorShiftScreen ({ navigation }) {
	return (
		<View>
			<ColorShift/>
		</View>
	)
}


function MyInfo({ navigation }) {
	return (
		<View>
			<AboutMe/>
			<Button
				style={styles.button}
				onPress={() => navigation.openDrawer()}
				title="Open Drawer"
			/>
		</View>
	);
}


const Drawer = createDrawerNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Drawer.Navigator initialRouteName="About Me"> 
				<Drawer.Screen name="Home" component={HomeScreen} />
				<Drawer.Screen name="Go Do Some Math" component={DoSomeMath} />
				<Drawer.Screen name="Calculator" component={CalculatorScreen} />
				<Drawer.Screen name="Continuous Timer" component={ContinuousTimer} />
				<Drawer.Screen name="About Me" component={MyInfo}/>
			</Drawer.Navigator>
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	title: {
		fontSize: 40,
		margin: "auto",
		padding: 2,
	},
	secondary: {
		fontSize: 30,
		margin: "auto",
	},
	button: {
		width: "50%",
		margin: "auto",
		paddingTop: 10,
	},
	calButt: {
		width: "100%",
		margin: "auto",
		paddingBottom: 5,
	},
	dosomemathback: {
		width: "80%",
		margin: "auto",
		paddingTop: 20,
	},
	homeButton: {
		padding: 30,
		width: "40%",
		margin: "auto",
	},
	looks:{
		backgroundColor: "slategray",
	},
});
