"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";

import Profile from "@components/ProfileCard";


const page = ({ params }) => {
    const searchParams = useSearchParams()
    const userName = searchParams.get('name')

    const [userPosts, setUserPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch(`/api/users/${params?.id}/posts`);
            const data = await response.json();
            console.log(data);
            setUserPosts(data);
        };

        if (params?.id) fetchPosts();
    }, [params.id]);


    return (
        <section className='section-main pt-24'>

            <div className='flex flex-col items-center bg-white p-5'>
                <Image
                    src={userPosts[0]?.creator.image || 'https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg'}
                    width={120}
                    height={120}
                    alt='profile'
                    className='rounded-full object-contain mb-4'
                />
                <h1 className='text-2xl'>{userName}</h1>
                <p>{userPosts[0]?.creator.email}</p>
            </div>
            <Profile
                data={userPosts}
            />
        </section>

    )
}

export default page