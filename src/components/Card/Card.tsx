import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
// import { StyleSheet, Link, Text } from 'react-router-dom';

import { Hop } from '../../utils/interfaces';

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
  const styles = StyleSheet.create({
    h3: {},
    h4: {},
    image: {
      height: 100,
      width: 50,
    },
  });

  return (
    // <Link
    //   to={`/details/${props.id}`}
    //   className="card"
    //   style={{ textDecoration: "none" }}
    // >
    <View>
      <Text style={styles.h3}>{props.name}</Text>
      {props.image ? (
        <Image style={styles.image} source={{ uri: props.image }} />
      ) : (
        <Text style={styles.h4}>No Image </Text>
      )}
      <Text style={styles.h4}>{props.abv}%</Text>
    </View>
    // </Link>
  );
};

export default Card;
