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
            <style jsx>{`
              div {
              text-align: center;
              }
            `}</style>
        </div>
    </>
}
