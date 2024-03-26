const Card = (props) => {
	return (
		<section>
			<h2>{props.icon} Title</h2>
			{props.children}
		</section>
	);
};

const Icon = () => {
	return <i>💩</i>;
};

function Components() {
	return (
		<Card icon={<Icon />}>
			<p>Card Text</p>
		</Card>
	);
}

export default Components;
