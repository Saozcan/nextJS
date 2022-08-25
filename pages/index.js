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
                Home
                <style jsx>{`
                  .style {
                  text-align: center;
                  }
                `}</style>
            </div>
        </>
    )

}


