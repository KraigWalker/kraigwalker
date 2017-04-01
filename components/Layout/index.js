import Head from 'next/head'
import Header from '../Header'
import Footer from '../Footer'

export default (props) => (
	<div>
		<Head>
			<meta charset="utf-8" />
			<title>Kraig Walker</title>
			<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			<link rel="stylesheet" href="static/base.css" />
		</Head>
		<Header />
		<main>
			{props.children}
		</main>
		<Footer />
	</div>
);
