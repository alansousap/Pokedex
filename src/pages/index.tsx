import { Header, SearchContainer, PokemonContainer } from '@/styles/pages/home'
import Head from 'next/head'
import { ChangeEvent, useEffect, useState } from 'react'
import axios from 'axios';
import { Pokemon } from "@/components/Pokemon";

interface Pokemon {
  id:number;
  num:string;
  name:string;
  img:string;
  type:string[];
}

export default function Home() {
  const [search, setSearch] = useState<string>("");
  const [listPokemons, setListPokemons] = useState<Pokemon[]>([]);

  const filteredList = listPokemons.filter(
    (pokemon) =>
       pokemon.name.toLowerCase().indexOf(search) > -1 ||
       pokemon.num.toLowerCase().indexOf(search) > -1
  );

  async function fetchPokemons() {
      const response = await axios.get("https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json");

      const allPokemons = response.data.pokemon.map(({id,num,name,img,type}: Pokemon) => {
        return {
          id,
          num,
          name,
          img,
          type,
        };
      });

      setListPokemons(allPokemons);
  }

  function handleSearchPokemons(event: ChangeEvent<HTMLInputElement>) {
    const field = event.target.value.toLowerCase();

    setTimeout(() => {
      setSearch(field);
    }, 500);
  }
  
  useEffect(() => {
    fetchPokemons();
  }, []);

  return (
    <>
      <Head>
        <title>Pokédex</title>
      </Head>

      <Header>
        <h1>Pokédex</h1>
      </Header>

      <SearchContainer>
        <input type="text" placeholder="Search for Name or Number 🔍" onChange={handleSearchPokemons} />
      </SearchContainer>

      <PokemonContainer>
        {filteredList.map((pokemon) => {
          return (
            <Pokemon key={pokemon.id} num={pokemon.num} name={pokemon.name} img={pokemon.img} type={pokemon.type} />
          )
        })}
      </PokemonContainer>
    </>
  )
}
