import Post from "@models/post";
import connectionDB from "@utils/database";
import { NextResponse } from "next/server";

export const POST = async (req, res) => {
    const {title, body, tag, userId} =  await req.json();

    try {
        await connectionDB()
        const newPost = await Post.create({creator: userId, title, body,tag})
        console.log(newPost);
        
        return new NextResponse('Post has been sucessfuly created', {status:201})
    } catch (error) {
        return new NextResponse('Post has not been created, try again later.', {status:500})
    }
}