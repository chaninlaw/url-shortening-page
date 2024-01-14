interface FooterLinkProps {
	title: string
	href: string
}

export function FooterLinks(props: FooterLinkProps) {
	return (
		<li>
			<a href={props.href}>{props.title}</a>
		</li>
	)
}
