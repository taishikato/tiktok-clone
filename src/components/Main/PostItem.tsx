import type { User, Post } from "./Main";
import {
  IoMusicalNotes,
  IoHeart,
  IoChatbubbleEllipses,
  IoArrowRedo,
} from "react-icons/io5";

const PostItem = ({ user, post }: { user: User; post: Post }) => {
  return (
    <div className="flex gap-x-4 mt-5 mx-3 border-b pb-8">
      <div className="w-[56px]">
        <img src={user.image} width="56" className="rounded-full" />
      </div>
      <div className="">
        <div className="flex items-baseline gap-x-2">
          <div className="font-semibold text-lg">{user.username}</div>
          <div className="text-sm">{user.name}</div>
        </div>
        <div className="mb-2">{post.description}</div>
        <div className="font-semibold flex items-center gap-x-2 mb-3">
          <IoMusicalNotes />
          {post.music}
        </div>
        <div className="flex gap-x-6 items-end">
          <div className="w-[300px] h-[540px]">
            <video
              className="w-full h-full object-cover rounded-lg"
              autoPlay
              controls
            >
              <source src={post.video} type="video/mp4" />
            </video>
          </div>
          <div className="flex flex-col gap-y-3">
            <div className="flex flex-col gap-y-1">
              <button className="w-[48px] h-[48px] rounded-full bg-zinc-200 flex items-center justify-center">
                <IoHeart size={24} />
              </button>
              <div className="font-semibold text-xs text-gray-600 text-center">
                {post.likes}
              </div>
            </div>
            <div className="flex flex-col gap-y-1">
              <button className="w-[48px] h-[48px] rounded-full bg-zinc-200 flex items-center justify-center">
                <IoChatbubbleEllipses size={24} />
              </button>
              <div className="font-semibold text-xs text-gray-600 text-center">
                {post.comments}
              </div>
            </div>
            <div className="flex flex-col gap-y-1">
              <button className="w-[48px] h-[48px] rounded-full bg-zinc-200 flex items-center justify-center">
                <IoArrowRedo size={24} />
              </button>
              <div className="font-semibold text-xs text-gray-600 text-center">
                {post.share}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[88px]">
        <button className="py-1 border-red-400 border rounded text-red-400 text-base font-semibold w-full hover:bg-red-50">
          Follow
        </button>
      </div>
    </div>
  );
};

export default PostItem;
