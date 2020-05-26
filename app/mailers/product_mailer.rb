class ProductMailer < ApplicationMailer
  def book_code
    @product = params[:product]
    @code = params[:code]
    mail(to: params[:email], subject: 'Бронирование продукта')
  end
end
