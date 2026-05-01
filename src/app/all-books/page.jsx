import BookCard from '@/components/ui/BookCard';
import { fetchBooks, fetchCategories } from '@/lib/data';
import { Button } from '@heroui/react';
import Link from 'next/link';

const AllBooksPage = async ({ searchParams }) => {
    const resolvedSearchParams = await searchParams;
    const activeCategory = resolvedSearchParams?.category;

    const booksCategories = await fetchCategories();
    const booksData = await fetchBooks();

    const filteredBooks = activeCategory
        ? booksData.filter(
            (book) => book.category?.toLowerCase() === activeCategory.toLowerCase()
        )
        : booksData;

    return (
        <div className='mx-auto max-w-7xl my-8 px-4 grid grid-cols-4 gap-6'>
            <div className="col-span-1">
                <h2 className='text-xl font-semibold mb-4'>Filter by Category</h2>
               <div className='flex flex-col gap-2'>
                 {
                        booksCategories.map((category) => {
                            const isActive =
                                category.slug?.toLowerCase() === activeCategory?.toLowerCase();

                            return (
                                <Link
                                    key={category.id}
                                    href={{ pathname: "/all-books", query: { category: category.slug } }}
                                >
                                    <Button
                                        variant={isActive ? "solid" : "bordered"}
                                        className={
                                            `w-full text-center block text-lg transition ${
                                                isActive
                                                    ? "bg-(--brand-500) text-white"
                                                    : "border-(--brand-500) text-(--brand-500) hover:bg-(--brand-500) hover:text-white"
                                            }`
                                        }
                                        aria-current={isActive ? "page" : undefined}
                                    >
                                        {category.name}
                                    </Button>
                                </Link>
                            );
                        })
                }
               </div>
            </div>
            <div className="col-span-3">
                <h1 className='text-xl font-semibold mb-4'>All Books</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredBooks.map((book) => (
                        <BookCard key={book.id} book={book} />
                    ))}
                </div>
            </div>
            
        </div>
    );
};

export default AllBooksPage;