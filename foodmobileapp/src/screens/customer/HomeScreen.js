import { useEffect, useState } from "react"
import APIs, { endpoints } from "../../config/APIs"
import { FlatList, Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from "react-native"
import Styles from "../../styles/CustomerStyles"
import HomeHeader from "../../components/customer/HomeHeader"
import CustomerStyles from "../../styles/CustomerStyles"
import { Chip } from "react-native-paper"



const HomeScreen = () => {
    const [main_categories, setMainCategories] = useState([])
    const [restaurants, setRestaurants] = useState([])
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1)

    const loadMainCategories = async () => {
        let res = await APIs.get(endpoints['main_categories'])
        setMainCategories(res.data)
        console.log(main_categories)
    }
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
        loadMainCategories()
        loadRestaurants()
    }, [])
    return (

        <View style={CustomerStyles.container}>
            <HomeHeader />
            <ScrollView horizontal={true} style={CustomerStyles.scrollMainCategories}
            showsHorizontalScrollIndicator={false}>
                {main_categories.map((main_c) => (
                    <TouchableOpacity key={main_c.id} 
                    style={{backgroundColor: 'red', alignItems: 'center' ,marginRight: 25, height: 100}}>
                        
                        <View style={CustomerStyles.mainCategory}>
                            <Image source={{ uri: main_c.image }} style={{ width: 40, height: 40 }}/>
                        </View>
                        <Text style={{ marginTop: 5 }}>{main_c.name}</Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>
            
            <Text style={{ paddingHorizontal: 10, fontSize: 18, fontWeight: "bold" }}>
                Quán ngon gần bạn
            </Text>
            <FlatList
                data={restaurants}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <TouchableOpacity style={{ flexDirection: "row", padding: 10, borderBottomWidth: 1, borderColor: "#ccc" }}>
                        <Image
                            source={{ uri: item.image }}
                            style={{ width: 60, height: 60, borderRadius: 5 }}
                        />
                        <View style={{ marginLeft: 10, flex: 1 }}>
                            <Text style={{ fontWeight: "bold", fontSize: 16 }}>{item.name}</Text>
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