import { useEffect, useState } from "react"
import APIs, { endpoints } from "../../config/APIs"
import { FlatList, Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from "react-native"
import { HomeHeader, MainCategory } from "../../components/customer/HomeHeader"
import CustomerStyles from "../../styles/CustomerStyles"



const HomeScreen = () => {
    
    const [restaurants, setRestaurants] = useState([])
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1)

    
    const loadRestaurants = async () => {
        try {
            setLoading(true)
            let res = await APIs.get(endpoints.restaurants)
            setRestaurants(res.data)
        } catch (err) {
            console.error(err)
        } finally {
            setLoading(false)
        }
    }
    useEffect(() => {
        
        loadRestaurants()
    }, [])

    
    return (

        <View style={CustomerStyles.container}>
            <HomeHeader />

            <FlatList 
                ListHeaderComponent={MainCategory}
                data={restaurants}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <TouchableOpacity style={CustomerStyles.flatListNearRestaurant}>
                        <Image
                            source={{ uri: item.image }}
                            style={CustomerStyles.flatListNearRestaurantImage}
                        />
                        <View style={{ marginLeft: 10, flex: 1 }}>
                            <Text style={{ fontWeight: "bold", fontSize: 18 }}>{item.name}</Text>
                            <Text>{item.address}</Text>
                            <Text style={{ marginTop: 5 }}>⭐ {item.star_rate}</Text>
                        </View>
                    </TouchableOpacity>
                )}
                refreshing={loading}
                onRefresh={loadRestaurants}
            />
           
        </View>


    )
}
export default HomeScreen;