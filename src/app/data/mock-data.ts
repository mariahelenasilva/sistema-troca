import { Item } from "../interfaces/item-interface";

export const itens : Item[] = [
    {"id": 1, "nome": "Box de Livros", "categoria": "Livros", "status": "disponível", "estado": "semi-novo"},
    {"id": 2, "nome": "Caderno Universitário 10 Matérias", "categoria": "Papelaria", "status": "disponível", "estado": "novo"},
    {"id": 3, "nome": "Garrafa Térmica de Água 500ml", "categoria": "Acessórios", "status": "em uso", "estado": "semi-novo"},
    {"id": 4, "nome": "Caneta Esferográfica Azul (Pacote c/ 3)", "categoria": "Papelaria", "status": "disponível", "estado": "novo"}
]

export const menu_itens: any[] = [
    {"texto": "Home", "rota": "/"},
    {"texto": "Jogos", "rota": "/jogos"},
    {"texto": "Filmes", "rota": "/filmes"},
    {"texto": "Animes", "rota": "/animes"},
]