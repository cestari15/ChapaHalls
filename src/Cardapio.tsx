import React from "react";
import { View, Text, StyleSheet, FlatList, Touchable, TouchableOpacity, StatusBar, Image, ScrollView } from "react-native";

interface lanches {
    id: string;
    nome: string;
    preco: number;
    Ingredientes: string;
    image: any;
}

const dados: lanches[] = [
    { id: '1', nome: '𝖃-𝕿𝖀𝕯𝕺', preco: 30.00, Ingredientes: "pão, queijo, 3 hamburguers, 5 ovo, 4 salsicha , salada", image: require('./assets/images/big.jpg') },
    { id: '2', nome: '𝖃-𝕿𝖀𝕯𝕺', preco: 30.00, Ingredientes: "pão, queijo, 3 hamburguers, 5 ovo, 4 salsicha , salada", image: require('./assets/images/big.jpg') },
    { id: '3', nome: '𝖃-𝕿𝖀𝕯𝕺', preco: 30.00, Ingredientes: "pão, queijo, 3 hamburguers, 5 ovo, 4 salsicha , salada", image: require('./assets/images/big.jpg') },
    { id: '4', nome: '𝖃-𝕿𝖀𝕯𝕺', preco: 30.00, Ingredientes: "pão, queijo, 3 hamburguers, 5 ovo, 4 salsicha , salada", image: require('./assets/images/big.jpg') },
    { id: '5', nome: '𝖃-𝕿𝖀𝕯𝕺', preco: 30.00, Ingredientes: "pão, queijo, 3 hamburguers, 5 ovo, 4 salsicha , salada", image: require('./assets/images/big.jpg') },
    { id: '6', nome: '𝖃-𝕿𝖀𝕯𝕺', preco: 30.00, Ingredientes: "pão, queijo, 3 hamburguers, 5 ovo, 4 salsicha , salada", image: require('./assets/images/big.jpg') },
    { id: '7', nome: '𝖃-𝕿𝖀𝕯𝕺', preco: 30.00, Ingredientes: "pão, queijo, 3 hamburguers, 5 ovo, 4 salsicha , salada", image: require('./assets/images/big.jpg') },
    { id: '8', nome: '𝖃-𝕿𝖀𝕯𝕺', preco: 30.00, Ingredientes: "pão, queijo, 3 hamburguers, 5 ovo, 4 salsicha , salada", image: require('./assets/images/big.jpg') },
    { id: '9', nome: '𝖃-𝕿𝖀𝕯𝕺', preco: 30.00, Ingredientes: "pão, queijo, 3 hamburguers, 5 ovo, 4 salsicha , salada", image: require('./assets/images/big.jpg') },
    { id: '10', nome: '𝖃-𝕿𝖀𝕯𝕺', preco: 30.00, Ingredientes: "pão, queijo, 3 hamburguers, 5 ovo, 4 salsicha , salada", image: require('./assets/images/big.jpg') },
    { id: '11', nome: '𝖃-𝕿𝖀𝕯𝕺', preco: 30.00, Ingredientes: "pão, queijo, 3 hamburguers, 5 ovo, 4 salsicha , salada", image: require('./assets/images/big.jpg') },
    { id: '12', nome: '𝖃-𝕿𝖀𝕯𝕺', preco: 30.00, Ingredientes: "pão, queijo, 3 hamburguers, 5 ovo, 4 salsicha , salada", image: require('./assets/images/big.jpg') },
    { id: '13', nome: '𝖃-𝕿𝖀𝕯𝕺', preco: 30.00, Ingredientes: "pão, queijo, 3 hamburguers, 5 ovo, 4 salsicha , salada", image: require('./assets/images/big.jpg') },
    { id: '14', nome: '𝖃-𝕿𝖀𝕯𝕺', preco: 30.00, Ingredientes: "pão, queijo, 3 hamburguers, 5 ovo, 4 salsicha , salada", image: require('./assets/images/big.jpg') },
    { id: '15', nome: '𝖃-𝕿𝖀𝕯𝕺', preco: 30.00, Ingredientes: "pão, queijo, 3 hamburguers, 5 ovo, 4 salsicha , salada", image: require('./assets/images/big.jpg') },

];

interface acompanhamentos {
    id: string;
    nome: string;
    preco: number;
    Ingredientes: string;
    image: any;
}

const dados2: acompanhamentos[] = [
    { id: '1', nome: '𝕱𝖗𝖎𝖙𝖆𝖘', preco: 45.00, Ingredientes: "Porção de batata frita de 500g", image: require('./assets/images/batata.jpeg') },
    { id: '2', nome: '𝕮𝖊𝖇𝖔𝖑𝖆 𝕮𝖗𝖎𝖘𝖕', preco: 50.00, Ingredientes: "Porção de cebola empanada de 500g", image: require('./assets/images/cebola.jpeg') },
    { id: '3', nome: '𝕮𝖆𝖑𝖆𝖇𝖗𝖊𝖘𝖆', preco: 30.00, Ingredientes: "Porção de calabresa frita de 500g", image: require('./assets/images/calabresa.jpeg') },
    { id: '4', nome: '𝕮𝖆𝖑𝖆𝖇𝖗𝖊𝖘𝖆 𝖈/ 𝕭𝖆𝖙𝖆𝖙𝖆', preco: 75.00, Ingredientes: "500g de fritas e Calabresa", image: require('./assets/images/fritas_cala.jpeg') },
];

interface bebidas {
    id: string;
    nome: string;
    preco: number;
    Ingredientes: string;
    image: any;
}
const dados3: acompanhamentos[] = [
    { id: '1', nome: '𝕮𝖔𝖈𝖆-𝕮𝖔𝖑𝖆', preco: 10.00, Ingredientes: "Refrigerante de 2 Litros", image: require('./assets/images/coca.png') },
    { id: '2', nome: '𝕾𝖕𝖗𝖎𝖙𝖊', preco: 10.00, Ingredientes: "Refrigerante de 2 Litros", image: require('./assets/images/sprite2.png') },
    { id: '3', nome: '𝕱𝖆𝖓𝖙𝖆', preco: 10.00, Ingredientes: "Refrigerante de 2 Litros", image: require('./assets/images/fanta2.png') },
    { id: '4', nome: '𝕿𝖚𝖇𝖆𝖎𝖓𝖆', preco: 10.00, Ingredientes: "Refrigerante de 2 Litros", image: require('./assets/images/tubaina.png') },
    { id: '5', nome: '𝕮𝖔𝖕𝖔 𝕲𝖊𝖑𝖔 & 𝕷𝖎𝖒𝖆̃𝖔', preco: 2.00, Ingredientes: "Copo com gelo e limão rosa em fatias", image: require('./assets/images/copo.png') },
];
const renderItem = ({ item }: { item: lanches }) => (
    <TouchableOpacity style={styles.item}>
        <Text style={styles.itemTitle}>{item.nome}</Text>
        <Text style={styles.decoracao}>--------------------------</Text>
        <Text style={styles.itemText}>R${item.preco},00</Text>
        <Text style={styles.decoracao}>--------------------------</Text>
        <Text style={styles.itemText}>{item.Ingredientes}</Text>
        <Image source={item.image} style={styles.image} />
    </TouchableOpacity>
);

interface promocoes {
    id: string;
    nome: string;
    preco: number;
    Ingredientes: string;
    image: any;
}

const dados4: promocoes[] = [
    { id: '1', nome: '𝕮𝖔𝖒𝖇𝖔 2 𝖃-𝖙𝖚𝖉𝖔 𝖊 𝕮𝖔𝖈𝖆-𝖈𝖔𝖑𝖆', preco: 60.00, Ingredientes: "Refrigerante de 2 Litros", image: require('./assets/images/coca.png') },
    { id: '2', nome: '𝕮𝖔𝖒𝖇𝖔 3 𝖃-𝖙𝖚𝖉𝖔 𝖊 2 𝕽𝖊𝖋𝖗𝖎', preco: 70.00, Ingredientes: "Refrigerante de 2 Litros", image: require('./assets/images/sprite2.png') },
    { id: '3', nome: '𝕮𝖔𝖒𝖇𝖔 2 𝖋𝖗𝖎𝖙𝖆𝖘 𝖊 1 𝖗𝖊𝖋𝖗𝖎', preco: 60.00, Ingredientes: "Refrigerante de 2 Litros", image: require('./assets/images/fanta2.png') },
    { id: '4', nome: '𝕮𝖔𝖒𝖇𝖔 3 𝖕𝖔𝖗𝖈̧𝖔̃𝖊𝖘 𝖊 2 𝖃-𝕿𝖚𝖉𝖔', preco: 50.00, Ingredientes: "Refrigerante de 2 Litros", image: require('./assets/images/tubaina.png') },

];
const renderItem4 = ({ item }: { item: promocoes }) => (
    <TouchableOpacity style={styles.item}>
        <Text style={styles.itemTitle}>{item.nome}</Text>
        <Text style={styles.decoracao}>--------------------------</Text>
        <Text style={styles.itemText}>R${item.preco},00</Text>
        <Text style={styles.decoracao}>--------------------------</Text>
        <Text style={styles.itemText}>{item.Ingredientes}</Text>
        <Image source={item.image} style={styles.image} />
    </TouchableOpacity>
);

const renderItem2 = ({ item }: { item: acompanhamentos }) => (
    <TouchableOpacity style={styles.item}>
        <Text style={styles.itemTitle}>{item.nome}</Text>
        <Text style={styles.decoracao}>--------------------------</Text>
        <Text style={styles.itemText}>R${item.preco},00</Text>
        <Text style={styles.decoracao}>--------------------------</Text>
        <Text style={styles.itemText}>{item.Ingredientes}</Text>
        <Image source={item.image} style={styles.image} />
    </TouchableOpacity>
);


const renderItem3 = ({ item }: { item: bebidas }) => (
    <TouchableOpacity style={styles.item}>
        <Text style={styles.itemTitle}>{item.nome}</Text>
        <Text style={styles.decoracao}>--------------------------</Text>
        <Text style={styles.itemText}>R${item.preco},00</Text>
        <Text style={styles.decoracao}>--------------------------</Text>
        <Text style={styles.itemText}>{item.Ingredientes}</Text>
        <Image source={item.image} style={styles.image} />
    </TouchableOpacity>
);

function Cardapio(): React.JSX.Element {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="black" barStyle='light-content' />

            <View style={styles.header}>
                <Image style={styles.imageHeader} source={require('./assets/images/logo.png')} />
            </View>
            <ScrollView>
                <Text style={styles.textoA}>𝕷𝖆𝖓𝖈𝖍𝖊𝖘</Text>
                <FlatList

                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                    data={dados}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}



                />
                <Text style={styles.textoB}>𝕬𝖈𝖔𝖒𝖕𝖆𝖓𝖍𝖆𝖒𝖆𝖓𝖊𝖙𝖔𝖘</Text>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={dados2}
                    renderItem={renderItem2}
                    keyExtractor={(item) => item.id}
                    style={styles.lista2}
                />

                <Text style={styles.textoB}>𝕭𝖊𝖇𝖎𝖉𝖆𝖘</Text>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={dados3}
                    renderItem={renderItem3}
                    keyExtractor={(item) => item.id}
                    style={styles.lista2}
                />

                <Text style={styles.textoC}>𝕻𝖗𝖔𝖒𝖔𝖈̧𝖔̃𝖊𝖘</Text>
                <FlatList
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                    data={dados4}
                    renderItem={renderItem4}
                    keyExtractor={(item) => item.id}
                />

            </ScrollView>



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
    promocao: {

    },
    imageHeader: {
        height: 100,
        marginTop: 40,
        marginLeft: 'auto',
        marginRight: 'auto',
        width: 300
    },
    textoB: {
        marginLeft: 'auto',
        marginRight: 'auto',
        fontSize: 40,
        color: 'black',
        marginTop: 70
    },
    textoA: {
        marginLeft: 'auto',
        marginRight: 'auto',
        fontSize: 40,
        color: 'black',
        marginTop: 80
    },
    lista2: {
        marginTop: 30
    },
    container: {
        flex: 1,

    },
    decoracao: {
        color: '#FFF'
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
        flexDirection: 'column',
        fontSize: 20
    },
    itemTitle: {
        fontSize: 30,
        color: '#FFF'
    },
    header: {
        backgroundColor: "#FFF",
        flexDirection: 'row',
        height: 150,
        alignItems: 'center'
    },
    headerText: {
        fontSize: 40,
        color: 'black',
        marginLeft: 95
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
    textoC: {
        marginLeft: 'auto',
        marginRight: 'auto',
        fontSize: 40,
        color: 'black',

    }

});

export default Cardapio;
