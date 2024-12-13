
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { Icon } from 'react-native-paper';
import CustomerStyles from '../../styles/CustomerStyles';

const HomeHeader = () => {
    return (

        <View style={CustomerStyles.container_home_header}>
            {/* Address Section */}
            <TouchableOpacity style={CustomerStyles.addressContainer}>
                <Text style={CustomerStyles.deliverText}>Giao đến:</Text>
                <View style={CustomerStyles.addressRow}>
                    <Icon source="map-marker-outline" size={20} color="#fff"/>
                    <Text style={CustomerStyles.addressText} numberOfLines={1}>
                        Phước Kiển, Nhà Bè, Hồ Chí Minh, Việt Nam
                    </Text>
                    <Icon source="chevron-right" size={20} color="#000" />
                </View>
            </TouchableOpacity>

            {/* Search Bar */}
            <View style={CustomerStyles.searchContainer}>
                <Icon source="magnify" size={20} color="#666" />
                <TextInput
                    style={CustomerStyles.searchInput}
                    placeholder="Balzar De Cafe, Bánh Mì Chim Chay Giảm 50%"
                    placeholderTextColor="#999"
                />
            </View>
        </View>

    );
};



export default HomeHeader;