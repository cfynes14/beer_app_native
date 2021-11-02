import React from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
// import { StyleSheet, Link, Text } from 'react-router-dom';

import {Hop} from '../../utils/interfaces';

interface CardInterface {
  name: string;
  id: number;
  tagline: string;
  description: string;
  image: string | null | undefined;
  hops: Hop[];
  food_pairing: string[];
  abv: number;
}

const Card = (props: CardInterface) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Text style={styles.h3}>{props.name}</Text>
        <View style={styles.imageContainer}>
          {props.image ? (
            <Image style={styles.image} source={{uri: props.image}} />
          ) : (
            <Text style={styles.h4}>No Image </Text>
          )}
        </View>
        <Text style={styles.h4}>{props.abv}%</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 2,
    marginHorizontal: 3,
    alignItems: 'center',
    height: 200,
    width: 150,
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 5,
    flex: 1,
  },
  imageContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  h3: {color: 'white', fontFamily: 'IMFellEnglishSC-Regular', fontSize: 20},
  h4: {color: 'white', fontSize: 15},
  image: {
    flex: 1,
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
});

export default Card;
