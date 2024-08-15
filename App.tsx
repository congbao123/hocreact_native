import React, { useState } from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
 
  useColorScheme,
  
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import FixedDimensionsBasics from './android/app/src/FixedDimesionBasics';
import FlexDimensionsBasics2 from './android/app/src/FlexDimensionsBasics2';
import Flex from './android/app/src/Flex';
import FlexDirectionBasics from './android/app/src/FlexDirectionBasics';

;

function App(): React.JSX.Element {

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex:1,
  };
   

  return (
    <SafeAreaView style={[backgroundStyle]}>
     <StatusBar
       barStyle={ isDarkMode ? 'lighter-content':'darker-content'}
       backgroundColor={backgroundStyle.backgroundColor}
     />
      {/* <FixedDimensionsBasics/> */}
      <FlexDimensionsBasics2/>
      {/* <Flex/> */}
      <FlexDirectionBasics/>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center',
  },
  form: {
    width: '80%',
    padding: 20,
    borderRadius: 10,
    backgroundColor: Colors.white,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#007BFF',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
 
});

export default App;
