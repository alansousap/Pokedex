import { Container, ImageContainer, InfoContainer } from "@/styles/components/pokemon";
import Image from "next/image";

interface PokemonProps {
    num:string;
    name:string;
    img:string;
    type:string[];
}

export function Pokemon({num,name,img,type}:PokemonProps) {
    return (
        <Container>
            <ImageContainer>
                <Image src={img} width={120} height={120} alt=""></Image>
                <p>#{num}</p>
            </ImageContainer>
            <InfoContainer>
                <h1>{name}</h1>
                <div>
                    <p>{type[0]}</p>
                    <p>{type[1]}</p>
                </div>
            </InfoContainer>
        </Container>
    )
}