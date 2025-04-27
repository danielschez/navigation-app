import { View, Text, SafeAreaView } from 'react-native';
import React from 'react';
import { DrawerActions } from '@react-navigation/native';
import { Link, router, useNavigation } from 'expo-router'
import CustomButtom from 'components/shared/CustomButtom'

const HomeScreen = () => {

  const navigation = useNavigation();

  const onToggleDrawer = () => {
    navigation.dispatch( DrawerActions.toggleDrawer);
  }

  return (
    <SafeAreaView>
      <View className="px-10 mt-5">

        <CustomButtom className='mb-2' color='primary' 
          onPress={()=> router.push('/products')}>
          Productos
        </CustomButtom>

        <CustomButtom className='mb-2' color='secundary' 
          onPress={()=> router.push('/profile')}>
          Profile
        </CustomButtom>

        <CustomButtom className='mb-2' color='tertiary' 
          onPress={()=> router.push('/settings')}>
          Ajustes
        </CustomButtom>

        <Link href="/products" asChild>
          <CustomButtom variant='text-only' className='mb-10' color='primary'>Productos</CustomButtom>
        </Link>

        <CustomButtom onPress={onToggleDrawer}>Abrir Menú</CustomButtom>

       {/*  <Link className='mb-5' href='/products'>
          Productos{''}
        </Link>
        <Link className='mb-5' href='/profiles'>
          Perfil{''}
        </Link>
        <Link className='mb-5' href='/settings'>
          Ajustes{''}
        </Link> */}
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen;