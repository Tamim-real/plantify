import React, { useState } from "react";
import { Heart, MessageCircle, Image as ImageIcon, Send } from "lucide-react";

const initialPosts = [
  {
    id: 1,
    userName: "Aarav PlantLover",
    userImage: "https://i.pravatar.cc/100?img=11",
    plantImage:
      "https://media.istockphoto.com/id/1247359811/photo/close-up-of-snake-plants-for-sale.jpg?s=612x612&w=0&k=20&c=brRA3ebqEPedSxm_oOaeGKKtJwfSbUFdGqQRH2UJCXc=",
    caption: "My snake plant is growing beautifully this week! 🌿💚",
    likes: 23,
    liked: false,
  },
  {
    id: 2,
    userName: "Sophia Green",
    userImage: "https://i.pravatar.cc/100?img=15",
    plantImage:
      "https://media.istockphoto.com/id/1320269359/photo/tropical-epipremnum-aureum-marble-queen-pothos-houseplant-in-flower-pot.jpg?s=612x612&w=0&k=20&c=Rc4J3wkUQgd9vN_O7c7wRnbqCy1UUafqRSYLE2KGv_c=",
    caption: "Just repotted my peace lily, it looks so fresh now! 🌸✨",
    likes: 45,
    liked: false,
  },
];

const PlantCommunity = () => {
  const [posts, setPosts] = useState(initialPosts);
  const [newPost, setNewPost] = useState({ caption: "", image: "" });

  // handle image upload (preview)
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setNewPost({ ...newPost, image: URL.createObjectURL(file) });
    }
  };

  // handle new post submission
  const handlePostSubmit = (e) => {
    e.preventDefault();
    if (!newPost.caption || !newPost.image) return;
    const post = {
      id: Date.now(),
      userName: "You",
      userImage: "https://i.pravatar.cc/100?img=3",
      plantImage: newPost.image,
      caption: newPost.caption,
      likes: 0,
      liked: false,
    };
    setPosts([post, ...posts]);
    setNewPost({ caption: "", image: "" });
  };

  // handle like toggle
  const toggleLike = (id) => {
    setPosts(
      posts.map((post) =>
        post.id === id
          ? {
              ...post,
              liked: !post.liked,
              likes: post.liked ? post.likes - 1 : post.likes + 1,
            }
          : post
      )
    );
  };

  return (
    <div className="max-w-2xl mx-auto mt-12 p-4">
      <h2 className="text-3xl font-bold text-green-700 text-center mb-6">
        🌿 Plant Community
      </h2>

      {/* Create Post Box */}
      <form
        onSubmit={handlePostSubmit}
        className="bg-white rounded-2xl shadow-md p-4 mb-8"
      >
        <div className="flex items-start gap-3">
          <img
            src="https://i.pravatar.cc/100?img=3"
            alt="User"
            className="w-10 h-10 rounded-full"
          />
          <div className="flex-1">
            <textarea
              placeholder="Share something about your plants..."
              value={newPost.caption}
              onChange={(e) =>
                setNewPost({ ...newPost, caption: e.target.value })
              }
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            {newPost.image && (
              <img
                src={newPost.image}
                alt="Preview"
                className="mt-2 rounded-lg w-full h-48 object-cover"
              />
            )}
            <div className="flex justify-between mt-3 items-center">
              <label className="flex items-center gap-2 cursor-pointer text-green-600 hover:text-green-700">
                <ImageIcon className="w-5 h-5" />
                <span>Photo</span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
              </label>
              <button
                type="submit"
                className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
              >
                <Send className="w-4 h-4 inline mr-1" /> Post
              </button>
            </div>
          </div>
        </div>
      </form>

      {/* Posts Feed */}
      <div className="space-y-6">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-white shadow-md rounded-2xl overflow-hidden"
          >
            {/* User info */}
            <div className="flex items-center gap-3 p-4">
              <img
                src={post.userImage}
                alt={post.userName}
                className="w-10 h-10 rounded-full"
              />
              <h3 className="font-semibold text-green-800">{post.userName}</h3>
            </div>

            {/* Plant image */}
            <img
              src={post.plantImage}
              alt="Plant"
              className="w-full h-72 object-cover"
            />

            {/* Caption */}
            <div className="p-4">
              <p className="text-gray-700 mb-3">{post.caption}</p>

              {/* Like & Comment */}
              <div className="flex items-center gap-6 text-gray-600">
                <button
                  onClick={() => toggleLike(post.id)}
                  className={`flex items-center gap-1 ${
                    post.liked ? "text-red-500" : "hover:text-red-500"
                  } transition`}
                >
                  <Heart
                    className={`w-5 h-5 ${post.liked ? "fill-red-500" : ""}`}
                  />
                  <span>{post.likes}</span>
                </button>

                <button className="flex items-center gap-1 hover:text-green-600 transition">
                  <MessageCircle className="w-5 h-5" />
                  <span>Comment</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlantCommunity;
