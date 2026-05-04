// import "server-only";

// import path from "node:path";
// import { readFile } from "node:fs/promises";

// const readPublicJson = async (fileName) => {
//     const filePath = path.join(process.cwd(), "public", fileName);
//     const fileText = await readFile(filePath, "utf8");
//     return JSON.parse(fileText);
// };

// export const fetchBooks = async () => {
//     return readPublicJson("books.json");
// };

// export const fetchCategories = async () => {
//     return readPublicJson("category.json");
// };

export const fetchBooks = async () => {
    const res = await fetch("https://book-loop-gilt.vercel.app/books.json")
    const data = await res.json();
    return data;
}

export const fetchCategories = async () => {
    const res = await fetch("https://book-loop-gilt.vercel.app/category.json")
    const data = await res.json();
    return data;
}
