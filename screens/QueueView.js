import React from 'react'
import { View, Text } from 'react-native'
import {useSelector} from 'react-redux';

export default function QueueView() {
    const queue = useSelector(state => state.queue.songs);
    return (
        queue.map((song) => 

        <View key={song.title}>

            <Text style={{fontSize: 25}}>{`${song.title} - ${song.artist}`}</Text>
        </View>
    
        )
    )
}
