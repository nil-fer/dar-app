Rails.application.routes.draw do
  resources :batches
  resources :categories
  resources :products
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  get '/tagged', to: "categories#tagged", as: :tagged

  root 'categories#index'
end
