/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  View,
  Text,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator} from '@react-navigation/stack'

const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()

function Home() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
      <MyTabs />
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

// function Root({navigation}) {
  
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name="Feed" component={Feed} />
//       <Stack.Screen name="Messages" component={Messages} />
//     </Stack.Navigator>
//   );
// }

export default App = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
      
      {/* <StatusBar barStyle="dark-content" />

      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}>
          <Stack.Screen name="Home" component={HomeScreen} 
            options={{ headerTitle: props => <LogoTitle {...props} />,
              headerRight: () => (
                <Button
                  onPress={() => alert('This is a button!')}
                  title="Info"
                  color="#fff"
                />
              ),
            }}/>
          <Stack.Screen name="Details" component={DetailsScreen} initialParams={{ itemId: 42 }} 
            options={({ route }) => ({ title: route.params.name })}/>
          <Stack.Screen name="CreatePost" component={CreatePostScreen}
            options={{
              title: 'Post',
              headerStyle: {
                backgroundColor: '#f4511e',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}/>
        </Stack.Navigator>
      </NavigationContainer> */}
        
    </>
  );
};

// function HomeScreen({navigation, route}) {
//   React.useEffect(() => {
//     if(route.params?.post){}
//   }, [route.params?.post])

//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

//       <Tab.Navigator>
//         <Tab.Screen name="Details" component={DetailsScreen} />
//         <Tab.Screen name="CreatePostScreen" component={CreatePostScreen} />
//       </Tab.Navigator>
      
//       <Text>Home Screen</Text>
//       <Button
//         title="Create post"
//         onPress={() => navigation.navigate('CreatePost')}
//       />
//       <Text style={{ margin: 10 }}>Post: {route.params?.post}</Text>
    
//       <Button
//         title="Go to Details"
//         onPress={() => navigation.navigate('Details', {
//           itemId: 86,
//           otherParam: 'oParam'
//         })}
//       />
//     </View>
//   )
// }

// function CreatePostScreen({navigation, route}) {
//   const [postText, setPostText] = React.useState('')
//   return (
//     <>
//       <TextInput
//         multiline
//         placeholder="What's on your mind?"
//         style={{ height: 200, padding: 10, backgroundColor: 'white' }}
//         value={postText}
//         onChangeText={setPostText}
//       />
//       <Button
//         title="Done"
//         onPress={() => {
//           navigation.navigate('Home', { post: postText });
//         }}
//       />
//     </>
//   )
// }

// function DetailsScreen({route, navigation}) {
//   const {itemId} = route.params
//   const {otherParam} = route.params
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Details Screen</Text>
//       <Text>itemId : {JSON.stringify(itemId)}</Text>
//       <Text>otherParam : {JSON.stringify(otherParam)}</Text>
//       <Button title="Go Details"
//         onPress={() =>
//         navigation.push('Details', {
//           itemId: Math.floor(Math.random() * 100),
//         })
//       } />
//       <Button title="Go back" onPress={() => navigation.goBack()} />
//       <Button
//         title="Go back to first screen in stack"
//         onPress={() => navigation.popToTop()}
//       />
//       <Button
//         title="Update the title"
//         onPress={() => navigation.setOptions({ title: 'Updated!' })}
//       />
//     </View>
//   );
// }

// function LogoTitle() {
//   return (
//     <Image
//       style={{ width: 50, height: 50 }}
//       // source={require('img/ic_launcher_round.png')}
//     />
//   );
// }
