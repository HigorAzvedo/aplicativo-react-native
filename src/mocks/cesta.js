import logo from "../../assets/logo.jpg"
import abacaxi from "../../assets/frutas/abacaxi.jpg"
import maca from "../../assets/frutas/maca.jpg"
import uva from "../../assets/frutas/uva.jpg"
import laranja from "../../assets/frutas/laranja.jpg"
import melancia from "../../assets/frutas/melancia.jpg"

const cesta = {
    topo: {
        titulo: "Detalhes da cesta"
    },
    detalhes: {
        nome: "Cesta de Frutas",
        nomeFazenda: "Janny Jack Farm",
        logoFazenda: logo,
        descricao: "Uma cesta com produtos cuidadosamente da fazenda direto para sua cozinha",
        preco: "R$ 40,00",
        botao: "Comprar"
    },
    itens: {
        titulo: "Itens da cesta",
        lista: [

            {
                nome: "Abacaxi",
                imagem: abacaxi,
            },
            {
                nome: "Maça",
                imagem: maca,
            },
            {
                nome: "Uva",
                imagem: uva,
            },
            {
                nome: "Laranja",
                imagem: laranja,
            },
            {
                nome: "Melancia",
                imagem: melancia,
            },
        ]
    }
}

export default cesta