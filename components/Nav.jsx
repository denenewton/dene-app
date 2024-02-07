import ButtonLogin from "./ButtonLogin"
import ImagemProfile from "./ImagemProfile"
import Link from "next/link"
import SignInGoogleGitHub from "./SignInGoogleGitHub"
import { getServerSession } from "next-auth"

const Nav = async () => {
  const session = await getServerSession()
  console.log(session);
  return (
    <div className="w-full navbar bg-slate-50 fexed">
      <div className="flex-1">
        <Link href="/" className="btn btn-ghost sm:text-xl text-base hover:bg-transparent hover:underline underline-offset-2">Dene@newton</Link>
      </div>
      {/* <div className="form-control sm:flex hidden">
          <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
        </div> */}
      <div className="flex-none gap-2">
        <SignInGoogleGitHub />
        <div className="dropdown dropdown-end">
          <ImagemProfile />
          <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">

            {
              session?.user && (
                <>
                  <li>
                    <Link href="/profile" className="justify-between">
                      Profile
                      <span className="badge">New</span>
                    </Link>
                  </li>
                  <li><Link href="/create-post">Create Post</Link></li>
                  <li><Link href="/update-post">Update Post</Link></li>
                </>
              )
            }
            <li><ButtonLogin /></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Nav




























// const Nav = () => {
//   const { data: session } = useSession()
//   return (
//     <nav className='flex w-full justify-between items-center h-12 bg-violet-100 fixed px-4 '>
//       <Link href='/'>
//         <p className='text-xl font-sans font-medium'>App.com</p>
//       </Link>
//       <div className={'flex gap-2 items-center'}>
//         <Link
//           href='/create-post'
//         >
//           <p className='px-4 bg-black text-white text-sm  rounded-full py-2'>
//             Create Post
//           </p>
//         </Link>
//         <ButtonLogin />
//         {
//           session && (
//             <Link href='profile'>
//               <Image
//                 src={session?.user.image || '/assets/images/login.png'}
//                 width={37}
//                 height={37}
//                 alt='profile'
//                 className='rounded-full object-contain'
//               />
//             </Link>
//           )
//         }
//       </div>
//     </nav>
//   )
// }

// export default Nav




// function ButtonLogin() {
//   const { data: session } = useSession()
//   if (session) {
//     return (
//       <>
//         <button
//           className='px-4 bg-black text-white text-sm  rounded-full py-2'
//           onClick={() => signOut()}
//         >
//           Sign out
//         </button>
//       </>
//     )
//   }
//   return (
//     <>
//       <button
//         className='px-4 bg-black text-white text-sm  rounded-full py-2'
//         onClick={() => signIn()}
//       >
//         Sign in
//       </button>
//     </>
//   )
// }