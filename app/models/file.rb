class File < ApplicationRecord
    validates :name, :type, :path

    IMAGE_SUFFIXES = ['.gif', '.jpg', '.png']
    def get_type
        @path.end_with?
    end
end