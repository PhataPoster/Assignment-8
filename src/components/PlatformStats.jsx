
import { FaBook, FaBuyNLarge, FaShoppingBag, FaUser } from "react-icons/fa";
import { MdStarRate } from "react-icons/md";


const PlatformStats = () => {
    return (
       <div className="px-3 sm:px-0">
         <div className="mx-auto max-w-7xl mt-6 p-10 rounded-2xl border border-(--brand-500-20) backdrop-blur supports-backdrop-filter:bg-white/70 bg-white/80 flex flex-col items-center gap-15 justify-center">
            <div className="flex flex-col items-center gap-2">
                <h2 className="text-3xl font-bold text-(--brand-500)">Platform Statistics</h2>
                <p className="text-lg text-center font-semibold text-gray-400">
                    Discover the impact of our platform and the vast collection of books available.
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-6 w-full">
                <div className="flex flex-col items-center gap-4 p-10 rounded-2xl border border-(--brand-500-20) backdrop-blur bg-(--brand-500) text-white shadow-lg w-full h-full">
                    <h2 className="text-4xl font-bold">500+</h2>
                    <div className="flex gap-2 justify-center items-center">
                        <FaBook />
                        <p className="text-lg font-medium">Books Available</p>
                    </div>
                </div>
                <div className="flex flex-col items-center gap-4 p-10 rounded-2xl border border-(--brand-500-20) backdrop-blur bg-(--brand-500) text-white shadow-lg w-full h-full">
                    <h2 className="text-4xl font-bold">200+</h2>
                    <div className="flex gap-2 justify-center items-center">
                        <FaUser />
                        <p className="text-lg font-medium">Users</p>
                    </div>
                </div>
                <div className="flex flex-col items-center gap-4 p-10 rounded-2xl border border-(--brand-500-20) backdrop-blur bg-(--brand-500) text-white shadow-lg w-full h-full">
                    <h2 className="text-4xl font-bold">1000+</h2>
                    <div className="flex gap-2 justify-center items-center">
                        <FaShoppingBag />
                        <p className="text-lg font-medium">Borrows Books</p>
                    </div>
                </div>
                <div className="flex flex-col items-center gap-4 p-10 rounded-2xl border border-(--brand-500-20) backdrop-blur bg-(--brand-500) text-white shadow-lg w-full h-full">
                    <h2 className="text-4xl font-bold">4.8</h2>
                    <div className="flex gap-2 justify-center items-center">
                        <MdStarRate className="text-yellow-700 text-xl" />
                        <p className="text-lg font-medium">Rating</p>
                    </div>
                </div>
            </div>
        </div>
       </div>
    );
};

export default PlatformStats;