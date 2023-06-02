import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import Task1 from "../screens/Task1";
import Task2 from "../screens/Task2";
import Task3 from "../screens/Task3";
import Task4 from "../screens/Task4";

const Tab = createBottomTabNavigator();

function MyTab () {
    return (
        <Tab.Navigator screenOptions={{
            tabBarStyle: { backgroundColor: '#D35400'},
            }}>
            <Tab.Screen name='Contador' component={Task1}
            options={{tabBarIcon:({color, size}) =>
                <MaterialCommunityIcons name="counter" size={24} color="black" />
                }}
            />
            <Tab.Screen name='From' component={Task2}
                options={{tabBarIcon:({color, size}) =>
                <MaterialCommunityIcons name="book-account" size={24} color="black" />
                }}
            />
            <Tab.Screen name='API' component={Task3}
                options={{tabBarIcon:({color, size}) =>
                <MaterialCommunityIcons name="text-account" size={24} color="black" />
                }}
            />
            <Tab.Screen name='Películas' component={Task4}
            options={{tabBarIcon:({color, size}) =>
                <MaterialCommunityIcons name="video-account" size={24} color="black" />
                }}
            />
        </Tab.Navigator>
    )
}

export default function ButtonTab () {
    return (
        <NavigationContainer>
            <MyTab/>
        </NavigationContainer>
    )
}