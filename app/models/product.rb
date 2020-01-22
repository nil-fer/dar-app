class Product < ApplicationRecord
  has_one :category
  belongs_to :batch

  validates :category_id, :name, presence: true
end
