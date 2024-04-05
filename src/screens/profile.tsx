import AsyncStorage from '@react-native-async-storage/async-storage';
import {useEffect, useState} from 'react';
import {Button, ScrollView, Text, TextInput, View} from 'react-native';
import MyTextInput from '../components/mytextinput';
import {useProfileContext} from '../context/profilecontext';

const Profile = () => {
  const {profileData, updateProfileData} = useProfileContext();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  useEffect(() => {
    setFirstName(profileData?.firstName);
    setLastName(profileData?.lastName);
  }, [profileData]);

  const saveData = () => {
    updateProfileData({firstName, lastName});
    //AsyncStorage.setItem('profile', JSON.stringify({firstName, lastName}));
  };

  return (
    <ScrollView style={{padding: 16}}>
      <MyTextInput
        label="First Name"
        value={firstName}
        onChange={(newValue: string) => setFirstName(newValue)}
      />
      <MyTextInput
        label="Last Name"
        value={lastName}
        onChange={(newValue: string) => setLastName(newValue)}
      />
      <Button onPress={saveData} title="Save" />
    </ScrollView>
  );
};

export default Profile;
