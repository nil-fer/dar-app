# frozen_string_literal: true

class Ability
  include CanCan::Ability

  def initialize(user)
    alias_action :create, :read, :update, :destroy, :to => :crud

    user ||= User.new # guest user (not logged in)

    if user.role == 'admin'
      can :manage, :all

    elsif user.role == 'retailer'
      can :manage, Company, :id => user.company_id
      can :manage, Outlet, :company_id => user.company_id

    elsif user.role == 'manager'
      can :manage, [Batch, Product], :outlet_id => user.outlet_id
      can [:read, :update], Outlet, :id => user.oulet_id

    else
      can :read, [Outlet, Batch, Product]
      cannot :index, User
    end
  end
end
