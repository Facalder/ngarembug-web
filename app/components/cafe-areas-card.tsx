export default function CafeAreasCard() {
	return (
		<div className="relative flex flex-col justify-end items-center bg-[url('https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/auto_optimize_webp/tix-hotel/images-web/2022/11/16/0e02e1cb-c6fa-43e3-ac64-863051e38d13-1668559824742-720b1110990112b2efc4232154eb0f9f.jpg')] bg-cover bg-center pb-4 rounded-md h-60">
			{/* Overlay */}
			<div className="absolute inset-0 bg-black/50 rounded-md"></div>

			{/* Text */}
			<div className="z-10 space-y-0.5 text-white text-center">
				<p className="z-10 relative font-bricolage font-bold text-xl">
					Telkom University
				</p>
				<p className="text-sm">20 tempat</p>
			</div>
		</div>
	);
}
