import { View ,Text , Button} from "react-native";
import React from "react";
import { useRouter } from "expo-router";

export default function About()
{
    const router = useRouter();
    return(
        <View> 
            <Text>About Page</Text> 
           <Button onPress={() => router.back()} title="Go Back"></Button>
            <Text>Go to About Page</Text>
        </View>
            
         
    )
}