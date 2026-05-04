import SeeMoreBtn from "@/components/apps/SeeMoreBtn";
import Banner from "@/components/Banner";
import NewArrival from "@/components/NewArrival";
import PlatformStats from "@/components/PlatformStats";
import BookCard from "@/components/ui/BookCard";
import SwiperBookShow from "@/components/ui/SwiperBookShow";
import UserRating from "@/components/UserRating";
import { fetchBooks } from "@/lib/data";
import { Button } from "@heroui/react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";


const booksData = await fetchBooks();

export default function Home() {
  const lastBookTitle = booksData?.[booksData.length - 1]?.title;

  return (
    <div>
      <Banner />
      <NewArrival title={lastBookTitle} />
      <div className="mx-auto max-w-7xl mt-6 px-3 sm:px-0">
        <h1 className="text-3xl font-bold text-center text-(--brand-500) py-10">Our Books</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
          {
            booksData.slice(0, 4).map(book => <BookCard key={book.id} book={book} />)
          }
        </div>
        <SwiperBookShow />
          <SeeMoreBtn />
      </div>
      <PlatformStats />
      <UserRating />
    </div>
  );
}
