import Postagem from "./Postagem";

interface Usuario {
    id: number;
    nome: string;
    usuario: string;
    senha: string;
    foto: string
    postagem?: Postagem[] //linha adicionada para que o usuário possa ter um
    }
    export default Usuario