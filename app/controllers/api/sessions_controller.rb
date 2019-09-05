class Api::SessionsController < ApplicationController
    def create
        # Find user by credentials   
        @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
        # Flash errors, if any.
        # Render :new if invalid credentials (give the user another chance to login)
        if @user.nil?
          flash.now[:errors] = ['Invalid username or password.']
          render json: {message: "no user found"}, status: 422 
        else
        # Log them in and redirect them if we find them
          login(@user)
          render json: {partial: '/api/users/_user.json.jbuilder'}
        end
    
      end

    def destroy
        logout
        render json: {message: "Logout message"}
    end
end
