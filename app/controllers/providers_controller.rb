class ProvidersController < ApplicationController

    skip_before_action :authorize, only: [:create]
    
    def index
        providers=Provider.all.order(:last_name)
        render json: providers, status: :ok
    end
    
    def create
        provider = Provider.create!(provider_params)
        if provider.valid?
          render json: provider, status: :created
          session[:provider_id] = provider.id
        else
          render json: { errors: provider.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def show
        if current_provider
            render json: current_provider, status: :created
        else
            render json: {errors: "No current user"}, status: :unauthorized
        end
    end

    private

    def provider_params
        params.permit(:username,
             :password, 
             :password_confirmation, 
             :first_name, :middle_name, 
             :last_name, 
             :type_of_provider, 
             :department)
    end

    # def render_not_found(error)
    #     render json: {errors: "User Not Found"}, status: :render_not_found
    # end  

end
