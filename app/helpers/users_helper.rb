# frozen_string_literal: true

module UsersHelper
  def navbar_path(user)
    case user.role
    when 'admin'
      root_path
    when 'retailer'
      company_path(user.company)
    when 'manager'
      outlet_products_path(outlet_id: user.outlet_id)
    else
      root_path
    end
  end
end
