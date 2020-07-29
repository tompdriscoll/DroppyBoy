json.extract! user, :id, :first_name, :last_name, :email, :uploaded_files, :delete_id
json.files user.uploaded_files.map { |file| {
    id: file.id,
    file: url_for(file), 
    name: file.filename, 
    time: file.created_at,
    type: file.content_type,
    size: file.byte_size 
    } 
}
