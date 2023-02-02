import { PaperPlaneRight } from "phosphor-react";

export default function SendMessage() {
	return (
		<form className="bg-slate-700 rounded-[999rem] py-4 px-6 focus-within:ring-2 focus-within:ring-zinc-300">
			<div className="flex items-center child:border-0 child:bg-transparent">
				<input
					type="text"
					placeholder="Digite sua mensagem"
					className="flex-1 outline-none "
				/>
				<button>
					<PaperPlaneRight size={25} className="text-red-white" />
				</button>
			</div>
		</form>
	);
}
