import BorrowBtn from "@/components/apps/BorrowBtn";
import { fetchBooks } from "@/lib/data";
import Image from "next/image";


const BookDetailsPage = async ({ params }) => {
    const { id } = await params;
    const booksData = await fetchBooks();
    const book = booksData.find(book => book.id == id);
    console.log(book);

    const handleBorrowBtn = () => {
        // toast.success(`You have successfully borrowed "${book.title}"!`)
        alert("You have successfully borrowed this book!")
    }
    return (
        <div className="mx-auto max-w-7xl mt-3 rounded-2xl border border-[color:var(--brand-500-20)] backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/80 p-6">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex justify-center ">
                    <Image
                        src={book.image_url}
                        height={500}
                        width={300}
                        alt={book.title}
                        className="h-full"
                    />
                </div>
                <div className="flex flex-col gap-6 justify-center items-center sm:items-start text-center sm:text-left">
                    <h1 className="text-2xl font-bold mb-4">{book.title}</h1>
                    <div>
                    <p className="text-lg mb-2">Author: {book.author}</p>
                    <p className="text-lg mb-2">Category: {book.category}</p>
                    <p className="text-lg mb-2">Available Quantity: {book.available_quantity}</p>
                    <p className="text-lg mb-2">Description: {book.description}</p>
                    </div>
                    <BorrowBtn></BorrowBtn>

                </div>
            </div>
        </div>
    );
};

export default BookDetailsPage;