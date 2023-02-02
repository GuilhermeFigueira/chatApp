import Message from "./Message";

export default function MessagesList() {
	const lastMessage =
		document.querySelector("#allMessages")?.lastElementChild;
	lastMessage?.scrollIntoView();

	return (
		<div id="messageList" className="font-inter overflow-y-scroll pb-6">
			<h1 className="text-center font-thin mt-4 text-sm">Hoje 11:30</h1>
			<div id="allMessages" className="mt-10 grid gap-3">
				<Message
					messageTime={"11:30"}
					userSent={"Guilherme"}
					receivedMessage={true}
				>
					ola
				</Message>
				<Message messageTime={"11:32"} userSent={"Você"}>
					quem é
				</Message>
				<Message
					messageTime={"11:32"}
					userSent={"Guilherme"}
					receivedMessage={true}
				>
					🅰️🅱️😃
				</Message>
				<Message messageTime={"11:32"} userSent={"Você"}>
					não entendi
				</Message>
				<Message
					messageTime={"11:32"}
					userSent={"Guilherme"}
					receivedMessage={true}
				>
					probrema e teu lol
				</Message>
				<Message messageTime={"11:32"} userSent={"Você"}>
					bazinga
				</Message>
				<Message messageTime={"11:32"} userSent={"Você"}>
					bazinga
				</Message>
				<Message messageTime={"11:32"} userSent={"Você"}>
					bazinga
				</Message>
				<Message messageTime={"11:32"} userSent={"Você"}>
					bazinga
				</Message>
				<Message messageTime={"11:32"} userSent={"Você"}>
					bazinga
				</Message>
				<Message messageTime={"11:32"} userSent={"Você"}>
					bazinga
				</Message>
				<Message messageTime={"11:32"} userSent={"Você"}>
					bazinga
				</Message>
			</div>
		</div>
	);
}
