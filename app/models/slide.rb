class Slide < ActiveRecord::Base
  attr_accessible :name, :slide_image
  has_attached_file :slide_image, :styles => {:bord => "821x410>"}
  validates_attachment_presence :slide_image
  validates_attachment_content_type :slide_image, :content_type => ['image/jpeg', 'image/png', 'image/gif']
  validates_attachment_presence :slide_image
end
