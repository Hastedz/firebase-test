import{View, Text, TextInput, Button, Alert} from 'react-native'
import { useState } from 'react'

import { cadastrar } from '../services/auth'


export default function Cadastro(){
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    async function realizarCadastro(navigation) {
        if(!email || !senha){
            alert('Preencha todos os campos')
            return
        }

        try{
            await cadastrar(email,senha)
            alert('Usuario Cadastrado!')
            navigation.navigate('Login')

        } catch(error){
            alert('Não foi possivel realizar o cadastro')
            console.log(error)
        }

    }

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
                onPress={realizarCadastro}
            />

            <Button
                title='Já tem conta? Acesse'
                onPress={()=>navigation.navigate('Login')}
            />

        </View>
    )
}