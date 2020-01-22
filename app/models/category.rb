class Category < ApplicationRecord
  acts_as_taggable_on :tags
  has_many :products
end
