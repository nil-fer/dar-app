# frozen_string_literal: true

class Product < ApplicationRecord
  has_many :batches_products, dependent: :destroy
  has_many :batches, through: :batches_products
  belongs_to :outlet

  mount_uploader :product_pic, ProductPicUploader

  # data enumerizers
  enum weight_type: ['на вес', 'в порциях']

  enum category: ['Кулинария', 'Бакалея', 'Вегетарианское', 'Напитки', 'Сладкое']
end
