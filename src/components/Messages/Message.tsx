import { ReactNode } from "react";

interface MessageProps {
	children?: ReactNode;
	messageTime: string;
	userSent: string;
	receivedMessage?: boolean;
}

export default function Message({
	children = (
		<h1 className="text-gray-400 text-opacity-60 italic">
			Erro ao carregar mensagem
		</h1>
	),
	receivedMessage = false,
	...props
}: MessageProps) {
	return (
		<div className={receivedMessage ? "mr-auto " : "ml-auto"}>
			<div
				className={`text-gray-300 italic  ${
					receivedMessage ? "text-left" : "text-right"
				} `}
			>
				{props.userSent} - {props.messageTime}
			</div>
			<div className="bg-zinc-700 rounded-b rounded-tr ">{children}</div>
		</div>
	);
}
