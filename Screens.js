import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

// screens
import AboutScreen from "./screens/About"
import HomeScreen from "./screens/Home"
import ContactScreen from "./screens/Contact"
import ProjectScreen from "./screens/Project"
import SkillScreen from "./screens/Skill"

// icons

import { Home, Info, Skill, Project, Contact } from './icons';


const Screens = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                headerShown: false

            }}
        >
            <Tab.Screen
                name="home"
                component={HomeScreen}
                options={{
                    headerTitle: 'Anasayfa',
                    tabBarIcon: ({ focus, color, size }) => (
                        <Home size={size} fill={color} />
                    )
                }}
            />
            <Tab.Screen
                name="about"
                component={AboutScreen}
                options={{
                    headerTitle: 'about page',
                    tabBarIcon: ({ focus, color, size }) => (
                        <Info size={size} fill="none" />
                    )
                }}
            />
            <Tab.Screen
                name="skill"
                component={SkillScreen}
                options={{
                    headerTitle: 'skill page',
                    tabBarIcon: ({ focus, color, size }) => (
                        <Skill size={size} fill="none" />
                    )
                }}
            />
            <Tab.Screen
                name="project"
                component={ProjectScreen}
                options={{
                    headerTitle: 'project page',
                    tabBarIcon: ({ focus, color, size }) => (
                        <Project size={size} fill="none" />
                    )
                }}
            />
            <Tab.Screen
                name="contact"
                component={ContactScreen}
                options={{
                    headerTitle: 'contact page',
                    tabBarIcon: ({ focus, color, size }) => (
                        <Contact size={size} fill="none" />
                    )
                }}
            />

        </Tab.Navigator>
    )
}

export default Screens