"use client";

import Image from "next/image";

export default function Home() {
    return (
        <main className="w-full">
            {/* header */}
            <div className="flex w-full items-center justify-between">
                <h1 className="font-bold text-3xl">Welcome Back Haider👋</h1>
                <div className="flex items-center justify-between gap-3">
                    <div className="p-3 rounded-[30px] bg-gray-100 flex items-center justify-between gap-3 border focus-within:border-gray-700">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="size-6 left-3 top-3 cursor-pointer"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                            />
                        </svg>

                        <input
                            type="search"
                            placeholder="Search for anything..."
                            className="border-none focus:border-none focus:ring-0 focus:outline-none"
                        />
                    </div>

                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-10 p-2 rounded-full cursor-pointer text-black bg-gray-200"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
                        />
                    </svg>

                    <div className="flex items-center justify-center gap-3 bg-gray-200 px-1 py-1 pr-4 rounded-[30px]">
                        <Image
                            src="https://i.pinimg.com/736x/94/47/cf/9447cfad24bc325a72f612b9374d485d.jpg"
                            alt="profile"
                            priority
                            width={9}
                            height={9}
                            className="rounded-full w-9 h-9"
                        />
                        <span className="flex flex-col justify-center items-start leading-5">
                            <h3 className="text-[1rem]">Ali Haider</h3>
                            <h3 className="text-gray-600">Product manager</h3>
                        </span>

                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="size-5 text-black cursor-pointer"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m19.5 8.25-7.5 7.5-7.5-7.5"
                            />
                        </svg>
                    </div>
                </div>
            </div>

            {/* chart */}
        </main>
    );
}
