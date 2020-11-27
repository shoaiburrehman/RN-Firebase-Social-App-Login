import React, {useContext, useState, useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import AuthStack from './AuthStack';
import AppStack from './AppStack';
import { AuthContext } from './AuthProvider';

const Routes = () => {

    const {user, setUser} = useContext(AuthContext);
    const [initializing, setInitializing] = useState(true);

    const onAuthStateChanged = (user) => {
        setUser(user);
        if(initializing) setInitializing(false)
    }

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber;
    }, [])

    if(initializing) return null;

    return (
        <NavigationContainer>
            { user ? <AppStack /> : <AuthStack /> }
        </NavigationContainer>
    )
}

export default Routes;

const styles = StyleSheet.create({})
