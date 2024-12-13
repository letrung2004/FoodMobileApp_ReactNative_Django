import React from 'react';
import DashBoard from '../screens/restaurant/DashBoard';
import RestaurantProfile from '../components/restaurant/RestaurantProfile';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Icon } from 'react-native-paper';
import RestaurantIncome from '../components/restaurant/RestaurantIncome';
import RestaurantMenu from '../components/restaurant/RestaurantMenu';
import RestaurantOrder from '../components/restaurant/RestaurantOrder';
import RestaurantReport from '../components/restaurant/RestaurantReport';
import RestaurantActiveTime from '../components/restaurant/RestaurantActiveTime';


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();



const StackNavigator = () => {
    return (
        <Stack.Navigator >
            <Stack.Screen name="home" component={DashBoard} options={{ headerShown: false }} />
            <Stack.Screen name="menu" component={RestaurantMenu} options={{ title: 'Thực đơn' }} />
            <Stack.Screen name="order" component={RestaurantOrder} options={{ title: 'Đơn hàng' }} />
            <Stack.Screen name="report" component={RestaurantReport} options={{ title: 'Báo cáo' }} />
            <Stack.Screen name="active_time" component={RestaurantActiveTime} options={{ title: 'Giờ hoạt động' }} />
        </Stack.Navigator>
    );
}

const RestaurantNavigation = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="index" component={StackNavigator} options={{ headerShown: false, title: 'Trang chủ', tabBarIcon: () => <Icon source="store-outline" size={30} /> }} />
            <Tab.Screen name="profile" component={RestaurantIncome} options={{ title: 'Thu nhập', tabBarIcon: () => <Icon source="wallet-outline" size={30} /> }} />
            <Tab.Screen name="income" component={RestaurantProfile} options={{ headerShown: false, title: 'Tôi', tabBarIcon: () => <Icon source="account-outline" size={30} /> }} />
        </Tab.Navigator>
    );
};

export default RestaurantNavigation;