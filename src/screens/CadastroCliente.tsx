import React, { useState } from "react";
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import axios from "axios";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";

const CadastroCliente: React.FC = () => {
    const [nome, setNome] = useState<string>('');
    const [telefone, setTelefone] = useState<string>('');
    const [endereco, setEndereco] = useState<string>('');
    const [foto, setFoto] = useState<any>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const abrirCamera = () => {
        const options = {
            mediaType: 'photo',
            includeBase64: false,
            maxHeight: 2000,
            maxWidth: 2000
        };

        launchCamera(options, response => {
            if (response.didCancel) {
                console.log('cancelado pelo usuario');
            } else if (response.error) {
                console.log('erro ao abrir a camera');
            } else {
                let fotoUri = response.uri || response.assets?.[0]?.uri;
                setFoto(fotoUri);
                console.log(fotoUri)
            }
        });
    }
    const cadastarProduto = async () => {
        try {
            const formData = new FormData();

            formData.append('nome', nome);
            formData.append('telefone', telefone);
            formData.append('endereco', endereco);
            formData.append('password', password);
            formData.append('email', email);
            formData.append('foto', {
                uri: foto,
                type: 'image/jpeg',
                name: new Date() + '.jpg'
            });

            const response = await axios.post('http:/10.137.11.217:8000/api/clientes', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
        } catch (error) {
            console.log(error);
        }
    }

    const selecionarImagen = () => {
        const options = {
            mediaType: 'photo',
            includeBase64: false,
            maxHeight: 2000,
            maxWidth: 2000
        };

        launchImageLibrary(options, (response) => {
            if (response.didCancel) {
                console.log('cancelado pelo usuário');
            } else if (response.error) {
                console.log('erro ao abrir a galeria');
            } else {
                let fotoUri = response.uri || response.assets?.[0]?.uri;
                setFoto(fotoUri)
            }
        })
    }
    return (
        <View style={styles.container}>

                <ScrollView showsVerticalScrollIndicator={false}>


            <Image source={require('../assets/images/logo.png')} style={styles.logo} />

        

            <View style={styles.card}>
                <TextInput style={styles.input}
                    placeholder="Nome"
                    placeholderTextColor="#FFFFFF"
                    value={nome}
                    onChangeText={setNome}
                />


                <TextInput style={styles.input}
                    placeholder="E-mail"
                    placeholderTextColor="#FFF"
                    value={email}
                    onChangeText={setEmail}
                />

                <TextInput style={styles.input}
                    placeholder="Telefone exp: (18) 9999-99999"
                    placeholderTextColor="#FFFFFF"
                    value={telefone}
                    onChangeText={setTelefone}
                />
                <TextInput style={styles.input}
                    placeholder="Endereço"
                    placeholderTextColor="#FFFFFF"
                    value={endereco}
                    onChangeText={setTelefone}
                />
                <TextInput style={styles.input}
                    placeholder="Senha"
                    placeholderTextColor="#FFFFFF"
                    value={password}
                    onChangeText={setPassword}
                />

                <View style={styles.alinhamentoImagemSelecionada}>
                    {foto ? <Image source={{ uri: foto }} style={styles.fotoSelecionada} /> : null}
                </View>

                <TouchableOpacity style={styles.imageButton}>
                    <Text style={styles.imageButtonText} onPress={selecionarImagen}>Selecionar Imagen</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.imageButton}>
                    <Text style={styles.imageButtonText} onPress={abrirCamera}>Tirar Foto</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button3}>
                    <Text style={styles.buttonText2} onPress={cadastarProduto}>Cadastrar Produto</Text>
                </TouchableOpacity>
            </View>


           


            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>CADASTRAR</Text>
            </TouchableOpacity>




            </ScrollView>
        </View>
    );
}


const styles = StyleSheet.create({
    buttonText2: {
        color: 'white',
        fontWeight: 'bold'
    },
    button3: {
        backgroundColor: 'black',
        padding: 1,
        borderRadius: 5,
        alignItems: 'center',
        marginBottom: 10
    },
    imageButton: {
        backgroundColor: 'red',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginBottom: 10
    },
    fotoSelecionada: {
        width: 200,
        height: 200,
        resizeMode: 'cover',
        borderRadius: 5,
        marginBottom: 10
    },
    alinhamentoImagemSelecionada: {
        alignItems: 'center'
    },
    login: {
        flexDirection: 'row',

    },
    logo2: {
        height: 70,
        width: 75,
        marginTop: -7,
        marginLeft: 30
    },
    login2: {
        height: 65,
        width: 50,

    },
    login3: {
        height: 60,
        width: 50,

    },
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#FFF'
    },
    logo: {
        width: 350,
        height: 200,
        marginBottom: 400
    },


    title: {
        marginTop: -400,
        color: 'black',
        fontSize: 30,
    },
    card: {
        backgroundColor: '#121212',
        width: 300,
        borderRadius: 10,
        padding: 20,
        elevation: 3,
        shadowColor: 'rgba(0,0,0,0.3',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        marginTop: -360
    },
    input: {

        marginBottom: 20,
        paddingHorizontal: 10,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: 'white'
    },
    button: {
        backgroundColor: '#FFF',
        height: 40,
        borderRadius: 8,
        marginTop: 20,
        width: 50,
        fontSize: 50
    },
    buttonText: {
        fontSize: 25,
        width: 190,
        color: 'black',
        marginLeft: -50
    },
    forgotPassword: {
        color: 'black',
        textAlign: 'center',

    },
})
export default CadastroCliente;