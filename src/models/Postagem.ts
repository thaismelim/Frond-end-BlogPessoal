import Tema from "./Tema";

interface Postagem {
    id: number;
    titulo: string;
    data: Date;
    texto: string;
    tema?: Tema | null

}

export default Postagem;

//çaçaçça//