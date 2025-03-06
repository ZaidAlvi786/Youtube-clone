import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    googleId: { type: String, unique: true, sparse: true },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    avatar: { type: String, default: "" },
    subscriptions: [{ type: String }], // ✅ List of subscribed YouTube Channel IDs
    watchHistory: [{ videoId: String, title: String, thumbnail: String, watchedAt: Date }], // ✅ Store watched videos
  },
  { timestamps: true }
);

export default mongoose.models.User || mongoose.model("User", UserSchema);
