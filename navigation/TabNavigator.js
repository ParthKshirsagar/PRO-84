import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feed from '../screens/Feed';
import CreatePost from '../screens/CreatePost';

const Tab = createMaterialBottomTabNavigator();
const MaterialBottomTabNavigator = () => {
    return(
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focussed, color, size }) => {
                    let iconName;
                    if(route.name === 'Feed'){
                        iconName = focussed ? 'book' : 'book-outline';
                    } else if(route.name === 'Create Post'){
                        iconName = focussed ? 'create' : 'create-outline';
                    }
                    return <Ionicons name={iconName} color={color} size={size} />
                },
                headerShown: false
            })}
            tabBarOptions={{
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray'
            }}
        >
            <Tab.Screen name='Feed' component={Feed} />
            <Tab.Screen name='Create Post' component={CreatePost} />
        </Tab.Navigator>
    )
}

export default MaterialBottomTabNavigator;