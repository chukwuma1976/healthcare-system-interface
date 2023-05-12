Rails.application.routes.draw do 

  # namespace :api do 
    resources :patients, only: [:create, :update, :delete] do
      # resources :charts, only: :index
      resources :pictures, only: [:create, :update]
      resources :history_and_physicals
      resources :consults
      resources :discharge_notes
      resources :procedure_notes
      resources :operative_reports
      resources :progress_notes
    end
    resources :appointments, only: [:create, :update, :destroy]
    resources :providers, only: [:index, :show] do
      resources :patients , only: :index
    end

    get '/this_patient/:patient_id/chart', to: 'charts#index'
    get '/this_patient/:id', to: 'patients#show'
    get '/all_patients', to: 'patients#index'
    get '/all_appointments', to: 'appointments#index'
    get '/this_appointment/:id', to: 'appointments#show'

    post '/login', to: 'sessions#create'
    post '/signup', to: 'providers#create'
    get '/me', to: 'providers#show'
    delete '/logout', to: 'sessions#destroy'
  # end

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
