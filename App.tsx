/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {useState, useEffect} from 'react';

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

const App = () => {
  const [allBeer, setAllBeer] = useState<Beers[]>([]);
  const [currentBeer, setCurrentBeer] = useState<Beers[]>([]);
  const [isHome, setIsHome] = useState<boolean>(true);
  const [abvFilterVal, setAbvFilter] = useState<string>('');
  const [hopFilterVal, setHopFilter] = useState<string>('');
  const [hops, setHops] = useState<string[]>([]);

  const getBeer = async () => {
    const res = await fetch(`https://api.punkapi.com/v2/beers?per_page=80`);
    const json = await res.json();
    // console.log('setting beer');
    // console.log(data);
    // setAllBeer(data);
    setAllBeer(json);

    // setHops(hopFinder(json));
  };

  //get all beers
  useEffect(() => {
    console.log('useEffect');
    getBeer();
    console.log(data);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Beer Selector</Text>
      <Rail cardProps={allBeer} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  title: {
    marginHorizontal: 325,
    fontFamily: 'IMFellEnglishSC-Regular',
    fontSize: 50,
  },
});

export default App;
