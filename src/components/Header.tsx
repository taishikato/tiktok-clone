import { IoAdd, IoEllipsisVertical } from "react-icons/io5";

const Header = () => {
  return (
    <div className="w-full border-b">
      <div className="w-[1150px] mx-auto flex py-3 justify-between items-center">
        <div>
          <img
            src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a9/TikTok_logo.svg/2560px-TikTok_logo.svg.png"
            width="118"
          />
        </div>
        <div className="w-[362px]">
          <input
            type="text"
            className="w-full px-4 py-3 bg-zinc-100 rounded-full text-lg"
            placeholder="Search accounts and videos"
          />
        </div>
        <div className="flex items-center gap-x-5">
          <div className="rounded text-lg font-semibold px-6 py-2 border flex items-center gap-x-1">
            <IoAdd size={25} />
            Upload
          </div>
          <div className="rounded text-lg font-semibold px-6 py-2 bg-rose-500 text-white">
            Log in
          </div>
          <div>
            <IoEllipsisVertical />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
