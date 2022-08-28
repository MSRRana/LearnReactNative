import { View, Text, SafeAreaView, StatusBar, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { Flex, Box, Input } from 'native-base'
import Icon from 'react-native-vector-icons/Ionicons';
const LoginScreen = () => {
    return (
        <SafeAreaView style={{ backgroundColor: '#009788', flex: 1 }}>
            <StatusBar hidden />
            <Box mt={20} ml={8} bg={'#009788'}>
                <Text style={{ fontSize: 60, color: '#fefefe', fontWeight: '800' }}>
                    Login !
                </Text>
            </Box>
            <Box bg={'#ffffff'} flex={1} borderTopRadius={60} mt={10} alignItems={'center'}>
                <Box mt={20} w={'90%'}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20, backgroundColor: '#ffffff' }}>
                        <Icon name="mail" size={25} color="##8c8c8c" style={{ padding: 7 }} />
                        <TextInput placeholder='Email' style={{ width: "85%", fontSize: 20, borderBottomWidth: 2, borderColor: '#d0d0d0' }}></TextInput>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20, backgroundColor: '#ffffff', }}>
                        <Icon name="lock-closed" size={25} color="##8c8c8c" style={{ padding: 7 }} />
                        <TextInput placeholder='Password' style={{ width: "85%", fontSize: 20, borderBottomWidth: 2, borderColor: '#d0d0d0' }}></TextInput>
                    </View>
                    <View style={{ width: '95%', backgroundColor: '#009788', marginTop: 50, marginLeft: 10, justifyContent: 'center', alignItems: 'center', borderRadius: 5, elevation: 5 }}>
                        <Text style={{ fontSize: 30, fontWeight: '700', color: '#eeffff', paddingVertical: 2, paddingBottom: 7 }}>Login</Text>
                    </View>
                    <View style={{ width: '95%', backgroundColor: '#009788', marginTop: 30, marginLeft: 10, justifyContent: 'center', alignItems: 'center', borderRadius: 5, elevation: 5 }}>
                        <Text style={{ fontSize: 16, fontWeight: '700', color: '#eeffff', marginVertical: 10 }}>Forgot Password?</Text>
                    </View>
                </Box>
            </Box>

        </SafeAreaView>


    )
}

export default LoginScreen