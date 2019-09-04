class Api::UsersController < ApplicationController
    def create
        @user = User.new(user_params)

        if @user.save
            login(@user)
            render :show
        else
            p 'this is an error' 
            render json: @user.errors.full_messages
        end
    end

    def user_params
        params.require(:user).permit(:email, :password)
    end
end
