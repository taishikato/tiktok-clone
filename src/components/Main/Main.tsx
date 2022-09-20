import PostItem from "./PostItem";

export type User = {
  name: string;
  username: string;
  image: string;
};

export type Post = {
  description: string;
  music: string;
  video: string;
  likes: number;
  comments: number;
  share: number;
};

const postItems: { user: User; post: Post }[] = [
  {
    user: {
      username: "taishi",
      name: "Taishi",
      image:
        "https://pbs.twimg.com/profile_images/1522396501686644736/zyijW7ya_400x400.jpg",
    },
    post: {
      description: "Dubstep never dies!",
      music: "Skrillex - Scary Monsters and Nice Sprites",
      video: "/v-place.mp4",
      likes: 3437,
      comments: 54,
      share: 2,
    },
  },
  {
    user: {
      username: "john123",
      name: "John",
      image:
        "https://pbs.twimg.com/profile_images/1494040419579023361/eshW1P8T_400x400.jpg",
    },
    post: {
      description: "I can fly!",
      music: "Natasha Ghosh -  Palm Trees",
      video: "/ski.mp4",
      likes: 5037,
      comments: 154,
      share: 97,
    },
  },
];

const Main = () => {
  return (
    <main className="flex-1">
      {postItems.map((item) => {
        return <PostItem user={item.user} post={item.post} />;
      })}
    </main>
  );
};

export default Main;
