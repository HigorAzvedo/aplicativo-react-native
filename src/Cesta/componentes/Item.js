import { Image, StyleSheet, View, FlatList } from "react-native";
import Texto from "../../componentes/Texto";


const Item = ({ item: { nome, imagem } }) => {
    return <View style={estilos.item} key={nome}>
        <Image style={estilos.imagem} source={imagem}></Image>
        <Texto style={estilos.nome}>{nome}</Texto>
    </View>
}

const estilos = StyleSheet.create({  
    item: {
        flexDirection: "row",
        gap: 11,
        borderBottomWidth: 1,
        borderBottomColor: "#ECECEC",
        paddingVertical: 16,
        marginHorizontal: 16,
        alignItems: "center",
       
    },
    imagem: {
        width: 46,
        height: 46,
    },
    nome: {
        fontSize: 16,
        lineHeight: 26,
        // marginLeft: 11,
        color: "#464646"
    }
})

export default Item;