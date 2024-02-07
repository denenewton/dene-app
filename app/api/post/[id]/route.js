import Post from "@models/post";
import connectionDB from "@utils/database";
import { NextResponse } from "next/server";

export const DELETE = async (req, { params }) => {
    console.log(params?.id)

    try {
        await connectionDB();
        await Post.findByIdAndDelete(params?.id)
        
        return new NextResponse('OK', { status: 200 })
    } catch (error) {
        return new NextResponse('Failed to remove', { status: 500 })
    }
};

export const PATCH = async (req, { params }) => {
    const { title, body, tag } = await req.json();

    try {
        await connectionDB();

        // Find the existing prompt by ID
        const existingPost = await Post.findById(params?.id);

        if (!existingPost) {
            return new NextResponse("Prompt not found", { status: 404 });
        }

        // Update the prompt with new data
        existingPost.title = title;
        existingPost.body = body;
        existingPost.tag = tag;

        await existingPost.save();

        return new NextResponse("Successfully updated the Prompts", { status: 200 });
    } catch (error) {
        return new NextResponse("Error Updating Prompt", { status: 500 });
    }
};

export const GET = async (req, { params }) => {

    if (!params) return

    try {
        await connectionDB()
        const post = await Post.findById(params.id).populate("creator")

        if (!post) return new NextResponse("Prompt Not Found", { status: 404 });
        console.log(post);

        return new NextResponse(JSON.stringify(post), { status: 200 })

    } catch (error) {
        return new NextResponse("Internal Server Error", { status: 500 });
    }

}







//65c1441d1ce1009b76457526