import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const TodoItem = ( { item, pressHandler } ) => {
    return (
        <TouchableOpacity onPress={ () => pressHandler(item.id) }>
            <View style={styles.item}>
                <MaterialIcons name='delete' size={18} color='#333' />
                <Text style={styles.text}>
                    { item.text }
                </Text>
            </View>
        </TouchableOpacity>
    );
}

export default TodoItem;

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        padding: 16,
        marginTop: 16,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: 'solid',
        borderRadius: 9
    },
    text: {
        marginLeft: 10
    }
})