class CreateFiles < ActiveRecord::Migration[5.2]
  def change
    create_table :files do |t|
      t.string :name, null: false
      t.string :path, null: false
      t.string :type, null: false

      t.timestamps
    end
  end
end
