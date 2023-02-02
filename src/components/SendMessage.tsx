import { PaperPlaneRight } from "phosphor-react";

export default function SendMessage() {
	return (
		<div className="flex">
			<div className="flex flex-1">
				<input
					type="text"
					placeholder="Digite sua mensagem"
					className="flex-1"
				/>
			</div>
			<div>
				<PaperPlaneRight />
			</div>
		</div>
	);
}
