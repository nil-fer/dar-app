# frozen_string_literal: true

Rails.application.routes.draw do
  root 'pages#home_page'
  get 'pages/home_page'

  devise_for :users, skip: [:registrations]
  as :user do
    get 'users/cancel' => 'devise/registrations#cancel', as: 'cancel_user_registration'
    get 'users/edit' => 'devise/registrations#edit', as: 'edit_user_registration'
    put 'users' => 'devise/registrations#update', as: 'user_registration'
    delete 'users' => 'devise/registrations#destroy', as: 'delete_user_registration'
  end

  resources :products, only: [] do
    post :book, on: :member
  end

  resources :companies
  resources :users, only: :index

  resources :outlets, except: :index do
    resources :products, except: :show
    resources :batches, only: %i[create update]
  end
end
