import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from './components/header';
import TodoItem from './components/todo';
import AddTodo from './components/addTodo';

export default function App() {
	const [todos, setTodos] = useState([
		{ id: '1', text: 'Braid Hair'},
		{ id: '2', text: 'Sew the skirt' },
		{ id: '3', text: 'Create an app' }
	]);

	const pressHandler = (id) => {
		setTodos( prevTodos => {
			return prevTodos.filter( todo => todo.id != id );
		} );
	};

	const submitHandler = (text) => {
		if(text.length > 3) {
			setTodos( prevTodos => {
				return [
					{ id: Math.random().toString(), text: text },
					...prevTodos, 
				];
			});
		} else {
			Alert.alert('Error!!', 'Todos must be over 3 characters long', [
				{ 
					text: 'Understood',
					onPress: () => console.log('Alert closed')
				}
			])
		}
	}


	return (
		<TouchableWithoutFeedback onPress= {() => {
			Keyboard.dismiss();
		}}>
			<View style={styles.container}>
				{/*  Header */}
				<Header />
				{/* Form */}
				<AddTodo 
					submitHandler = { submitHandler }
				/>
				{/* Todo List */}
				<View style={styles.list}>
					<FlatList
						keyExtractor = { (item) => item.id}
						data={todos}
						renderItem = { ( {item} ) => (
							<TodoItem 
								item = { item } 
								pressHandler = { pressHandler }
							/>
						)}
					/>
				</View>
			</View>
		</TouchableWithoutFeedback>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
	list: {
		flex: 1,
		padding: 40,
		marginTop: 20,
	}
});
