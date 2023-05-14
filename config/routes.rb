Rails.application.routes.draw do 

  resources :patients do
    resources :charts, only: :index
    resources :pictures, only: [:create, :update]
    resources :history_and_physicals
    resources :consults
    resources :discharge_notes
    resources :procedure_notes
    resources :operative_reports
    resources :progress_notes
  end
  resources :appointments
  resources :providers, only: [:index, :show] do
    resources :patients , only: :index
  end

  post '/login', to: 'sessions#create'
  post '/signup', to: 'providers#create'
  get '/me', to: 'providers#show'
  delete '/logout', to: 'sessions#destroy'

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
