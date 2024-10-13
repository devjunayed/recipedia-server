import { Followers } from './follow.model'
import { ObjectId } from 'mongodb'

const toggleFollowersIntoDB = async (userId: string, followingId: string) => {
  const user = await Followers.findOne({
    userId: followingId,
    'followersId.followerId': new ObjectId(userId),
  })

  if (user) {
    const updatedUser = await Followers.findOneAndUpdate(
      { userId: followingId },
      { $pull: { followersId: { followerId: new ObjectId(userId) } } },
      { new: true },
    )
    return { status: 'unfollowed', updatedUser }
  }

  const updatedUser = await Followers.findOneAndUpdate(
    { userId: followingId },
    { $addToSet: { followersId: { followerId: userId } } },
    { new: true, upsert: true },
  )
  return { status: 'followed', updatedUser }
}

export const FollowersServices = {
  toggleFollowersIntoDB,
}
