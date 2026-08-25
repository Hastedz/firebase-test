import{View, Text, TextInput, Button, Alert} from 'react-native'
import { useState } from 'react'

export default function Login(){
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    return(
        <View>
            <Text>LOGIN</Text>
            <TextInput
                placeholder ='email'
                value={email}
                onChangeText={setEmail}
                keyboardType='email-address'
                autoCaptalize='none'
            />

            <TextInput
                placeholder ='senha'
                value={senha}
                onChangeText={setSenha}
                secureTextEntry
            />
            <Button
                title='Acessar'
                onPress={()=>alert('Login em construção')}
            
            />
        </View>
    )
}