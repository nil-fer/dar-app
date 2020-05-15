# frozen_string_literal: true

class Company < ApplicationRecord
  has_one :user
  has_many :outlets, dependent: :destroy

  mount_uploader :company_cover, CompanyCoverUploader

  enum company_category: ['Продуктовый магазин', 'Пекарня', 'Кофейня', 'Ресторан']
end
