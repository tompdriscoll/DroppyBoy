json.extract! user, :id, :first_name, :last_name, :email, :uploaded_files
json.photoUrls user.uploaded_files.map { |file| url_for(file) }