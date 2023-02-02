import "./styles/main.css";

import UserInfo from "./components/UserInfo";
import SendMessage from "./components/SendMessage";
import MessagesList from "./components/Messages/MessagesList";

function App() {
	return (
		<div className="py-6 px-8 h-screen w-screen text-white grid grid-rows-[max-content_1fr_max-content]">
			<UserInfo />
			<MessagesList />
			<SendMessage />
		</div>
	);
}

export default App;
