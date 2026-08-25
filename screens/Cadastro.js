import{View, Text, TextInput, Button, Alert} from 'react-native'
import { useState } from 'react'


export default function Cadastro(){
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    return(
        <View>
            <Text>Cadastro</Text>
            <TextInput
                placeholder='email'
                value={email}
                onChangeText={setEmail}
                keyboardType='email-address'
                autoCapitalize='none'
            />

            <TextInput
                placeholder ='senha'
                value={senha}
                onChangeText={setSenha}
                secureTextEntry
            
            />

            <Button
                title='Acessar'
                onPress={()=>alert('Cadastro em construção')}
            />

        </View>
    )
}