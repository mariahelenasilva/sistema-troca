import { Item } from "../interfaces/item-interface";
import { Rota } from "../interfaces/rotas-interface";

export const itens : Item[] = [
    {"id": 1, "nome": "Livro de abelhas", "categoria": "Livros", "status": "disponível", "estado": "semi-novo", "imagem": "assets/images/itensImg/livro.png"},
    {"id": 2, "nome": "Calculadora Cásio", "categoria": "Papelaria", "status": "disponível", "estado": "novo", "imagem": "assets/images/itensImg/calculadora.png"},
    {
        "id": 3, 
        "nome": "Fone de ouvido preto", 
        "categoria": "Acessórios", 
        "status": "em uso", 
        "estado": "semi-novo", 
        "imagem": "assets/images/itensImg/fone.png"
    },
    {
        "id": 4, 
        "nome": "Kit canetas coloridas", 
        "categoria": "Papelaria", 
        "status": "disponível", 
        "estado": "novo", 
        "imagem": "assets/images/itensImg/canetas.png"
    },
    {
        "id": 5, 
        "nome": "Camiseta branca", 
        "categoria": "Roupas", 
        "status": "disponível", 
        "estado": "novo", 
        "imagem": "assets/images/itensImg/camiseta.png"
    }
]

export const rotas: Rota[] = [
    // {"texto": "Home", "rota": "/"},
    {"texto": "Anunciar", "rota": "/anunciar"},
    {"texto": "Mensagens", "rota": "/mensagens"},
    {"texto": "Perfil", "rota": "/perfil"},
    {"texto": "Trocas", "rota": "/trocas"}
]