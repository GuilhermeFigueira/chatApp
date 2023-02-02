import { ReactNode } from "react";

export interface MessageProps {
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
		<div
			className={`max-w-[50vw] ${
				receivedMessage ? "mr-auto " : "ml-auto "
			}`}
		>
			<div
				className={`text-gray-300 italic p-1 text-sm ${
					receivedMessage ? "text-left" : "text-right"
				} `}
			>
				{props.userSent} - {props.messageTime}
			</div>
			<div
				className={`w-fit text-gray-200 p-4 ${
					receivedMessage
						? "bg-amber-900 rounded-b-xl rounded-tr-xl"
						: "bg-teal-900 rounded-b-xl rounded-tl-xl"
				}`}
			>
				{children}
			</div>
		</div>
	);
}
