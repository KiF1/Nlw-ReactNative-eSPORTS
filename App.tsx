import {StatusBar} from 'react-native';
import { Background } from './src/components/Background';
import { useFonts, Inter_400Regular, Inter_600SemiBold, Inter_700Bold, Inter_900Black} from '@expo-google-fonts/inter';
import { Loading } from './src/components/Loading';
import { Routes } from './src/routes';
import './src/components/Services/Notification';
import { getNotification } from './src/components/Services/getNotification';
import { useRef, useEffect } from 'react';
import { Subscription } from 'expo-modules-core';

export default function App() {
  const [fontsLoade] = useFonts({
    Inter_400Regular, Inter_600SemiBold, Inter_700Bold, Inter_900Black
  })

  const getNotificationListener = useRef<Subscription>();
const responseNotificationListener = useRef<Subscription>();

useEffect(()=>{
  getNotification();
});


  return (
<Background>
  <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
  {fontsLoade ? <Routes /> : <Loading/>}
  </Background>
  );
}
