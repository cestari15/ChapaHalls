import React from "react";
import { View, Text, StyleSheet, FlatList, Touchable, TouchableOpacity, StatusBar, Image } from "react-native";

interface lanches {
    id: string;
    nome: string;
    preco: number;
    Ingredientes: string;
    image: any;
}

const dados: lanches[] = [
    { id: '1', nome: 'X-tudo', preco: 30.00, Ingredientes: "pão, queijo, 3 hamburguers, 5 ovo, 4 salsicha , salada", image: require('./assets/images/big.jpg') },
    { id: '2', nome: 'X-tudo', preco: 30.00, Ingredientes: "pão, queijo, 3 hamburguers, 5 ovo, 4 salsicha , salada", image: require('./assets/images/big.jpg') },
    { id: '3', nome: 'X-tudo', preco: 30.00, Ingredientes: "pão, queijo, 3 hamburguers, 5 ovo, 4 salsicha , salada", image: require('./assets/images/big.jpg') },
    { id: '4', nome: 'X-tudo', preco: 30.00, Ingredientes: "pão, queijo, 3 hamburguers, 5 ovo, 4 salsicha , salada", image: require('./assets/images/big.jpg') },
    { id: '5', nome: 'X-tudo', preco: 30.00, Ingredientes: "pão, queijo, 3 hamburguers, 5 ovo, 4 salsicha , salada", image: require('./assets/images/big.jpg') },
    { id: '6', nome: 'X-tudo', preco: 30.00, Ingredientes: "pão, queijo, 3 hamburguers, 5 ovo, 4 salsicha , salada", image: require('./assets/images/big.jpg') },
    { id: '7', nome: 'X-tudo', preco: 30.00, Ingredientes: "pão, queijo, 3 hamburguers, 5 ovo, 4 salsicha , salada", image: require('./assets/images/big.jpg') },
    { id: '8', nome: 'X-tudo', preco: 30.00, Ingredientes: "pão, queijo, 3 hamburguers, 5 ovo, 4 salsicha , salada", image: require('./assets/images/big.jpg') },
    { id: '9', nome: 'X-tudo', preco: 30.00, Ingredientes: "pão, queijo, 3 hamburguers, 5 ovo, 4 salsicha , salada", image: require('./assets/images/big.jpg') },
    { id: '10', nome: 'X-tudo', preco: 30.00, Ingredientes: "pão, queijo, 3 hamburguers, 5 ovo, 4 salsicha , salada", image: require('./assets/images/big.jpg') },
    { id: '11', nome: 'X-tudo', preco: 30.00, Ingredientes: "pão, queijo, 3 hamburguers, 5 ovo, 4 salsicha , salada", image: require('./assets/images/big.jpg') },
    { id: '12', nome: 'X-tudo', preco: 30.00, Ingredientes: "pão, queijo, 3 hamburguers, 5 ovo, 4 salsicha , salada", image: require('./assets/images/big.jpg') },
    { id: '13', nome: 'X-tudo', preco: 30.00, Ingredientes: "pão, queijo, 3 hamburguers, 5 ovo, 4 salsicha , salada", image: require('./assets/images/big.jpg') },
    { id: '14', nome: 'X-tudo', preco: 30.00, Ingredientes: "pão, queijo, 3 hamburguers, 5 ovo, 4 salsicha , salada", image: require('./assets/images/big.jpg') },
    { id: '15', nome: 'X-tudo', preco: 30.00, Ingredientes: "pão, queijo, 3 hamburguers, 5 ovo, 4 salsicha , salada", image: require('./assets/images/big.jpg') },

];

const renderItem = ({ item }: { item: lanches }) => (
    <TouchableOpacity style={styles.item}>
        <Text style={styles.itemText}>{item.nome}</Text>
        <Text style={styles.itemText}>{item.preco}</Text>
        <Text style={styles.itemText}>{item.Ingredientes}</Text>
        <Image source={item.image} style={styles.image} />
    </TouchableOpacity>
);

function Cardapio(): React.JSX.Element {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="black" barStyle='light-content' />

            <View style={styles.header}>
                <Text style={styles.headerText}>𝕮𝖍𝖆𝖕𝖆 𝕳𝖆𝖑𝖑𝖘</Text>
            </View>

            <FlatList

                showsVerticalScrollIndicator={false}
                data={dados}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}



            />


           

            <View style={styles.footer}>
                
                <TouchableOpacity>
                    <Image source={require('./assets/images/menu.png')} style={styles.footerIcon} />
                </TouchableOpacity>

                <TouchableOpacity>
                    <Image source={require('./assets/images/home.png')} style={styles.footerIcon} />
                </TouchableOpacity>

                <TouchableOpacity>
                    <Image source={require('./assets/images/pedidos.png')} style={styles.footerIcon} />
                </TouchableOpacity>

                <TouchableOpacity>
                    <Image source={require('./assets/images/perfil.png')} style={styles.footerIcon} />
                </TouchableOpacity>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    item: {
        backgroundColor: 'black',
        color: '#FFF',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 20
    },
    itemText: {
        color: '#FFF',
        flexDirection: 'column'
    },
    header: {
        backgroundColor: "#FFF",
        flexDirection: 'row',
        height: 100,
        alignItems: 'center'
    },
    headerText: {
        fontSize: 30,
        color: 'black',
        marginLeft: 120
    },
    footer: {
        borderTopWidth: 0.2,
        backgroundColor: '#FFF',
        flexDirection: "row",
        justifyContent: 'center',
        marginLeft: 40
    },
    footerIcon: {
        height: 40,
        width: 40,
        marginRight: 45
    },
    image: {
        height: 200,
        width: 200,
        borderRadius: 30
    },

});

export default Cardapio;
