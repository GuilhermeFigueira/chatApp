import { X } from "phosphor-react";

export default function UserInfo() {
	return (
		<div className="flex justify-between items-center">
			<div className="flex gap-4 font-inter ">
				<div className="">
					<img
						className="w-12 h-12 object-cover"
						src="https://github.com/guilhermefigueira.png"
						alt="Guilherme Figueira"
					/>
				</div>
				<div className="flex flex-col">
					<h1 className="font-bold">Cecilia Sassaki</h1>
					<h2 className="font-thin text-green-500">Online</h2>
				</div>
			</div>
			<div>
				<X size={30} />
			</div>
		</div>
	);
}
