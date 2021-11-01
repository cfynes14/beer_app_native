// import { RouteComponentProps, withRouter, Link } from "react-router-dom";
import React from 'react';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import {
  useFonts,
  IMFellEnglishSC_400Regular,
} from '@expo-google-fonts/im-fell-english-sc';
//components
import Details from './components/Details/Details';
import Rail from './components/Rail/Rail';
import Filters from './components/Filters/Filters';
//functions
import Sanitizer from './utils/sanitizer';
import hopFinder from './utils/hopFinder';
//interfaces
import { Beers } from './utils/interfaces';
import filterFunction from './utils/filterFunction';

//dummy data
import data from '../data';

// import beerPic from './assets/beerPic.png';

// import "./details.scss";

type PathParamsType = {
  id: string;
};

// type PropsType = RouteComponentProps<PathParamsType> & {
//   goHome: () => void
// }

export default function App() {
  const [allBeer, setAllBeer] = useState<Beers[]>([]);
  const [currentBeer, setCurrentBeer] = useState<Beers[]>([]);
  const [isHome, setIsHome] = useState<boolean>(true);
  const [abvFilterVal, setAbvFilter] = useState<string>('0');
  const [hopFilterVal, setHopFilter] = useState<string | null>(null);
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
    console.log('useffect');
    getBeer();
  }, []);

  //reset page
  const home = () => {
    setCurrentBeer([]);
    setAbvFilter('0');
    setHopFilter(null);
    setIsHome(true);
  };

  const handleClick = async () => {
    const json = await filterFunction(
      allBeer,
      Sanitizer.sanitizeAbv(abvFilterVal),
      Sanitizer.sanitizeBeerType(hopFilterVal),
    );
    let jsonB = json as Beers[];

    if (!json || json === undefined) {
      return;
    } else {
      setCurrentBeer(jsonB);
    }
    setIsHome(false);
  };

  return (
    // <Filters />
    <View>
      <Text>HIII</Text>
      <Text>Beer Selector</Text>
      {/* <Rail cardProps={allBeer} /> */}
    </View>
  );
}
