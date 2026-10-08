import { Routes } from '@angular/router';
import { Home } from './componentes/home/home';
import { Anunciar } from './pages/anunciar/anunciar';
import { Mensagens } from './pages/mensagens/mensagens';
import { Perfil } from './pages/perfil/perfil';
import { Trocas } from './pages/trocas/trocas';
import { NotFound } from './pages/not-found/not-found';



export const routes: Routes = [
    {
        path: '',
        component: Home
    },
    {
        path: 'anunciar',
        component: Anunciar
    },
    {
        path: 'mensagens',
        component: Mensagens
    },
    {
        path: 'perfil',
        component: Perfil
    },
    {
        path: 'trocas',
        component: Trocas
    },
    {
        path: '**',
        component: NotFound
    }
];

