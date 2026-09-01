import {View, Text, Button} from 'react-native'

import { sair } from '../services/auth'
import { auth } from '../config/firebase'

export default function Home(navigation){
    async function realizarLogout() {
        await sair()
        navigation.navigate('Home')
    }
    return(
        <View>
            <Text>Seja bem-vindo</Text>
            <Text>Usuario: {auth.currentUser?.email}</Text>

            <Button
                title='Sair'
                onPress={realizarLogout}
            />
        </View>
    )
}