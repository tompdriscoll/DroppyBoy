Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create, :destroy, :show, :update, :edit]
    resource :session, only: [:create, :destroy, :show]
    resources :uploads, only: [:create, :destroy, :index, :show, :update]
  end

  root "static_pages#root"
end
