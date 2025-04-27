import { View, Text } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { DrawerActions, StackActions } from '@react-navigation/native';
import { Stack, useNavigation } from 'expo-router';
//import { canGoBack } from 'expo-router/build/global-state/routing';

const StackLayout = () => {

  const navigation = useNavigation();

  const onHeaderLeftClick = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    } else {
      navigation.dispatch(DrawerActions.toggleDrawer());
    }
  };
  

  return (
    <Stack
      screenOptions={{
        //headerShown:false,
        headerShadowVisible: false,
        contentStyle: {
          backgroundColor: 'white',
        },
        headerLeft: ({ tintColor, canGoBack }) => (
          <Ionicons 
            name={ (canGoBack ?? false) ? 'arrow-back-outline' : 'grid-outline' }
            className='mr-5' 
            size={20}
            onPress={onHeaderLeftClick}
          />


        ),

      }}
    >

      <Stack.Screen
        name='home/index'
        options={{
          title: 'Home Screen',
        }}
      />
      <Stack.Screen
        name='products/index'
        options={{
          title: 'Productos Screen',
        }}
      />
      <Stack.Screen
        name='profile/index'
        options={{
          title: 'Profile Screen',
        }}
      />
      <Stack.Screen
        name='settings/index'
        options={{
          title: 'Settings Screen',
        }}
      />
    </Stack>
  );
};

export default StackLayout;