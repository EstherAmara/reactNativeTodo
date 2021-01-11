import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';

const AddTodo = ( { submitHandler } ) => {
    const [text, setText] = useState();
    //when changeHandler is fired, it automatically passes the value of the text input to it
    const changeHandler = (val) => {
        setText(val);
    };

    return (
        <View>
            <TextInput 
                style={styles.input}
                placeholder='new todo...'
                onChangeText= {changeHandler}
            />
            <Button
                onPress={ () => submitHandler(text) }
                title='Add Todo'
                color='coral'
            />
        </View>
    );
}

export default AddTodo;

const styles = StyleSheet.create({
    input: {
        marginBottom: 15,
        paddingHorizontal: 5,
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    }
})