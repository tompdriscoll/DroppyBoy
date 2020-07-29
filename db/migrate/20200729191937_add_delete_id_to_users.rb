class AddDeleteIdToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :delete_id, :integer
  end
end
