import BookCard from '@/components/ui/BookCard';
import { fetchBooks, fetchCategories } from '@/lib/data';
import { Button, Form, Label, SearchField } from '@heroui/react';
import Link from 'next/link';

const AllBooksPage = async ({ searchParams }) => {


    const resolvedSearchParams = await searchParams;
    // console.log(resolvedSearchParams);
    const activeCategory = resolvedSearchParams?.category;
    const searchQuery = resolvedSearchParams?.search || "";
    // console.log(searchQuery)
    const booksCategories = await fetchCategories();
    const booksData = await fetchBooks();

    const filteredBooks = activeCategory
        ? booksData.filter(
            (book) => book.category?.toLowerCase() === activeCategory.toLowerCase()
        )
        :searchQuery
            ? booksData.filter((book) =>
                book.title.toLowerCase().includes(searchQuery.toLowerCase())
            )
        : booksData;

    return (
        <div className='mx-auto max-w-7xl my-8 px-4'>
            <div className='w-fit mx-auto mb-6'>
                <Form method='GET'>
                    <SearchField name="search">
                        <Label>Search</Label>
                        <SearchField.Group>
                            <SearchField.SearchIcon />
                            <SearchField.Input className="w-[280px]" placeholder="Search Books by Title..." />
                            <SearchField.ClearButton />
                        </SearchField.Group>
                    </SearchField>
                </Form>
            </div>
            <div className=' grid grid-cols-4 gap-6'>

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
                                        href={`/all-books?category=${category.name.toLowerCase()}`}
                                    >
                                        <Button
                                            variant={isActive ? "solid" : "bordered"}
                                            className={
                                                `w-full text-center block text-lg transition ${isActive
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
        </div>
    );
};

export default AllBooksPage;