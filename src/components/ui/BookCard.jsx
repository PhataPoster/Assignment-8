import { Button, Card } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

const BookCard = ({ book }) => {
    return (
        <Card className="group overflow-hidden rounded-2xl border border-(--brand-500-20) bg-white/80 backdrop-blur supports-backdrop-filter:bg-white/70 transition-colors hover:border-(--brand-500-30)">
            <div className="relative w-full aspect-2/3 bg-(--brand-500-10) overflow-hidden">
                <Image
                    src={book.image_url}
                    alt={book.title || "Book cover"}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                />
            </div>

            <div className="mt-1">
                <h3 className="text-base font-semibold leading-snug h-12 overflow-hidden">
                    {book.title}
                </h3>

                <p className="mt-1 text-sm text-black/65 truncate">
                    {book.author ? `by ${book.author}` : ""}
                </p>

                <div className="mt-1 flex items-center justify-between gap-3">
                    <span className="inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium bg-(--brand-500-10) border border-(--brand-500-20) text-(--brand-500) capitalize">
                        {book.category}
                    </span>

                    <span className="text-xs text-black/60">
                        {book.available_quantity > 0 ? `${book.available_quantity} available` : "Out of stock"}
                    </span>
                </div>

                <div className="mt-4">
                    <Link href={`/books/${book.id}`} className="block">
                        <Button className="w-full bg-(--brand-500) text-white hover:brightness-95 active:brightness-90">
                            View Details
                        </Button>
                    </Link>
                </div>
            </div>
        </Card>
            
           
       
    );
};

export default BookCard;