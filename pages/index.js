//import { getSession } from 'next-auth/react';
import Head from 'next/head';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Feed from '../components/Feed';
import Widgets from '../components/Widgets';
//import Login from '../components/Login';

export default function Home() {
	//export default function Home({session}) {
	//if (!session) return <Login />; Sessions aren't working cuz of Next-Auth Bug
	return (
		<div className='h-screen bg-gray-100 overflow-hidden'>
			<Head>
				<title>Facebook</title>
			</Head>

			<Header />
			<main className='flex'>
				<Sidebar />
				<Feed />
				<Widgets />
			</main>
		</div>
	);
}

//export async function getServerSideProps(context) {
//Get The User
/*const session = await getSession(context);

	return {
		props: {
			session,
		},
	};*/
//}
