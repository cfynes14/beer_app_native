import React from 'react';
import { StyleSheet, View } from 'react-native';
import Card from '../Card/Card';
import { Beers } from '../../utils/interfaces';

interface RailInterface {
  // cardProps: Beers | undefined | (Beers | undefined)[];
  cardProps: Beers[];
}

const styles = StyleSheet.create({
  cardContainer: {},
});

const Rail = (props: RailInterface) => {
  const { cardProps } = props;
  if (cardProps[0]) {
    return (
      <View>
        <View style={styles.cardContainer}>
          {cardProps.map((prop: Beers) => (
            <Card
              id={prop.id}
              name={prop.name}
              tagline={prop.tagline}
              description={prop.description}
              image={prop.image_url}
              hops={prop.ingredients.hops}
              food_pairing={prop.food_pairing}
              abv={prop.abv}
              key={prop.id}
            />
          ))}
        </View>
      </View>
    );
  } else {
    return <h2>Sorry, no beer matching your query!</h2>;
  }
};

export default Rail;
