/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {useState, useEffect} from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Image,
  useColorScheme,
  View,
} from 'react-native';

//fonts
import {
  useFonts,
  IMFellEnglishSC_400Regular,
} from '@expo-google-fonts/im-fell-english-sc';
//components
import Details from './src/components/Details/Details';
import Rail from './src/components/Rail/Rail';
import Filters from './src/components/Filters/Filters';
//interfaces
import {Beers} from './src/utils/interfaces';
//additional
import Sanitizer from './src/utils/sanitizer';
import hopFinder from './src/utils/hopFinder';
import data from './data';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => Node = () => {
  const [allBeer, setAllBeer] = useState<Beers[]>([]);
  const [currentBeer, setCurrentBeer] = useState<Beers[]>([]);
  const [isHome, setIsHome] = useState<boolean>(true);
  const [abvFilterVal, setAbvFilter] = useState<string>('');
  const [hopFilterVal, setHopFilter] = useState<string>('');
  const [hops, setHops] = useState<string[]>([]);

  const getBeer = async () => {
    // const res = await fetch(`https://api.punkapi.com/v2/beers?per_page=80`);
    // const json = await res.json();
    console.log('setting beer');
    console.log(data);
    setAllBeer(data);

    // setHops(hopFinder(json));
  };

  //get all beers
  useEffect(() => {
    console.log('useEffect');
    getBeer();
  }, []);

  return (
    <View>
      <Text>Hello World!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
