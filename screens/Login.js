import{View, Text, TextInput, Button, Alert} from 'react-native'
import { useState } from 'react'

import { entrar } from '../services/auth'

export default function Login(navigation){
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    async function realizarLogin() {
        if(!email || !senha){
            alert('Preencha todos os campos!')
            retrun
        }

        try {
            await entrar(email, senha)
            navigation.navigate('Home')
        } catch(error){
            alert('Email ou senha incorretos')
            console.log(error)
        }
    }

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
                onPress={realizarLogin}
            
            />
            <Button
                title='Criar Conta'
                onPress={()=>navigation.navigate('Cadastro  ')}
            
            />
        </View>
    )
}