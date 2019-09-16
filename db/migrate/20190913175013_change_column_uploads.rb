class ChangeColumnUploads < ActiveRecord::Migration[5.2]
  def change
    rename_column :uploads, :type, :upload_type
  end
end
