import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from "next/link";
import axios from "axios";
import Movies, {FilmDetay} from "./Movies"
import about from "./about"
import Layout from "../components/layout";
import MovieCard from "../components/MovieCard";


export default function Home({movies}) {

    return (
        <>
            <Head>
                <title>Home</title>
            </Head>
            <div className='style'>
                <div>
                    {movies.results.map((element, index) =>
                        <MovieCard movie={element} key={index}/>
                    )}
                </div>
                <style jsx>
                    {`
                      .style {
                        display: flex;
                        flex-direction: column;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        width: 100%;
                        height: 100%;

                        div {
                          width: 80%;
                          height: 80%;
                          display: flex;
                          flex-wrap: wrap;
                          gap: 10px;

                        }
                      }
                    `}
                </style>
            </div>
        </>
    )

}


export async function getStaticProps() {

    const request = await axios.get('https://api.themoviedb.org/3/tv/top_rated?api_key=551b33576c3366ebcd5f453390daac0f&language=en-US&page=1');
    const movies = await request.data;

    return {props: {movies}}
}
