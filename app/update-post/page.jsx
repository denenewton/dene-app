"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import Form from "@components/Form";

const Updatepost = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const postId = searchParams.get("id");

  const [post, setPost] = useState({ title: '', body: '', image: '', tag: '' });
  const [submitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const getpostDetails = async () => {
      const response = await fetch(`/api/post/${postId}`);
      const data = await response.json();

      setPost({
        title: data.title,
        body: data.body,
        tag: data.tag,
      });
    };

    if (postId) getpostDetails();
  }, [postId]);

  const updatepost = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!postId) return alert("Missing postId!");

    try {
      const response = await fetch(`/api/post/${postId}`, {
        method: "PATCH",
        body: JSON.stringify({
          title:post.title,
          body: post.body,
          tag: post.tag,
        }),
      });

      if (response.ok) {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form
      type='Edit'
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={updatepost}
    />
  );
};

export default Updatepost;
