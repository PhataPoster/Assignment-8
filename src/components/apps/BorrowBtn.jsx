
"use client"
import { Button } from '@heroui/react';
import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { toast } from 'react-toastify';
const handleBorrowBtn = () => {
    toast.success(`You have successfully borrowed this book!`);
}

const BorrowBtn = () => {
    return (
        <div>
            <Button onClick={handleBorrowBtn} className="mt-4 bg-(--brand-500) text-white hover:brightness-95 active:brightness-90 flex items-center gap-2">
                        Borrow This Book <FaShoppingCart />
                    </Button>
        </div>
    );
};

export default BorrowBtn;