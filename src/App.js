import Components from "./Components";
import Conditional from "./ConditionalRendering";
import Loops from "./Loops";
import Events from "./Events";
import State from "./State";

export default function App() {
	return (
		<>
			<Components />
			<hr />
			<Conditional />
			<hr />
			<Loops />
			<hr />
			<Events />
			<hr />
			<State />
		</>
	);
}
