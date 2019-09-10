class File < ApplicationRecord
    validates :name, :type, :path, :uploader_id, presence: true

    IMAGE_SUFFIXES = ['.gif', '.jpg', '.png']
    def get_type
        
    end
end