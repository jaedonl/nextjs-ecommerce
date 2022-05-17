import axios from 'axios';
import Head from 'next/head'
import Image from 'next/image'
import Featured from "../components/Featured";
import PizzaList from "../components/PizzaList";
import styles from '../styles/Home.module.scss'

export default function Home({ pizzaList, admin }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>JdonL's Pizza in Newyork</title>
        <meta name="description" content="Best pizza shop in town" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Featured/>
      {admin && <span>Hello</span>}
      <PizzaList pizzaList={pizzaList} />
    </div>
  )
}

export const getServerSideProps = async (context) => {
  const myCookie = context.req?.cookies || "";
  let admin = false;

  if (myCookie.token === process.env.TOKEN) {
    admin = true;
  }

  const res = await axios.get("http://localhost:3000/api/products")

  return {
    props: {
      pizzaList: res.data,
      admin
    },
  }
}