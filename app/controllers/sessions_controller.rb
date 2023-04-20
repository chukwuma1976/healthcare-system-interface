class SessionsController < ApplicationController

    skip_before_action :authorize, only: [:create]

    def create
        provider = Provider.find_by(username: params[:username])

        if provider&.authenticate(params[:password])
            session[:provider_id] = provider.id
            render json: provider, status: :created
        else
            render json: { errors: "Invalid username or password" }, status: :unauthorized
        end   
    end

    def destroy
        if current_provider
            session.delete(:provider_id)
            head :no_content
        else
            render json: { errors: ["Not authorized"] }, status: :unauthorized
        end
    end

end
