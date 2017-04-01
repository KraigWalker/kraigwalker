
export default () => (
	<footer className="footer" id="footer" role="contentinfo">
		<style jsx>{`
			.footer {
				border-top: 10px solid #d43900;
				display: table;
				min-height: 25rem;
				font-size: 1.3rem;
				line-height: 2rem;
				background: #dee0e2;
				width: 100%;
				padding-bottom: 6rem;
			}

			.footer >.container {
				vertical-align: bottom;
				padding-top: 6rem;
				max-width: 96rem;
				margin: 0 auto;
				clear: both;
				text-align: left;
				overflow: hidden;
			}

			.footer >.container >.column {
				display: inline-table;
				float: left;
			}

			.footer >.container >.column.one {
				width: 33.3333%;
				margin: 0;
			}

			.footer >.container >.column.two {
				width: 66.6666%;
				margin: 0;
			}

			.footer >.container >.column >.header {
				font-size: 2.4rem;
				font-weight: 700;
				line-height: 3.2rem;
				color: #000;
				border-bottom: 1px solid #bfc1c3;
				margin: 0 1.5rem;
			}

			.footer hr {
				border: none;
				height: 0;
				border-bottom: 1px solid #bfc1c3;
				width:100%;
				max-width: 1020px;
				margin: 0 auto;
			}

			.link-list {
				list-style: none;
				margin: 0;
				padding: 0;
				display: inline-block;
				vertical-align: top;
				width: 50%;
			}

			.link-list >.item {
				padding: 2rem 0 0;
				margin: 0 1.5rem;
			}

			.link-list >.item >.link {
				font-size: 1.6rem;
				line-height: 2.4rem;
				color: #454a4c;
			}

			.link-list >.item >.link:hover,
			.link-list >.item >.link:focus {
				text-decoration: underline;
				color: #171819;
			}

			.copyright {
				width: 100%;
				font-size: 1.6rem;
				color: #454a4c;
				margin: 0 1.5rem;
			}
		`}</style>
		<div className="container">
			<div className="column one">
				<h2 className="header">Further Details<span className="sr">.</span></h2>
				<ul className="link-list">
					<li className="item"><a className="link" href="">Sitemap</a><span className="sr">.</span></li>
					<li className="item"><a className="link" href="">Privacy Policy</a><span className="sr">.</span></li>
					<li className="item"><a className="link" href="">Cookie Policy</a><span className="sr">.</span></li>
					<li className="item"><a className="link" href="">Contact</a><span className="sr">.</span></li>
				</ul>
			</div>
			<div className="column two">
				<h2 className="header">Connect With Me<span className="sr">.</span></h2>
				<ul className="link-list">
					<li className="item"><a className="link" rel="noopener" href="">Twitter</a><span className="sr">.</span></li>
					<li className="item"><a className="link" rel="noopener" href="">Facebook</a><span className="sr">.</span></li>
					<li className="item"><a className="link" rel="noopener" href="">Instagram</a><span className="sr">.</span></li>
					<li className="item"><a className="link" rel="noopener" href="">LinkedIn</a><span className="sr">.</span></li>
				</ul>
				<ul className="link-list">
					<li className="item"><a className="link" rel="noopener" href="">GitHub</a><span className="sr">.</span></li>
					<li className="item"><a className="link" rel="noopener" href="">CodePen</a><span className="sr">.</span></li>
					<li className="item"><a className="link" rel="noopener" href="">Google+</a><span className="sr">.</span></li>
				</ul>
			</div>
		</div>
		<div className="container">
			<span className="copyright">&copy; Copyright 2017 Kraig Walker</span><span className="sr">.</span>
		</div>
	</footer>
)
