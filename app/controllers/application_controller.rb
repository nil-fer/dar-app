# frozen_string_literal: true

class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  before_action :configure_permitted_parameters, if: :devise_controller?

  protected

  def configure_permitted_parameters
    devise_parameter_sanitizer.permit :invite, keys: [:role, :company_id, :outlet_id]
  end

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
