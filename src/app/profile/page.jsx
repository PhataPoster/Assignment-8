"use client";
import { authClient } from '@/lib/auth-client';
import { Avatar } from '@heroui/react';
import Link from 'next/link';
import React from 'react';
import { IoPerson } from 'react-icons/io5';

const MyProfilePage = () => {
    const userData = authClient.useSession()
    const user = userData?.data?.user;

    return (
        <div className="mx-auto max-w-7xl mt-3 rounded-2xl border border-[color:var(--brand-500-20)] backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/80 p-6 flex flex-col items-center gap-4">
            <Avatar className='h-30 w-30'>
                <Avatar.Image
                    alt="John Doe"
                    src={user?.image}
                    referrerPolicy="no-referrer" />
                <Avatar.Fallback className="h-20 w-20">{user?.name[0] ? user?.name[0] : <IoPerson className='h-15 w-15' />}</Avatar.Fallback>
            </Avatar>
            <h2 className="text-2xl font-bold">{user?.name}</h2>
            <p className="text-gray-600">{user?.email}</p>
            <Link href="/profile/edit" className="px-4 py-2 bg-[color:var(--brand-500)] text-white rounded-lg">Edit Profile</Link>
        </div>
    );
};

export default MyProfilePage;