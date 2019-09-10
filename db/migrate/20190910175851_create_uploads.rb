class CreateUploads < ActiveRecord::Migration[5.2]
  def change
    create_table :uploads do |t|
      t.string :name, null: false
      t.string :path, null: false
      t.string :type, null: false
      t.integer :uploader_id, null: false

      t.timestamps
    end
  end
end
