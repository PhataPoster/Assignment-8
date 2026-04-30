import Banner from "@/components/Banner";
import NewArrival from "@/components/NewArrival";
import BookCard from "@/components/ui/BookCard";
import { fetchBooks } from "@/lib/data";


const booksData = await fetchBooks();

export default function Home() {
  const lastBookTitle = booksData?.[booksData.length - 1]?.title;

  return (
    <div>
      <Banner />
      <NewArrival title={lastBookTitle} />
      <div className="mx-auto max-w-7xl mt-6 px-4">
        <h1 className="text-2xl font-bold text-center text-(--brand-500)">Our Books</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
          {
            booksData.map(book => <BookCard key={book.id} book={book} />)
          }
        </div>
      </div>
    </div>
  );
}
