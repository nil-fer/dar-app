# frozen_string_literal: true

class ProductsController < ApplicationController
  before_action :get_outlet, except: :book
  before_action :set_product, only: %i[edit update destroy]

  def index
    @batch = @outlet.batches.where('DATE(activation_start) = ?' , Date.current.to_s).first
    @batch ||= @outlet.batches.build
    @products = @outlet.products
  end

  def new
    @product = @outlet.products.build
  end

  def edit; end

  def create
    @product = @outlet.products.build(product_params)

    respond_to do |format|
      if @product.save
        format.html { redirect_to outlet_products_path(@outlet), notice: 'Продукт добавлен.' }
        # format.json { render :index, status: :created, location: @product }
      else
        format.html { render :new, notice: 'Ошибка' }
        format.json { render json: @product.errors, status: :unprocessable_entity }
      end
    end
  end

  def update
    respond_to do |format|
      if @product.update(product_params)
        format.html { redirect_to outlet_products_path(@outlet), notice: 'Product was successfully updated.' }
        # format.json { render :show, status: :ok, location: @product }
      else
        format.html { render :edit }
        format.json { render json: @product.errors, status: :unprocessable_entity }
      end
    end
  end

  def destroy
    @product.destroy
    respond_to do |format|
      format.html { redirect_to outlet_products_path(@outlet), notice: 'Product was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  def book
    @product = Product.find(params[:id])
    ProductMailer.with(
      product: @product, email: params[:email], code: params[:code]
    ).book_code.deliver_later

    head :no_content
  end

  private

  def set_product
    @product = @outlet.products.find(params[:id])
  end

  def get_outlet
    @outlet = Outlet.find(params[:outlet_id])
  end

  def product_params
    params.require(:product).permit(
      :name,
      :price,
      :weight_type,
      :weight_amount,
      :product_pic,
      :category
    )
  end
end
