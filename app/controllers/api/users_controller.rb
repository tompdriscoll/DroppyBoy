class Api::UsersController < ApplicationController
    def create
        @user = User.new(user_params)
        p @user
        if @user.save
            login(@user)
            render :show
        else
            p 'this is an error' 
            render json: @user.errors.full_messages, status: 422
        end
    end

    def show
        @user = User.with_attached_uploaded_files.find(params[:id])
        render :show
    end

    def edit
        @user = User.find(params[:id])
        render :edit
    end

    def update      
       @user = current_user
       if @user.update(user_params)
        p @user
         render :show
         if @user.uploaded_files.find_by(id:@user.delete_id)
            @user.uploaded_files.find_by(id:@user.delete_id).purge
         end
       else
         flash.now[:errors] = @user.errors.full_messages
         render :show
       end
    end

    def user_params
        params.require(:user).permit(:first_name, :last_name, :email, :password, :delete_id, uploaded_files: [])
    end
end
