class Post < ActiveRecord::Base
  attr_accessible :body, :title, :post_image
  has_attached_file :post_image, :styles => {:bord => "821x410>"}
  validates_attachment_presence :post_image
  validates_attachment_content_type :post_image, :content_type => ['image/jpeg', 'image/png', 'image/gif']
  validates_attachment_presence :post_image
end
