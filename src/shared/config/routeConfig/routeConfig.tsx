import {NotFoundPage} from 'pages/NotFoundPage';
import {RouteProps} from "react-router-dom";
import PokemonDetails from "entities/Pokemon/ui/PokemonDetails/PokemonDetails";
import PokemonPage from "pages/PokemonPage/ui/PokemonPage/PokemonPage";

export enum AppRoutes {
    POKEMON = 'pokemon',
    POKEMON_DETAILS = 'pokemon_details',
    // last
    NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.POKEMON]: '/',
    [AppRoutes.POKEMON_DETAILS]: '/pokemon/',
    // последний
    [AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.POKEMON]: {
        path: RoutePath.pokemon,
        element: <PokemonPage />,
    },
    [AppRoutes.POKEMON_DETAILS]: {
        path: `${RoutePath.pokemon_details}:id`,
        element: <PokemonDetails />,
    },

    // last
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFoundPage />,
    },
};
