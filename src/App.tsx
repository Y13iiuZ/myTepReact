import React from "react";

type Props = {};

export default function App({}: Props) {
	return (
		<>
			<div className="h-full w-full bg-sky-300 m-auto rounded-[1em] group p-2 z-0 overflow-hidden flex justify-center align-middle">
				<div className="h-full w-1/5 bg-[#FDEE00] absolute left-0 bottom-full z-[-1] group-hover:translate-y-full duration-500"></div>
				<div className="h-1/3 w-full bg-[#FF5800] absolute left-[120%] top-0 z-[-1] group-hover:-translate-x-full duration-500"></div>
				<div className="h-1/3 w-full bg-[#007FFF] absolute right-[100%] top-1/3 z-[-1] group-hover:translate-x-full duration-500"></div>
				<div className="h-full w-4/5 bg-[#7CFC00] absolute left-[20%] top-full z-[-1] group-hover:-translate-y-[33.3%] duration-500"></div>

				<button className="text-[0.8em] absolute bottom-[1em] right-[1em] text-[#6C3082] group-hover:text-white duration-100">
					<span className="relative before:h-[0.16em] before:absolute before:w-full before:content-[''] before:bg-[#6C3082] group-hover:before:bg-white duration-100 before:bottom-0 before:left-0">
						Y24iiuX Temp React
					</span>
					<i className="fa-solid fa-arrow-right"></i>
				</button>

				<h1 className="z-20 font-bold font-Poppin text-[1.4em] group-hover:text-white delay-100 duration-100">
					ZTX
				</h1>
			</div>
		</>
	);
}
