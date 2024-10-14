import { Dimensions, Image, StyleSheet } from "react-native"
import topo from "../../../assets/cesta-de-frutas.jpg"
import Texto from "../../componentes/Texto"

const Topo = ({ titulo }) => {
    
   return(
    <>
        <Image source={topo} style={estilos.topo} />
        <Texto style={estilos.titulo}>{titulo}</Texto>
    </>
   )
}

const width = Dimensions.get('screen').width

const estilos = StyleSheet.create({
    topo: {
        width: "100%",
        height: 550 / 500 * width
    },
    titulo: {
        width: "100%",
        position: "absolute",
        textAlign: "center",
        fontSize: 16,
        lineHeight: 26,
        color: "white",
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        fontWeight: "bold",
        padding: 16
    },
})

export default Topo