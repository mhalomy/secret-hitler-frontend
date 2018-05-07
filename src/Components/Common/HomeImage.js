import React from 'react';
import { Image } from 'react-native';
import { CardSection } from './CardSection';

const HomeImage = (props) => {
  return (
    <CardSection>
      <Image
        style={styles.imageStyle}
        source={{uri: imageUrl}}
      />
    </CardSection>
  );
};

const imageUrl = 'https://lh3.googleusercontent.com/Je1l2lhriY7bJ6EfoMWW48FI2-9WSV7DM9i_xCYJXYMI1BtImqs-aRVz-thTOMccCh5qI0NBrMnv4ybudwlj=w1523-h904';
const styles = {
  imageStyle: {
    height: 400,
    flex: 1,
    width: null,
    marginTop: 30,
    marginBottom: 30
  }
};

export { HomeImage };