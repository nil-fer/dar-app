# frozen_string_literal: true

class BatchesController < ApplicationController
  before_action :get_outlet

  def create
    @batch = @outlet.batches.build(batch_params)
    @products = @outlet.products

    respond_to do |format|
      if @batch.save
        format.html { redirect_to outlet_products_path(@outlet), notice: 'Updated' }
        format.json { render :show, status: :created, location: @batch }
      else
        format.html { render 'products/index' }
        format.json { render json: @batch.errors, status: :unprocessable_entity }
      end
    end
  end

# TODO разобраться что делает этот метод и правильно ли он работает
  def update
    @batch = @outlet.batches.find(params[:id])
    @products = @outlet.products

    respond_to do |format|
      if @batch.update(batch_params)
        format.html { redirect_to outlet_products_path(@outlet), notice: 'Batch was successfully updated.' }
        format.json { render :show, status: :ok, location: @batch }
      else
        format.html { render 'products/index' }
        format.json { render json: @batch.errors, status: :unprocessable_entity }
      end
    end
  end

  private

  def batch_params
    params.require(:batch).permit(
      :discount,
      :activation_start,
      :activation_end,
      batches_products_attributes: %i[product_id quantity id]
    )
  end

  def get_outlet
    @outlet = Outlet.find(params[:outlet_id])
  end
end
