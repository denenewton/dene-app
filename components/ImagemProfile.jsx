'use client'

import { useSession } from "next-auth/react"
import Image from "next/image"


const ImagemProfile = () => {
    const { data: session } = useSession()
    return (
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-[40px] rounded-full">
                <Image 
                width={100}
                height={100}
                alt="profile" 
                className='object-cover'
                src={session?.user.image || 'https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg'} 
                />
            </div>
        </div>
    )
}

export default ImagemProfile

//