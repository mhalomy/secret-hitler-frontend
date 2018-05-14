import { AsyncStorage} from 'react-native';

export const readStorage = (key) => {
  try {
    let val = await AsyncStorage.getItem(key);
    if (val !== null) return val;
    else {
      console.info(`${key} not found on disk`);
      return;
    }
  } catch (error) {
    console.warn("AsyncStorage error: ", error.message);
  }
}

export const writeStorage = (key, value) => {
  try {
    await AsyncStorage.setItem(key, value)
  } catch (error) {
    console.error(" AsyncStorage error", error.message);
  }
}

