import { View, Text } from "react-native"
import { Contact } from "../icons"
const Home = () => {
    return (
        <View className='bg-purple-600 flex-1 justify-center items-center'>
            <Contact size={25} fill="none" />
            <Text>Home component!</Text>
        </View>
    )
}

export default Home