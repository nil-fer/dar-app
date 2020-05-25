class OutletsController < ApplicationController

  before_action :set_outlet, only: %i[show edit update destroy]
  before_action :set_company, only: %i[new create]

  def show
    @batch = @outlet.batches.where(
      'DATE(activation_start) = ? AND activation_end > ?' , Date.current.to_s, Time.current
    ).first
    @products = @batch&.products
  end

  def new
    @outlet = @company.outlets.new
  end

  def edit
  end

  def create
    @outlet = @company.outlets.build(outlet_params)

    respond_to do |format|
      if @outlet.save
        format.html { redirect_to company_path(@company), notice: 'Outlet was successfully created.' }
        format.json { render :show, status: :created, location: @outlet }
      else
        format.html { render :new }
        format.json { render json: @outlet.errors, status: :unprocessable_entity }
      end
    end
  end

  def update
    respond_to do |format|
      if @outlet.update(outlet_params)
        format.html { redirect_to company_path(@outlet.company), notice: 'Outler was successfully updated.' }
        format.json { render :show, status: :ok, location: @outlet }
      else
        format.html { render :edit }
        format.json { render json: @outlet.errors, status: :unprocessable_entity }
      end
    end
  end

  def destroy
    @outlet.destroy
    respond_to do |format|
      format.html { redirect_to company_path(@outlet.company), notice: 'Outlet was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private

  def set_outlet
    @outlet = Outlet.find(params[:id])
  end

  def set_company
    @company = Company.find(params[:company_id])
  end

  def outlet_params
    params.require(:outlet).permit(:email, address: %i[city street apartment block])
  end
end
