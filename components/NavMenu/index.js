import Link from 'next/link'

export default () => (
	<nav className="nav-menu">
		<style jsx>{`
			.list {
				list-style: none;
				padding: 0;
				margin: 0;
			}
			.item {
				display: inline-block;
			}
			.link {
				text-decoration: none;
				padding: 0 2rem;
			}
		`}</style>
		<ul className="list">
			<li className="item"><Link prefetch href="/"><a className="link">Home</a></Link></li>
			<li className="item"><Link prefetch href="/blog"><a className="link">Blog</a></Link></li>
			<li className="item"><Link prefetch href="/work"><a className="link">Work</a></Link></li>
			<li className="item"><Link prefetch href="/about"><a className="link">About</a></Link></li>
			<li className="item"><Link prefetch href="/contact"><a className="link">Contact</a></Link></li>
		</ul>
	</nav>
)
