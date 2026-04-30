"use client";
import { Button } from '@heroui/react';
import Marquee from 'react-fast-marquee';

const NewArrival = ({ title }) => {
    const safeTitle = title || "New books just dropped";

    return (
        <div className='mx-auto max-w-7xl mt-3 rounded-2xl border border-[color:var(--brand-500-20)] backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/80 px-4 py-3 flex items-center gap-4'>
            <Button className="w-full sm:w-auto bg-[color:var(--brand-500)] text-white hover:brightness-95 active:brightness-90">
                New Arrivals
            </Button>
            <Marquee pauseOnHover ={true} speed={70}>
            New Arrivals: {safeTitle} | Special Discount on Memberships...
            </Marquee>
        </div>
    );
};

export default NewArrival;