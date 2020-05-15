# frozen_string_literal: true

class Outlet < ApplicationRecord
  has_one :user
  belongs_to :company
  has_many :products, dependent: :destroy
  has_many :batches, dependent: :destroy
end
