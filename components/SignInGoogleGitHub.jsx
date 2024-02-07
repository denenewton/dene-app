'use client'

import { signOut, signIn, useSession } from "next-auth/react"
import Link from "next/link"


const SignInGoogleGitHub = () => {
    const { data: session } = useSession()
    return (
        <ul className="menu menu-horizontal px-1">
            { !session ? (
                <>
                    <li>
                        <Link href='#'>
                            <span onClick={() => signIn('google')}>
                                Sign in Google
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link href='#'>
                            <span onClick={() => signIn('github')}>
                                Sign in GitHub
                            </span>
                        </Link>
                    </li>
                </>
            ) : (
                <>
                    <li>
                        <Link href='#'>
                            <span onClick={() => signOut()}>
                                Sign Out
                            </span>
                        </Link>
                    </li>

                </>
            )}
        </ul>
    )
}

export default SignInGoogleGitHub

