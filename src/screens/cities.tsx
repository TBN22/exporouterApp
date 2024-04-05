import {useEffect, useState} from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';

const Cities = ({route}: any) => {
  const {countryId} = route.params;
  const [cities, setCities] = useState([]);

  useEffect(() => {
    if (countryId)
      fetch(`https://api.eatachi.co/api/city/bycountry/${countryId}`)
        .then((response: any) => response.json())
        .then((data: any) => setCities(data))
        .catch(err => console.log(err))
        .finally(() => console.log('done'));
  }, [countryId]);

  return (
    <SafeAreaView>
      <ScrollView
        style={{height: '100%'}}
        contentInsetAdjustmentBehavior="automatic">
        <View style={{margin: 16}}>
          {cities.map((c: any, i: number) => (
            <Text key={`key_${i}`} style={{fontSize: 16, paddingVertical: 8}}>
              {c.Name}
            </Text>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Cities;
