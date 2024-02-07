import Post from "@models/post";
import connectionDB from "@utils/database";

export const GET = async (req, { params }) => {

    try {
        await connectionDB()

        const posts = await Post.find({ creator: params.id }).populate("creator")

        return new Response(JSON.stringify(posts), { status: 200 })
    } catch (error) {
        return new Response('Failed to fetch posts created by user', { status: 500 })
    }
}