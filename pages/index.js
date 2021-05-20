import Head from 'next/head';
import Header from '../Components/Header';
import Navbar from '../Components/Navbar';
import Results from '../Components/Results';
import requests from '../utils/requests';

export default function Home(props) {
  console.log(props);
  return (
    <div>
      <Head>
        <title>Video App</title>
      </Head>

      {/* Header */}
      <Header />
      {/* Navbar */}
      <Navbar />
      {/* Results */}
      <Results />
    </div>
  );
}

export async function getServerSideProps(context) {
  const genre = context.query.genre;
  const request = await fetch(
    `https://api.themoviedb.org/3${
      requests[genre]?.url || requests.fetchTrending.url
    }`
  ).then((res) => res.json());

  return {
    props: {
      results: request.results,
    },
  };
}
