export interface PokemonList {
    name:string
    url:string
}
export interface PokemonDetails {
    name:string
    stats:PokemonDetailStats[]
    moves:PokemonDetailMoves[]
}
export interface PokemonDetailStats {
    base_stat: number,
    effort: number,
    stat:PokemonList
}
export interface PokemonDetailMove {
    name:string
    url:string
}
export interface PokemonDetailMoves {
    move:PokemonDetailMove
    version_group_details:PokemonDetailVersion[]
}
export interface PokemonDetailVersion {
    level_learned_at:number
    move_learn_method:PokemonList
    version_group:PokemonList
}

export interface PokemonPage {
    results:PokemonList[]
}
