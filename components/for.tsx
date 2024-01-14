interface ForProps<T> {
	each: T[]
	children: (item: T, index: number) => JSX.Element
}
export function For<T>(props: ForProps<T>) {
	return props.each.map(props.children)
}
