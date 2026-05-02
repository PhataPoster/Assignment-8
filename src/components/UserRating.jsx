"use client";

import { Avatar } from "@heroui/react";
import User1 from "../assets/user1.png";
import User2 from "../assets/user2.png";
import User3 from "../assets/user3.png";



const UserRating = () => {
    return (
        <div className="mx-auto max-w-7xl mt-6 p-10 rounded-2xl border border-(--brand-500-20) backdrop-blur supports-backdrop-filter:bg-white/70 bg-white/80 flex flex-col items-center gap-15 justify-center">
            <div className="flex flex-col items-center gap-2">
                <h2 className="text-3xl font-bold text-(--brand-500)">User Testimonial</h2>
                <p className="text-lg text-center font-semibold text-gray-400">
                    Hear from our satisfied users and discover how our platform has transformed their reading experience.
                </p>
            </div>
            <div className="flex justify-center items-center gap-4">
                <div className="flex flex-col items-center gap-4 p-6 rounded-2xl border border-(--brand-500-20) backdrop-blur bg-white/80 shadow-lg">
                    <div className="flex gap-4 justify-between items-center">
                    <Avatar className="h-35 w-35">
                        <Avatar.Image src={User1.src} alt="John Doe" />
                        <Avatar.Fallback>JD</Avatar.Fallback>
                    </Avatar>

                        <div className="flex flex-col gap-2">
                            <p className="text-lg font-medium">Sarah Jenkins</p>
                            <p className="text-yellow-400">★★★★★</p>
                        </div>
                    </div>
                    <p className="text-gray-600 mt-4 text-justify">
                        The interface is so intuitive. Borrowing a book literally takes two clicks. It has completely changed how our local book club operates!
                    </p>

                </div>
                <div className="flex flex-col items-center gap-4 p-6 rounded-2xl border border-(--brand-500-20) backdrop-blur bg-white/80 shadow-lg">
                    <div className="flex gap-4 justify-between items-center">
                    <Avatar className="h-35 w-35">
                        <Avatar.Image src={User2.src} alt="Jane Smith" />
                        <Avatar.Fallback>JS</Avatar.Fallback>
                    </Avatar>

                        <div className="flex flex-col gap-2">
                            <p className="text-lg font-medium">Jane Smith</p>
                            <p className="text-yellow-400">★★★★★</p>
                        </div>
                    </div>
                    <p className="text-gray-600 mt-4 text-justify">
                        I love how the rating system helps me find the best books quickly. It is like having a personal librarian who knows exactly what I like!
                    </p>

                </div>
                <div className="flex flex-col items-center gap-4 p-6 rounded-2xl border border-(--brand-500-20) backdrop-blur bg-white/80 shadow-lg">
                    <div className="flex gap-4 justify-between items-center">
                    <Avatar className="h-35 w-35">
                        <Avatar.Image src={User3.src}
                         alt="Alicea Johnson" />
                        <Avatar.Fallback>AJ</Avatar.Fallback>
                    </Avatar>

                        <div className="flex flex-col gap-2">
                            <p className="text-lg font-medium">Alicea Johnson</p>
                            <p className="text-yellow-400">★★★★★</p>
                        </div>
                    </div>
                    <p className="text-gray-600 mt-4 text-justify">
                       Clean, fast, and reliable. The rating system helps me find the best reads without wasting time. Highly recommended!
                    </p>

                </div>
               

            </div>
        </div>
    );
};

export default UserRating;