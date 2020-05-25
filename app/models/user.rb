# frozen_string_literal: true
class User < ActiveRecord::Base
  belongs_to :company, optional: true
  belongs_to :outlet, optional: true

  devise :invitable, :database_authenticatable, :registerable, :recoverable, :rememberable, :validatable
end
