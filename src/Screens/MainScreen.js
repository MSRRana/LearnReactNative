import React, { useEffect, useState } from 'react';
import {
    ActivityIndicator, FlatList,
    Text, View, Image, ScrollView, SafeAreaView,
    TextInput, TouchableOpacity, StyleSheet, Dimensions
} from 'react-native';
import api from '../routes/api';
import Icon from 'react-native-vector-icons/Ionicons';
const ApiCall = () => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [data1, setData1] = useState([]);
    const [data2, setdata2] = useState([]);


    const windowWidth = Dimensions.get('window').width;
    const BannerList = async () => {
        try {
            setLoading(true);
            const data = await api.get('BannerList.php')
            // console.log(data.data.result)
            const list = data.data;
            setData1(list.result)
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }
    const offerList = async () => {
        try {
            setLoading(true);
            const data = await api.get('OffersList.php')
            // console.log(data.data.result)
            const list = data.data;
            setdata2(list.result)
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }
    const RestaurantList = async () => {
        try {
            setLoading(true);
            const data = await api.get('RestaurantList.php')
            console.log(data.data.result)
            const list = data.data;
            setData(list.result)
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }
    useEffect(() => {
        BannerList();
        offerList();
        RestaurantList();
    }, []);

    const RateStar = () => {
        return (
            <Icon name="star-outline" size={19} color="#A7A7A7" />
        )
    }

    const renderItem = ({ item }) => {
        return (
            <View style={{ height: 250, width: 180, margin: 15, backgroundColor: "#ffff", borderRadius: 5, elevation: 5 }}>
                <Image source={{ uri: item.res_image }} style={{ height: 180, width: 180 }}></Image>

                <View style={{ paddingHorizontal: 10 }}>
                    <Text style={{ fontSize: 18, color: '#853535', fontFamily: 'Arial' }}>Cilicia</Text>
                    <Text style={{ color: '#1D1D1D', fontSize: 12 }}>{item.res_cuisine} - {item.res_distance}</Text>
                </View>
            </View>
        )
    }
    const renderItem1 = ({ item }) => {
        return (
            <View style={{ height: 203, width: windowWidth, alignItems: 'center', justifyContent: 'center' }}>
                <Image source={{ uri: item.banner_image }} style={{ height: 203, width: 327, borderRadius: 5 }}></Image>
            </View>
        )
    }

    const renderItem2 = ({ item }) => {
        return (
            <View style={{ height: 123, width: 340, marginLeft: 24, marginTop: 25, marginBottom: 2, backgroundColor: "#ffff", borderRadius: 5, elevation: 2, flexDirection: 'row' }}>
                <Image source={{ uri: item.res_image }} style={{ height: 123, width: 96.5, borderTopLeftRadius: 5, borderBottomLeftRadius: 5 }}></Image>
                <View style={{ marginLeft: 5, width: '58%' }}>
                    <Text style={{ fontSize: 18, color: '#853535', fontFamily: 'Arial', fontWeight: '600', paddingTop: 28 }}>Cilicia Restaurant</Text>
                    <Text numberOfLines={2} style={{ fontSize: 12 }}>{item.res_address} - {item.res_cost_for_two}</Text>
                    <Text style={{ fontSize: 12 }}></Text>
                </View>
                <View style={{
                    backgroundColor: '#FCF2E7', transform: [{ rotate: '270deg' }],
                    height: 24, width: 49, marginTop: 12, marginLeft: 5, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'
                }}>
                    <Icon name="star" size={12} color="#E4A617" />
                    <Text style={{
                        textAlignVertical: 'top',
                        marginLeft: 5, fontSize: 14, color: '#1D1D1D', fontWeight: '900'
                    }}>{item.res_ratings}</Text>
                </View>
            </View>
        )
    }
    const renderItem3 = ({ item }) => {
        return (
            <View style={{ backgroundColor: '#FCF2E7' }}>
                <View style={{
                    height: 220, margin: 20, backgroundColor: "#ffff", borderRadius: 2,
                    width: windowWidth / 2.5,
                    elevation: 5, alignItems: 'center', justifyContent: 'center',
                }}>

                    <Text style={{ fontSize: 40, color: '#831843', paddingTop: 20 }}>{item.percentage}%</Text>
                    <Text style={{ fontSize: 14, color: '#831843', }}>upto ${item.max_amount}</Text>
                    <View style={{ borderWidth: 1, width: windowWidth / 4.5, borderColor: 'yellow', marginVertical: 10 }}></View>
                    <View style={{ width: windowWidth / 3, height: 80, }}>
                        <Text numberOfLines={3} style={{ fontSize: 10, color: '#000', textAlign: 'center' }}>{item.message}</Text>
                    </View>
                    <Text style={{ fontSize: 10, color: '#831843', }}>View offer </Text>
                </View>
            </View>
        )
    }


    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }} >
            <View style={{ backgroundColor: '#FCF2E7', }} >
                <View style={{ flexDirection: 'row', alignItems: "center", paddingTop: 25, paddingLeft: 26, }}>
                    <Icon name="location" size={18} color="#37251C" />
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#37251C', }}>Greenwich,London</Text>

                </View>
                <Text ellipsizeMode="clip" numberOfLines={1} style={{ paddingLeft: 24, paddingRight: 38, marginBottom: 5, }}>
                    - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -</Text>
                <View style={styles.SearchBar}>
                    <Icon name="search" size={20} color="#ccc" />
                    <TextInput style={styles.searchBarText} placeholder="Restaurant,cuisiue,dish,etc."></TextInput>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center', marginVertical: 10, height: 210 }}>
                    {isLoading ? <ActivityIndicator /> : (
                        <FlatList
                            horizontal
                            data={data1}
                            keyExtractor={({ id }, index) => id}
                            renderItem={renderItem1}
                            showsHorizontalScrollIndicator={false}
                            pagingEnabled
                        />
                    )}
                </View>
            </View >
            <ScrollView style={{ flex: 2 }}>
                <View >
                    <View style={{ flexDirection: "row", justifyContent: 'space-between', marginHorizontal: 20, paddingTop: 10 }}>
                        <Text style={{ fontSize: 18, color: '#37251C' }}>Recommended for You</Text>
                        <Text style={{ fontSize: 14, color: '##37251C' }}>View All {'>'} </Text>
                    </View>
                    {isLoading ? <ActivityIndicator /> : (
                        <FlatList

                            data={data}
                            keyExtractor={({ id }, index) => id}
                            renderItem={renderItem}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            pagingEnabled

                        />
                    )}
                </View>
                <View
                    style={{
                        backgroundColor: '#FCF2E7', height: 260, flexDirection: 'row',
                        width: '100%'
                    }}>
                    <View style={{ justifyContent: 'center', width: '50%', paddingLeft: 30 }}>
                        <Text style={{ fontSize: 24, color: '#000', fontWeight: '600' }}>Just for{'\n'}Avinash!</Text>
                        <Text style={{ marginTop: 5, fontSize: 12 }}>we have curated all{'\n'}the best offers for you.{'\n'}Let's us know what{'\n'}you like.</Text>
                        <Text style={{ fontSize: 14, color: '#000', fontWeight: "700", marginTop: 20 }}>View all</Text>
                    </View>
                    <View style={{ marginLeft: -windowWidth / 2, width: '100%' }}>
                        {isLoading ? <ActivityIndicator /> : (
                            <FlatList
                                horizontal
                                contentContainerStyle={{ paddingLeft: windowWidth / 2, }}
                                data={data2}
                                keyExtractor={({ id }, index) => id}
                                renderItem={renderItem3}
                                showsHorizontalScrollIndicator={false}
                            // pagingEnabled
                            />
                        )}
                    </View>
                </View>
                <View>
                    <View style={{ flexDirection: "row", justifyContent: 'space-between', marginHorizontal: 20, paddingTop: 10 }}>
                        <Text style={{ fontSize: 18, color: '#000' }}>New to Selectable</Text>
                        <Text style={{ fontSize: 14, color: '#000' }}>View All {">"}  </Text>
                    </View>
                    {isLoading ? <ActivityIndicator /> : (
                        <FlatList
                            horizontal
                            data={data}
                            keyExtractor={({ id }, index) => id}
                            renderItem={renderItem}
                            showsHorizontalScrollIndicator={false}
                            pagingEnabled
                        />
                    )}
                </View>
                <View>
                    <View style={{ flexDirection: "row", justifyContent: 'space-between', marginHorizontal: 20, paddingTop: 10 }}>
                        <Text style={{ fontSize: 18, color: '#000' }}>Best around here</Text>
                        <Text style={{ fontSize: 14, color: '#000' }}>View All {">"} </Text>
                    </View>
                    {isLoading ? <ActivityIndicator /> : (
                        <FlatList
                            horizontal
                            data={data}
                            keyExtractor={({ id }, index) => id}
                            renderItem={renderItem}
                            showsHorizontalScrollIndicator={false}
                            pagingEnabled
                        />
                    )}
                </View>
                <View style={{ backgroundColor: '#FCF2E7', height: 224 }}>
                    <Text style={{ fontSize: 20, color: '#37251C', paddingLeft: 24, paddingTop: 28 }}>Rate your Experience</Text>
                    <View style={{ height: 123, width: 340, marginLeft: 24, marginTop: 30, backgroundColor: "#ffff", borderRadius: 5, elevation: 2, flexDirection: 'row' }}>
                        <Image source={require('./images/rest.jpg')} style={{ height: 123, width: 96.5, borderTopLeftRadius: 5, borderBottomLeftRadius: 5 }}></Image>
                        <View style={{ marginLeft: 5, width: '70%', paddingLeft: 20 }}>
                            <Text style={{
                                fontSize: 16, color: '#853535', fontFamily: 'Arial',
                                paddingTop: 28, fontWeight: '900'
                            }}>Cilicia Restaurant</Text>
                            <View style={{ borderWidth: 0.8, width: windowWidth / 2, borderColor: '#ccc', marginVertical: 5 }}></View>
                            <Text style={{ color: '#331E11', fontSize: 12, fontWeight: '600' }}>How was your Dinner at Cilicia?</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-around', width: '60%', marginTop: 5 }}>
                                <RateStar />
                                <RateStar />
                                <RateStar />
                                <RateStar />
                                <RateStar />
                            </View>
                        </View>

                    </View>

                </View>
                <View>
                    <View style={{ flexDirection: "row", justifyContent: 'space-between', marginHorizontal: 20, paddingTop: 10 }}>
                        <Text style={{ fontSize: 18, color: '#000' }}>Try something new</Text>
                        <Text style={{ fontSize: 14, color: '#000' }}>View All {">"}  </Text>
                    </View>
                    {isLoading ? <ActivityIndicator /> : (
                        <FlatList
                            horizontal
                            data={data}
                            keyExtractor={({ id }, index) => id}
                            renderItem={renderItem}
                            showsHorizontalScrollIndicator={false}
                            pagingEnabled
                        />
                    )}
                </View>
                <View >
                    <View style={{ marginHorizontal: 20, paddingTop: 10 }}>
                        <Text style={{ fontSize: 20, color: '#831843', fontWeight: '600' }}>Best Restaurants Nearby!</Text>
                        <Text style={{ fontSize: 12, color: '#000' }}>Discover the best around you! </Text>
                    </View>
                    {isLoading ? <ActivityIndicator /> : (
                        <FlatList
                            data={data}
                            keyExtractor={({ id }, index) => id}
                            renderItem={renderItem2}
                            showsHorizontalScrollIndicator={false}
                            pagingEnabled
                        />
                    )}
                </View>
                <TouchableOpacity style={{ margin: 30, width: 327, height: 40, backgroundColor: '#853535', justifyContent: 'center', alignItems: 'center', borderRadius: 3 }}>
                    <Text style={{ color: '#fff', fontSize: 14 }}>See all restaurants</Text>
                </TouchableOpacity>
            </ScrollView>

        </SafeAreaView >
    );
};
export default ApiCall;
const styles = StyleSheet.create({
    SearchBar: {
        backgroundColor: '#fff', width: 327, height: 40,
        marginLeft: 30, flexDirection: 'row',
        alignItems: 'center', justifyContent: 'center',
    },
    searchBarText: {
        width: '90%', fontSize: 14,
        fontWeight: '600', color: '#37251C'

    }

})