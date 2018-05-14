import { AsyncStorage} from 'react-native';

export const readStorage = async (key) => {
  try {
    let val = await AsyncStorage.getItem(key);
    if (val !== null) {
      let readVal = JSON.parse(val);
      return readVal;}
    else {
      console.info(`${key} not found on disk`);
      return;
    }
  } catch (error) {
    console.warn("AsyncStorage error: ", error.message);
  }
}

export const writeStorage = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value))
  } catch (error) {
    console.error(" AsyncStorage error", error.message);
  }
}

