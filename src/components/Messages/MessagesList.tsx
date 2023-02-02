import Message from "./Message";

export default function MessagesList() {
	return (
		<div className="font-inter">
			<h1 className="text-center font-thin mt-4 text-sm">Hoje 11:30</h1>
			<div className="mt-10 grid gap-3">
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
					seu tioseu tioseu tioseu tioseu tioseu tioseu tioseu tioseu
					tioseu tioseu tio
				</Message>
				<Message messageTime={"11:32"} userSent={"Você"}>
					affffffffffffffffffffffffffffffffffffff
				</Message>
			</div>
		</div>
	);
}
