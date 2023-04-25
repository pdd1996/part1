const Hello = ({name, age}) => {
	const year = new Date().getFullYear();

	const bornYear = () => year - age;

	return (
		<div>
			<p>
				Hello {name}, you are {age} years old
			</p>
			<p>you born in {bornYear()}</p>
		</div>
	)
}

export default Hello;