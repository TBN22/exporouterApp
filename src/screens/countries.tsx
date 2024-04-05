import {useEffect, useState} from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';

const Countries = ({navigation}: any) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch('https://api.eatachi.co/api/country')
      .then((response: any) => response.json())
      .then((data: any) => setCountries(data))
      .catch(err => console.log(err))
      .finally(() => console.log('done'));
  }, []);

  const showCities = (countryId: number) => {
    navigation.navigate('cities', {
      countryId: countryId,
    });
  };

  return (
    <SafeAreaView>
      <ScrollView
        style={{height: '100%'}}
        contentInsetAdjustmentBehavior="automatic">
        <View style={{margin: 16}}>
          {countries.map((c: any, i: number) => (
            <Text
              key={`key_${i}`}
              style={{fontSize: 16, paddingVertical: 8}}
              onPress={() => showCities(c.CountryId)}>
              {c.Name}
            </Text>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Countries;
