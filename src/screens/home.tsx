import Profile from './profile';
import Blog from './blog';
import {Text, View} from 'react-native';
import {useProfileContext} from '../context/profilecontext';

const Home = () => {
  const {profileData} = useProfileContext();

  return (
    <View style={{padding: 16}}>
      <Text style={{fontSize: 20, fontWeight: 'bold'}}>
        Welcome {profileData?.lastName}, {profileData?.firstName}
      </Text>
    </View>
  );
};

export default Home;
