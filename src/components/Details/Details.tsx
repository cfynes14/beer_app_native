import React from 'react';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import {
  useFonts,
  IMFellEnglishSC_400Regular,
} from '@expo-google-fonts/im-fell-english-sc';
// import { RouteComponentProps, withRouter, Link } from 'react-router-dom';
import { Beers } from '../../utils/interfaces';

import './details.scss';

type PathParamsType = {
  id: string;
};

// type PropsType = RouteComponentProps<PathParamsType> & {
//   allBeer: Beers[];
//   goHome: () => void;
// };

const Details = (props: PropsType) => {
  const { goHome, allBeer } = props;

  const [loading, setLoading] = useState(true);
  const [beer, setBeer] = useState<Beers>({} as Beers);

  const [fontsLoaded] = useFonts({
    IMFellEnglishSC_400Regular,
  });

  const getSingleBeer = async () => {
    const res = await fetch(
      `https://api.punkapi.com/v2/beers/${13}`,

      // ${props.match.params.id}
    );
    const json = await res.json();
    setBeer(json[0]);
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    getSingleBeer();
  }, []);

  const {
    id,
    name,
    tagline,
    description,
    image_url,
    abv,
    ibu,
    ingredients,
    food_pairing,
  } = beer;

  console.log(image_url);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      fontSize: 30,
      fontFamily: 'IMFellEnglishSC_400Regular',
    },
    image: {
      marginVertical: 15,
      marginHorizontal: 50,
      width: 100,
      height: 400,
    },
    textBox: {},
    description: {
      marginHorizontal: 10,
    },
    foodPairings: {
      // marginVertical: 20,
      marginHorizontal: 10,
    },
    listHeader: {
      marginVertical: 20,
      fontWeight: 'bold',
    },
    listItem: {},
  });

  if (loading || !fontsLoaded) {
    return <Text>Loading...</Text>;
  }
  return (
    <View style={styles.container}>
      {/* onClick={goHome} */}
      <Text style={styles.title}>Beer Selector</Text>
      {/* <Link to="/">
          <p onClick={goHome}>Return to home</p>
        </Link>
        <Link to="/" style={{ textDecoration: "none" }}>
          <h1 onClick={goHome}>Beer Selector</h1>
        </Link> */}
      <Text>{name}</Text>
      <Text>{tagline}</Text>
      <Image style={styles.image} source={{ uri: image_url }} />
      <Text style={styles.listHeader}>{abv} %</Text>
      <View style={styles.textBox}>
        <Text style={styles.description}>{description}</Text>
        <View style={styles.foodPairings}>
          <Text style={styles.listHeader}>Recommended Food pairings: </Text>
          <View style={styles.foodPairings}>
            <Text style={styles.listItem}>{`\u2022 ${food_pairing[0]}`}</Text>
            <Text style={styles.listItem}>{`\u2022 ${food_pairing[1]}`}</Text>
            <Text style={styles.listItem}>{`\u2022 ${food_pairing[2]}`}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default withRouter(Details);
