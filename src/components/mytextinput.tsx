import {Text, TextInput, View} from 'react-native';

const MyTextInput = (props: any) => {
  return (
    <View style={{marginVertical: 8}}>
      <Text>{props.label}</Text>
      <TextInput
        style={{
          backgroundColor: 'white',
          borderWidth: 1,
          borderColor: '#cdcdcd',
          borderRadius: 0.5,
          paddingHorizontal: 8,
        }}
        value={props.value}
        onChangeText={props.onChange}></TextInput>
    </View>
  );
};

export default MyTextInput;
