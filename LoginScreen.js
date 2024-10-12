import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, TextInput, Alert, StyleSheet, TouchableOpacity, Image, Text, Dimensions, ScrollView } from 'react-native';

const { height: SCREEN_HEIGHT, width: SCREEN_WIDTH } = Dimensions.get("window");

const LoginScreen = ({ navigation }) => {
    const [userID, setUserID] = useState('');
    const [password, setPassword] = useState('');
    const [showInputs, setShowInputs] = useState(false);


    const handleLogin = () => {
        if (!showInputs) {
            setShowInputs(true);
        } else {
            if (userID === 'user' && password === 'pass') {
                navigation.navigate('Main');
            } else {
                Alert.alert('로그인 실패', '잘못된 사용자 이름 또는 비밀번호입니다.');
            }
        }
    };

    return (
        <ScrollView style={styles.container}>
            <StatusBar style='light' />
            <View style={styles.logoView}>
                <Image style={styles.logo} source={require("../assets/mainChar.png")} />
            </View>
            {showInputs && (
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="ID"
                        value={userID}
                        onChangeText={setUserID}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Password"
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry
                    />
                </View>
            )}
            <View style={styles.btnView}>
                <TouchableOpacity style={styles.btn} onPress={handleLogin}>
                    <Text style={styles.logIn}>
                        LogIn
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('SignUp')}>
                    <Text style={styles.signUp}>
                        Sign-up
                    </Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#47C675',
        flex: 1,
    },
    logoView: {
        flex: 0.6,
        paddingTop: 80,
        alignItems: "center"
    },
    logo: {
        width: 250,
        height: 250,
        marginTop: 100,
    },
    btnView: {
        justifyContent: "space-between",
        flexDirection: "row",
        width: SCREEN_WIDTH,
        paddingHorizontal: 50,
        alignItems: "center",
    },
    btn: {
        backgroundColor: "white",
        borderRadius: 15,
        marginTop: 20
    },
    logIn: {
        fontSize: "35",
        paddingHorizontal: 25,
        paddingVertical: 5,
    },
    signUp: {
        fontSize: "35",
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    inputContainer: {
        alignItems: "center",
        marginTop: 20,
        flex: 0.3,
    },
    input: {
        backgroundColor: 'white',
        padding: 12,
        borderRadius: 5,
        marginVertical: 10,
        width: SCREEN_WIDTH * 0.75,
    }
});

export default LoginScreen;