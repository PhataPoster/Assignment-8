import "server-only";

import path from "node:path";
import { readFile } from "node:fs/promises";

const readPublicJson = async (fileName) => {
    const filePath = path.join(process.cwd(), "public", fileName);
    const fileText = await readFile(filePath, "utf8");
    return JSON.parse(fileText);
};

export const fetchBooks = async () => {
    return readPublicJson("books.json");
};

export const fetchCategories = async () => {
    return readPublicJson("category.json");
};

