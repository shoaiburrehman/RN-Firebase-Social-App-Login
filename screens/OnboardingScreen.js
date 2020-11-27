import React from 'react';
import { Button, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

const Skip = ({...props}) => (
    <TouchableOpacity
        style={{marginHorizontal:10}}
        {...props}
    >
        <Text style={{color:"#000000", fontSize:16}}>Skip</Text>
    </TouchableOpacity>
)
const Next = ({...props}) => (
    <TouchableOpacity
        style={{marginHorizontal:10}}
        {...props}
    >
        <Text style={{color:"#000000", fontSize:16}}>Next</Text>
    </TouchableOpacity>
)
const Done = ({...props}) => (
    <TouchableOpacity
        style={{marginHorizontal:10}}
        {...props}
    >
        <Text style={{color:"#000000", fontSize:16}}>Done</Text>
    </TouchableOpacity>
)
const Dot = ({selected}) => {

    let backgroundColor = selected ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.3)';

    return(
        <View
            style={{
                width: 5,
                height: 5,
                marginHorizontal: 3,
                backgroundColor
            }}
        />
    )
}

const OnboardingScreen = ({navigation}) => {
    return (
        <Onboarding
            onSkip={() => navigation.replace("Login")}
            onDone={() => navigation.navigate("Login")}
            SkipButtonComponent={Skip}
            NextButtonComponent={Next}
            DoneButtonComponent={Done}
            DotComponent={Dot}
            pages={[
                {
                backgroundColor: '#a6e4d0',
                image: <Image source={require('../assets/onboarding-img1.png')} />,
                title: 'Connect to the World',
                subtitle: 'A New Way To Connect With The World.',
                },
                {
                backgroundColor: '#fdeb93',
                image: <Image source={require('../assets/onboarding-img2.png')} />,
                title: 'Onboarding 2',
                subtitle: 'Done with React Native Onboarding Swiper',
                },
                {
                backgroundColor: '#e9bcbe',
                image: <Image source={require('../assets/onboarding-img3.png')} />,
                title: 'Become The Star',
                subtitle: 'Let The Spotlight Capture You',
                },
            ]}
        />
    )
}

export default OnboardingScreen

const styles = StyleSheet.create({})
