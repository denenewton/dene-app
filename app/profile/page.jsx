"use client";

import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from 'next/image'

import ProfileCard from '@components/ProfileCard'

const page = () => {
  const router = useRouter();
  const { data: session } = useSession();

  const [myPosts, setMyPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/users/${session?.user.id}/posts`);
      const data = await response.json();

      setMyPosts(data);
    };

    if (session?.user.id) fetchPosts();
  }, [session?.user.id]);

  const handleEdit = (post) => {
    router.push(`/update-post?id=${post._id}`);
  };

  const handleDelete = async (post) => {
    const hasConfirmed = confirm(
      "Are you sure you want to delete this post?"
    )

    if (hasConfirmed) {
      try {
        await fetch(`/api/post/${post?._id.toString()}`, { method: "DELETE", });
        console.log(post?._id);
        const filteredPosts = myPosts.filter((item) => item._id !== post._id);

        setMyPosts(filteredPosts);
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <section className='section-main pt-24'>

      <div className='flex flex-col items-center bg-white p-5'>
        <Image
          src={session?.user.image || '/assets/images/login.png'}
          width={120}
          height={120}
          alt='profile'
          className='rounded-full object-contain mb-4'
        />
        <h1 className='text-2xl'>{session?.user.name}</h1>
        <p>{session?.user.email}</p>
      </div>

      <ProfileCard
        data={myPosts}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />

    </section>
  )
}

export default page