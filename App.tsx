import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Onboarding from './src/containers/Onboarding';
import {RootStackParamList} from './src/types/stack';
const RootStack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    // <SafeAreaView style={styles.AndroidSafeArea}>
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen
          name="Onboarding"
          component={Onboarding}
          options={{
            headerShown: false,
          }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
    // </SafeAreaView>
  );
};

export default App;
