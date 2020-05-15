class RemoveMoreUserIds < ActiveRecord::Migration[5.2]
  def change
    remove_column :batches, :user_id, :integer
    remove_column :products, :user_id, :integer
    remove_column :outlets, :outlet_category, :integer
  end
end
