import { X } from "phosphor-react";
import "./styles/main.css";
import { PaperPlaneRight } from "phosphor-react";

function App() {
	return (
		<div className="py-6 px-8 h-screen w-screen text-white grid grid-rows-[max-content_1fr_max-content]">
			<div className="flex flex-row justify-between">
				<div className="flex flex-row gap-4">
					<div className="w-12">
						<img
							src="https://github.com/guilhermefigueira.png"
							alt="Guilherme Figueira"
						/>
					</div>
					<div className="flex flex-col">
						<h1>Cecilia Sassaki</h1>
						<h2>Online</h2>
					</div>
				</div>
				<div>
					<X size={30} />
				</div>
			</div>
			<div>B</div>
			<div className="flex flex-row justify-between">
				<div>
					<input
						type="text"
						placeholder="Digite sua mensagem"
						className=""
					/>
				</div>
				<div>
					<PaperPlaneRight />
				</div>
			</div>
		</div>
	);
}

export default App;
