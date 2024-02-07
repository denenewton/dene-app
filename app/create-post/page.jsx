'use client'

import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import Form from "@components/Form"
import { useState } from "react"
import Link from "next/link"

const page = () => {
    const [post, setPost] = useState({ title: '', body: '', tag: '' })
    const [submitting, setIsSubmitting] = useState(false)
    const { data: session } = useSession()
    const router = useRouter()

    const onSubimit = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)
        console.log(post);

        try {
            const resp = await fetch('/api/post/new', {
                method: 'POST',
                body: JSON.stringify({
                    ...post,
                    userId: session?.user.id
                })
            })
            if (resp.ok) {
                router.push('/')
            }
        } catch (error) {
            console.log(error);
        } finally {
            setIsSubmitting(false)
        }

    }

    return (
        <Form
            type='Create'
            post={post}
            setPost={setPost}
            submitting={submitting}
            handleSubmit={onSubimit}
        />
    )
}

export default page









    // <section className='section-main pt-24'>
    //     <h1 className='head_text text-left'>
    //         <span className='dark_gradient'>Create Post</span>
    //     </h1>


    //     <form
    //         onSubmit={onSubimit}
    //         className="w-full max-w-2xl  flex flex-col gap-4  mt-4 px-4">
    //         <label htmlFor="titleId" className='max-w-2xl  flex flex-col' >
    //             <span className='font-montserrat font-semibold text-base text-gray-700'>
    //                 Title
    //             </span>
    //             <input
    //                 type="text"
    //                 id='titleId'
    //                 value={post.title}
    //                 onChange={(e) => setPost({ ...post, title: e.target.value })}
    //                 className=' bg-violet-50 w-full flex rounded-lg h-9 mt-2 p-3 text-sm bg-violet-50 text-gray-500 outline-0' />
    //         </label>
    //         <label htmlFor="bodyId" className='max-w-2xl flex flex-col'>
    //             <span className='w-full font-montserrat font-semibold text-base text-gray-700'>
    //                 Body
    //             </span>

    //             <textarea
    //                 id="bodyId"
    //                 value={post.body}
    //                 onChange={(e) => setPost({ ...post, body: e.target.value })}
    //                 className='w-full flex rounded-lg h-[200px] mt-2 p-3 text-sm bg-violet-50 text-gray-500 outline-0' />
    //         </label>
    //         <label htmlFor="tagId" className='max-w-2xl flex flex-col'>
    //             <span className='font-montserrat font-semibold text-base text-gray-700'>
    //                 Tag
    //             </span>
    //             <input
    //                 type="text"
    //                 id='tagId'
    //                 value={post.tag}
    //                 onChange={(e) => setPost({ ...post, tag: e.target.value })}
    //                 className=' bg-violet-50 w-full flex rounded-lg h-9 mt-2 p-3 text-sm bg-violet-50 text-gray-500 outline-0' />
    //         </label>
    //         <div className='flex justify-end items-center  my-5 gap-4 '>
    //             <Link href='/' className='text-gray-600'>Cancel </Link>
    //             <button type="submit" className='px-5 py-1.5 text-sm bg-violet-500 text-white rounded-xl'>
    //                 Submit
    //             </button>
    //         </div>
    //     </form>
    // </section >