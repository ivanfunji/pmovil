
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Image, TextInput, View, Button } from "react-native";

export default function App() {
  const [email, onChangeEmail] = React.useState("");
  const [password, onChangePass] = React.useState("");

  const onPressLogin = () => {
	alert(`Logged:\n ${email} \n ${password}`);
  }

  return (
	<View style={styles.container}>
    	<View style={styles.boxed}>
			<Image
				style={[styles.box, styles.image]}
				source={require("./images/2453.png")}
			/>

			<TextInput
				style={[styles.box, styles.input]}
				placeholder="Email"
				onChangeText={ text => onChangeEmail(text) }
				value={email}
			/>

			<TextInput
				placeholder="Password"
				style={[styles.box, styles.input]}
				onChangeText={ text => onChangePass(text) }
				value={password}
				secureTextEntry={true}
			/>

			<Button
				onPress={onPressLogin}
	 			title="Login"
				color="#457"
				accessibilityLabel="Login"
				style={[styles.box]}
			/>
		</View>
	</View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
	backgroundColor: "#eaeaea",
	alignItems: "center",
	flexDirection: "column"
  },
  boxed: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: 10,
    width: 300
  },
  box: {
	padding: 10,
	position: "relative",
	marginBottom: 15,
    width: "100%",
  },
  input: {
	textAlign: "center",
	color: "black",
    padding: 6,
	backgroundColor: "rgba(255,255,255,0.8)",
	borderRadius: 2
  },
  image: {
	borderRadius: 50,
	width: 100,
	height: 100
  }
});
