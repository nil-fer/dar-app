class AppTables < ActiveRecord::Migration[6.0]
  def change
    create_table :companies do |t|
      t.string :company_name
      t.string :logo
      t.string :company_cover
      t.integer :company_category

      t.timestamps
    end

    create_table :products do |t|
      t.string :name
      t.integer :price
      t.integer :weight_type
      t.string :weight_amount
      t.string :product_pic
      t.integer :category
      t.integer :outlet_id

      t.timestamps
    end

    create_table :batches do |t|
      t.datetime :activation_start
      t.datetime :activation_end
      t.integer :discount
      t.integer :outlet_id

      t.timestamps
    end

    create_table :batches_products do |t|
      t.references :batch, foreign_key: true
      t.references :product, foreign_key: true
      t.integer :quantity, default: 0

      t.timestamps
    end

    create_table :outlets do |t|
      t.json :address
      t.integer :company_id
      t.string :email
    end
  end
end
