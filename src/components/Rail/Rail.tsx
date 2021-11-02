import React from 'react';
import {StyleSheet, View, Text, FlatList} from 'react-native';
import Card from '../Card/Card';
import {Beers} from '../../utils/interfaces';

interface RailInterface {
  // cardProps: Beers | undefined | (Beers | undefined)[];
  cardProps: Beers[];
}

const Rail = (props: RailInterface) => {
  const {cardProps} = props;
  if (cardProps[0]) {
    return (
      <View style={styles.cardContainer}>
        <FlatList
          horizontal
          style={styles.flatList}
          data={cardProps}
          keyExtractor={(item: Beers, index: number) => item.id.toString()}
          renderItem={({item}) => (
            <Card
              id={item.id}
              name={item.name}
              tagline={item.tagline}
              description={item.description}
              image={item.image_url}
              hops={item.ingredients.hops}
              food_pairing={item.food_pairing}
              abv={item.abv}
            />
          )}
        />
        {/* 
        <Card
          id={1234}
          name={'berr'}
          tagline={'derpy doo'}
          description={'burr'}
          image={'fdsaf'}
          hops={[
            {
              name: 'Fuggles',
              amount: {
                value: 25,
                unit: 'grams',
              },
              add: 'start',
              attribute: 'bitter',
            },
            {
              name: 'First Gold',
              amount: {
                value: 25,
                unit: 'grams',
              },
              add: 'start',
              attribute: 'bitter',
            },
            {
              name: 'Fuggles',
              amount: {
                value: 37.5,
                unit: 'grams',
              },
              add: 'middle',
              attribute: 'flavour',
            },
            {
              name: 'First Gold',
              amount: {
                value: 37.5,
                unit: 'grams',
              },
              add: 'middle',
              attribute: 'flavour',
            },
            {
              name: 'Cascade',
              amount: {
                value: 37.5,
                unit: 'grams',
              },
              add: 'end',
              attribute: 'flavour',
            },
          ]}
          food_pairing={[
            'Spicy chicken tikka masala',
            'Grilled chicken quesadilla',
            'Caramel toffee cake',
          ]}
          abv={43}
        />
        <Card
          id={1234}
          name={'berr'}
          tagline={'derpy doo'}
          description={'burr'}
          image={'fdsaf'}
          hops={[
            {
              name: 'Fuggles',
              amount: {
                value: 25,
                unit: 'grams',
              },
              add: 'start',
              attribute: 'bitter',
            },
            {
              name: 'First Gold',
              amount: {
                value: 25,
                unit: 'grams',
              },
              add: 'start',
              attribute: 'bitter',
            },
            {
              name: 'Fuggles',
              amount: {
                value: 37.5,
                unit: 'grams',
              },
              add: 'middle',
              attribute: 'flavour',
            },
            {
              name: 'First Gold',
              amount: {
                value: 37.5,
                unit: 'grams',
              },
              add: 'middle',
              attribute: 'flavour',
            },
            {
              name: 'Cascade',
              amount: {
                value: 37.5,
                unit: 'grams',
              },
              add: 'end',
              attribute: 'flavour',
            },
          ]}
          food_pairing={[
            'Spicy chicken tikka masala',
            'Grilled chicken quesadilla',
            'Caramel toffee cake',
          ]}
          abv={43}
        />
        <Card
          id={1234}
          name={'berr'}
          tagline={'derpy doo'}
          description={'burr'}
          image={'fdsaf'}
          hops={[
            {
              name: 'Fuggles',
              amount: {
                value: 25,
                unit: 'grams',
              },
              add: 'start',
              attribute: 'bitter',
            },
            {
              name: 'First Gold',
              amount: {
                value: 25,
                unit: 'grams',
              },
              add: 'start',
              attribute: 'bitter',
            },
            {
              name: 'Fuggles',
              amount: {
                value: 37.5,
                unit: 'grams',
              },
              add: 'middle',
              attribute: 'flavour',
            },
            {
              name: 'First Gold',
              amount: {
                value: 37.5,
                unit: 'grams',
              },
              add: 'middle',
              attribute: 'flavour',
            },
            {
              name: 'Cascade',
              amount: {
                value: 37.5,
                unit: 'grams',
              },
              add: 'end',
              attribute: 'flavour',
            },
          ]}
          food_pairing={[
            'Spicy chicken tikka masala',
            'Grilled chicken quesadilla',
            'Caramel toffee cake',
          ]}
          abv={43}
        /> */}
      </View>
    );
  } else {
    return <Text>Sorry, no beer matching your query!</Text>;
  }
};

const styles = StyleSheet.create({
  cardContainer: {
    height: 700,
    width: 1000,
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
  },
  flatList: {
    height: 700,
    width: 1000,
    // flex: 1,
    // flexDirection: 'row',
    // justifyContent: 'space-evenly',
  },
});

export default Rail;
