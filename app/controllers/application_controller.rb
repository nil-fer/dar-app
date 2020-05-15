# frozen_string_literal: true

class ApplicationController < ActionController::Base

  protected

  def after_sign_in_path_for(resource)
    if resource.role == 'admin'
      root_path
    elsif resource.role == 'retailer'
      company_path(resource.company)
    elsif resource.role == 'manager'
      outlet_products_path(resource.outlet)
    else
      root_path
    end
  end
end
