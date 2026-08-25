import {View, Text, Button} from 'react-native'

export default function Home(){
    return(
        <View>
            <Text>Seja bem-vindo</Text>

            <Button
                title='Sair'
                onPress={()=>alert('sair em construção')}
            />
        </View>
    )
}