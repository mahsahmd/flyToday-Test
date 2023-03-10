import FlightList from '@/components/flight-list/FlightList'
import { flightData } from '@/utils/flight-data'
import Head from 'next/head'


export default function Home() {
  return (
    <>
      <Head>
        <title>Fly Today</title>
        <meta name="description" content="Fly Today Test" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FlightList data={flightData.pricedItineraries} />
    </>
  )
}
