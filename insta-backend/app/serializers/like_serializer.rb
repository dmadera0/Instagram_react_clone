class LikeSerializer < ActiveModel::Serializer
  attributes :id, :totalLikes, :user_id, :post_id
end
