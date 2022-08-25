import React from 'react';
import { View, FlatList, TouchableOpacity, Image, Text, StyleSheet } from 'react-native';

import {useRequest} from '../hooks/useRequest';

export const Story = () => {
    const {data} = useRequest();

    return (
        <View style={styles.container}>
            <View style={styles.containerMyStory}>
                <View style={styles.myPhoto}/>
                <Text style={styles.textMyStory}>Seu Story</Text>
            </View>

            <FlatList 
                data={data}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => item.id}
                renderItem={({item}) => <ListStorys item={item}/>}
            />
        </View>
    );
};

const ListStorys = ({item}) => {
    return (
        <View>
            <View style={styles.containerStory}>
                <TouchableOpacity>
                    <Image style={styles.image} source={{uri: item.avatar_url}} />
                </TouchableOpacity>
                <Text numberOfLines={1}>{item.login}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingTop: 10,
        flexDirection: 'row',
        backgroundColor: '#fff',
    },
    myPhoto: {
        width: 70,
        height: 70,
        borderRadius: 100,
        backgroundColor: '#000',
    },
    textMyStory: {
        textAlign: 'center',
    },
    containerMyStory: {
       marginHorizontal: 15,
    },  
    containerStory: {
        width: 65,
        paddingVertical: 4,
        marginHorizontal: 5,
        alignItems: 'center',
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 100,
        borderWidth: 2,
        borderColor: '#ff4411',
    },
});
