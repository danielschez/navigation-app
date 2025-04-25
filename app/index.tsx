import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import '../global.css'
import { Link, Redirect } from 'expo-router';

const App = () => {

  //return <Redirect href='/(stack)/home' />
  return <Redirect href='/tabs' />

 // return (
 //   <SafeAreaView>
 //     <View className='mt-6 mx-2.5'>

        {/* Opción usando Tailwind */}
  //      <Text className='text-3xl text-primary font-work-black'>Hola Mundo (Black)</Text>
  //      <Text className='text-3xl text-secundary-100 font-work-medium'>Hola Mundo (Medium)</Text>
  //      <Text className='text-3xl text-tertiary font-work-light'>Hola Mundo (Light)</Text>

  //      <Link href="/products">Prodcutos</Link>
        
  //    </View>
  //  </SafeAreaView>
  //);
};

export default App;
