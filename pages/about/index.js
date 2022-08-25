import Link from "next/link";
import Head from 'next/head'
import Layout from "../../components/layout";

export default function About() {

    return <>
        <Head>
            <title>About</title>
        </Head>
        <div>
            Hello This is about section...
        </div>
        <Link href='/'><a>Home</a></Link>
    </>
}
