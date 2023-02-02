import { X } from "phosphor-react";

export default function UserInfo() {
	return (
		<div className="flex justify-between items-center">
			<div className="flex gap-4 font-inter ">
				<div className="">
					<img
						className="w-12 h-12 object-cover rounded-[999rem]"
						src="https://github.com/guilhermefigueira.png"
						alt="Guilherme Figueira"
					/>
				</div>
				<div className="flex flex-col">
					<h1 className="font-bold">Guilherme Figueira</h1>
					<div className="font-thin flex items-center gap-1 text-sm text-green-500 before:content-[''] before:w-2 before:h-2 before:block before:bg-green-500 before:rounded">
						Online
					</div>
				</div>
			</div>
			<div>
				<X size={30} />
			</div>
		</div>
	);
}
