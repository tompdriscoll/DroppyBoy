class Api::UploadsController < ApplicationController
    def create
        @upload = Upload.new(upload_params)
        @upload.uploader_id = current_user.id

        if @upload.save
            render :show
        else
            p 'this is an error' 
            render json: @upload.errors.full_messages, status: 422
        end
    end

    def index

    end

    def show

    end

    def update

    end

    def destroy

    end

    def upload_params
        params.require(:upload).permit(:name, :path)
    end
end
