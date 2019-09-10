class AddColumnFiles < ActiveRecord::Migration[5.2]
  def change
    add_column :files, :uploader_id, :integer
  end
end
