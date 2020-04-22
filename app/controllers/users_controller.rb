  # frozen_string_literal: true

class UsersController < ApplicationController
  load_and_authorize_resource

  #TO DO посмотреть что делает этот метод и нужен ли он
  def index
    @users = User.all
  end
end
