import { IoHome, IoPeople, IoVideocam } from "react-icons/io5";
import { CgHashtag } from "react-icons/cg";
import AccountList from "./AccountList";

const accountList = [
  {
    name: "Taylor Swift",
    username: "taylorswift",
    image:
      "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/13f2a0d585f3cd8578da0d18c36a18c4~c5_100x100.jpeg?x-expires=1663714800&x-signature=%2FOP5fZQy7raXWbGLgZ5eRRea6k8%3D",
  },
  {
    name: "bbno$",
    username: "bbnotiktok",
    image:
      "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/e27ccadbd7e60c942a164b4b016ab26a~c5_100x100.jpeg?x-expires=1663714800&x-signature=CflwNf9GPDwKrmXSmiccIF8vVf4%3D",
  },
];

const Sidebar = () => {
  return (
    <aside className="w-[356px] py-5 h-screen overflow-auto">
      <ul>
        <li className="hover:bg-zinc-50 rounded cursor-pointer text-lg font-semibold p-3 flex items-center gap-x-3">
          <IoHome size={24} />
          For You
        </li>
        <li className="hover:bg-zinc-50 rounded cursor-pointer text-lg font-semibold p-3 flex items-center gap-x-3">
          <IoPeople size={24} />
          Following
        </li>
        <li className="hover:bg-zinc-50 rounded cursor-pointer text-lg font-semibold p-3 flex items-center gap-x-3">
          <IoVideocam size={24} />
          LIVE
        </li>
      </ul>
      <div className="border-y py-6 my-6">
        <div className="mb-4 text-zinc-400">
          Log in to follow creators, like videos, and view comments.
        </div>
        <button className="py-3 border-red-400 border rounded text-red-400 text-lg font-semibold block w-full hover:bg-red-50">
          Log in
        </button>
      </div>
      <div className="mb-6 border-b pb-6">
        <div className="text-zinc-700 text-sm mb-3">Suggested accounts</div>
        <ul>
          {accountList.map((item) => {
            return <AccountList {...item} />;
          })}
        </ul>
        <a className="font-semibold text-sm text-red-500">See all</a>
      </div>
      <div>
        <div className="text-zinc-700 text-sm mb-3">Discover</div>
        <div className="flex flex-wrap gap-3">
          <a className="text-sm font-light text-zinc-700 border rounded-full px-2 py-1 flex items-center grow-0">
            <CgHashtag />
            Dubstep
          </a>
          <a className="text-sm font-light text-zinc-700 border rounded-full px-2 py-1 flex items-center grow-0">
            <CgHashtag />
            Lofi
          </a>
          <a className="text-sm font-light text-zinc-700 border rounded-full px-2 py-1 flex items-center grow-0">
            <CgHashtag />
            Deadpool 2
          </a>
          <a className="text-sm font-light text-zinc-700 border rounded-full px-2 py-1 flex items-center grow-0">
            <CgHashtag />
            Matrix
          </a>
          <a className="text-sm font-light text-zinc-700 border rounded-full px-2 py-1 flex items-center grow-0">
            <CgHashtag />
            Dubstep never dies
          </a>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
