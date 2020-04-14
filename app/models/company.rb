# frozen_string_literal: true

class Company < ApplicationRecord
  belongs_to :user
  has_many :outlets
end
