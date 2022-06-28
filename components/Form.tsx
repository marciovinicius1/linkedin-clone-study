import { useSession } from "next-auth/react";
import React, { FormEvent, useState } from "react";
import { useRecoilState } from "recoil";
import { modalState } from "../atoms/modalAtom";
import { handlePostState } from "../atoms/postAtom";

// import { Container } from './styles';

const Form: React.FC = () => {
  const [input, setInput] = useState<string>("");
  const [photoUrl, setPhotoUrl] = useState<string>("");
  const { data: session } = useSession();

  const [modalOpen, setModalOpen] = useRecoilState(modalState);
  const [handlePost, setHandlePost] = useRecoilState(handlePostState);

  const uploadPost = async (event: FormEvent) => {
    event.preventDefault();

    const response = await fetch("/api/posts", {
      method: "POST",
      body: JSON.stringify({
        input: input,
        photoUrl: photoUrl,
        username: session?.user?.name,
        email: session?.user?.email,
        userImg: session?.user?.image,
        createdAt: new Date().toString(),
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const responseData = await response.json();
    console.log(responseData);

    setHandlePost(true);
    setModalOpen(false);
  };

  return (
    <form
      className="flex flex-col relative space-y-2 text-black/80 
    dark:text-white/75"
    >
      <textarea
        rows={4}
        placeholder="What do you want to talk? ✨"
        className="bg-transparent focus:outline-none dark:placeholder-white/75
        "
        value={input}
        onChange={(event) => setInput(event.target.value)}
      />
      <input
        type="text"
        placeholder="Add a photo URL (Optional)"
        className="bg-transparent focus:outline-none truncate
        max-w-xs md:max-w-sm dark:placeholder-white/75"
        value={photoUrl}
        onChange={(event) => setPhotoUrl(event.target.value)}
      />

      <button
        className="absolute bottom-0 right-0 font-medium bg-blue-400 hover:bg-blue-500 
      disabled:text-black/40 disabled:bg-white/75 disabled:cursor-not-allowed text-white
      rounded-full px-3 py-1 m-2"
        disabled={!input.trim() && !photoUrl.trim()}
        type="submit"
        onClick={uploadPost}
      >
        Post
      </button>
    </form>
  );
};

export default Form;
