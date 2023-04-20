Rails.application.routes.draw do  
  resources :consults
  resources :discharge_notes
  resources :procedure_notes
  resources :operative_reports
  resources :progress_notes
  resources :patients do
    resources :charts, only: :index
    resources :history_and_physicals
  end
  resources :appointments
  resources :providers, only: [:index, :show] do
    resources :patients , only: :index
  end

  post '/login', to: 'sessions#create'
  post '/signup', to: 'providers#create'
  get '/me', to: 'providers#show'
  delete '/logout', to: 'sessions#destroy'
end
