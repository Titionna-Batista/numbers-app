import React, {useState} from "react";
import {View, StyleSheet, Text, Linking} from "react-native";
import {Card} from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";


export default function AboutMe(){
    const [nightShift, setNightShift] = useState(true);

    console.log(nightShift);


    const styles = StyleSheet.create({
        mainView:{
            backgroundColor: nightShift ? "#28286A" : "#D65C5C",
        },
        image: {
            borderRadius: 80,
            width: 150,
            height: 150,
            margin: "auto",
        },
        title:{
            fontSize: 45,
            color: nightShift ? "#F2DFF2" : "#A32929",
        },
        subtitle:{
            color: "black",
            margin: "auto",
            color: nightShift ? "#BFBFFF" : "#6A4954",
        },
        divider:{
            width: "80%",
            margin: "auto",
            color: nightShift ? "#C795CE" : "#711414",
        },
        text:{
            marginBottom: 20,
            fontSize: 16,
            textAlign: "center",
            color: nightShift ? "#FFFFFF" : "#707070",
        },
        nextDivider:{
            width: "60%",
            margin: "auto",
            color: nightShift ? "#C795CE" : "#AC1313",
        },
        linkimage:{
            width: 60,
            height: 60,
            borderRadius: 50,
            margin: "auto",
            paddingBottom: 10,
        },
        cardColor:{
            backgroundColor:  nightShift ? "#444474" : "#FFE5E5",
        },

        buttonChange:{
            backgroundColor: nightShift ? "#14144B" : "#8B2A2A",
            color: "#FFFFFF",
            padding: 15,
            textAlign: "center",
            fontSize: 20,
            marginTop: 15,
            borderRadius: 5,
        }
    
    });

    return(
        <View style={styles.mainView}>
            <Card containerStyle = {styles.cardColor}>
                <View>
                    <Card.Image style={styles.image} source={require('./image/betterPicture.jpg')}></Card.Image>
                </View>
                <Card.Title style={styles.title}> Titionna Batista</Card.Title>
                    <Card.FeaturedSubtitle style={styles.subtitle}> Student Web Developer </Card.FeaturedSubtitle>
                    <Card.Divider style = {styles.divider}/>
                <Text style={styles.text}> I am 21 and have been learning HTML since I was 15.
                    I am new to the world of JS and React, but I have had fun learning
                    all of their quirks and abilities. I am eager to learn more in the future.
                </Text>
                <Card.Divider style = {styles.nextDivider}/>

                <TouchableOpacity  onPress={() => Linking.openURL("https://www.linkedin.com/in/titionna-batista/")}>
                <Card.Image source={require('./image/linkedinicon.jpg')} style={styles.linkimage}></Card.Image>
                </TouchableOpacity>

                <Text
                    style={styles.buttonChange}
                    onPress={() => (nightShift ? setNightShift(false) : setNightShift(true))}
                >Toggle Color Change</Text>
                
                
            </Card>
        </View>


    )

}


