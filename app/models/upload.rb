class Upload < ApplicationRecord
    validates :name, :type, :path, :uploader_id, presence: true

    belongs_to :uploader,
    class_name :User

    IMAGE_SUFFIXES = ['.gif', '.jpg', '.png']
    def get_type
        
    end
end