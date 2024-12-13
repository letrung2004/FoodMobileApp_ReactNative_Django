import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/customer/HomeScreen';
import AccountScreen from '../screens/customer/AccountScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-paper';
import DashBoard from '../screens/restaurant/DashBoard';
import CustomerStyles from '../styles/CustomerStyles';
import React from 'react';

const Stack = createNativeStackNavigator()

const HomeStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='HomeScreen' component={HomeScreen} />
        </Stack.Navigator>
    )
}

const AccountStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='AccountScreen' component={AccountScreen} />
            
        </Stack.Navigator>
    )
}


const Tab = createBottomTabNavigator()

const TabNavigator = () => {
    return (
        <Tab.Navigator screenOptions={{
            tabBarStyle: CustomerStyles.tabBar,
            tabBarIconStyle: CustomerStyles.tabBarIcon,
            tabBarLabelStyle: CustomerStyles.tabBarLabel,
            headerShown: false
        }}>
            <Tab.Screen name='homeScreen' component={HomeStackNavigator}
                options={{ title: 'Trang chủ', 
                tabBarIcon: () => <Icon source="home-outline" size={30} /> }} />
            <Tab.Screen name='following' component={HomeStackNavigator}
                options={{ title: 'Yêu thích', 
                tabBarIcon: () => <Icon source="heart-outline" size={30} /> }} />
            <Tab.Screen name='orders' component={HomeStackNavigator}
                options={{ title: 'Đơn hàng', 
                tabBarIcon: () => <Icon source="format-list-checkbox" size={30} /> }} />
            <Tab.Screen name='me' component={AccountStackNavigator}
                options={{ title: 'Tôi', 
                tabBarIcon: () => <Icon source="account-outline" size={30} /> }} />
        </Tab.Navigator>
    )
}

const RootNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="MainTabs" component={TabNavigator} />
            <Stack.Screen  name='DashBoard' component={DashBoard} options={{ headerShown: true}}/>
        </Stack.Navigator>
    )
}

export default RootNavigator