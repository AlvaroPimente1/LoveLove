import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from '../Pages/Home/Home';
import Profile from '../Pages/Profile';

const Drawer = createDrawerNavigator();

export default function MyDrawer() {
    return (
        <Drawer.Navigator
            screenOptions={{
                headerStyle: { backgroundColor: '#1a8fff' },
                headerTintColor: '#fff',
                headerTitleStyle: { fontWeight: 'bold'},
                drawerStyle:{ backgroundColor: '#1a8fff' },
                drawerActiveTintColor: '#000',
                drawerInactiveTintColor: '#fff'
            }}
        >
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Profile" component={Profile} />
        </Drawer.Navigator>
    );
}