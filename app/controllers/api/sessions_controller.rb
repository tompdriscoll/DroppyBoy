class Api::SessionsController < ApplicationController
    def create
        # Find user by credentials   
        @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
        # Flash errors, if any.
        # Render :new if invalid credentials (give the user another chance to login)
        if @user.nil?
          flash.now[:errors] = ['Invalid username or password.']
          render json: {message: "No user found"}, status: 422 
        else
        # Log them in and redirect them if we find them
          login(@user)
          render 'api/users/show'
          
        end
    
      end

    def destroy
        logout
        render json: {message: "Logout message"}
    end
end
