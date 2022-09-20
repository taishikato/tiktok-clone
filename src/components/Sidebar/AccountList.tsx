import { IoCheckmarkCircle } from "react-icons/io5";

const AccountList = ({
  name,
  username,
  image,
}: {
  name: string;
  username: string;
  image: string;
}) => {
  return (
    <li className="cursor-pointer p-2 rounded flex items-center gap-x-3 hover:bg-zinc-50">
      <img src={image} width="32" className="rounded-full" />
      <div>
        <div className="font-semibold flex items-center">
          {username}
          <IoCheckmarkCircle />
        </div>
        <div className="text-xs text-zinc-400">{name}</div>
      </div>
    </li>
  );
};

export default AccountList;
