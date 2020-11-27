/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import OnboardingScreen from '../screens/OnboardingScreen';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import AsyncStorage from '@react-native-community/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome';

const Stack = createStackNavigator();

const AuthStack = () => {
    const [isFirsLaunch, setIsFirstLaunch] = React.useState(null);
    let routeName;

    useEffect(() => {
        AsyncStorage.getItem('alreadyLaunched').then((value) => {
        if(value === null){
            AsyncStorage.setItem('alreadyLaunched', 'true');
            setIsFirstLaunch(true);
        } else{
            setIsFirstLaunch(false);
        }
        })
    }, [])

    if(isFirsLaunch === null){
        return null;
    }
    else if(isFirsLaunch === true){
        routeName = 'Onboarding'
    }
    else {
        routeName = 'Login'
    }
    return(
    // <StatusBar barStyle="dark-content" />
    <Stack.Navigator initialRouteName={routeName}>
        <Stack.Screen 
            name="Onboarding"
            component={OnboardingScreen}
            options={{header: () => null}}
        />
        <Stack.Screen 
            name="Login" 
            component={LoginScreen} 
            options={{header: () => null}}
        />
        <Stack.Screen 
            name="Signup" 
            component={SignupScreen}
            options={({navigation}) => ({
                title: '',
                headerStyle: {
                    backgroundColor: '#f9fafd',
                    shadowColor: '#f9fafd',
                    elevation: 0 //android
                },
                headerLeft: () => (
                    <View style={{marginLeft: 10}}>
                        <Icon.Button 
                            name="long-arrow-left"
                            size={25}
                            backgroundColor="#f9fafd"
                            color="#333"
                            onPress={() => navigation.navigate('Login')}
                        />
                    </View>
                )
            })}
        />
    </Stack.Navigator>
    );
};

const styles = StyleSheet.create({
});

export default AuthStack;
