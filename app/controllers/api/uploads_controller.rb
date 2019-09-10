class Api::UploadsController < ApplicationController
    def create
        @upload = upload.new(upload_params)

        if @upload.save
            render :show
        else
            p 'this is an error' 
            render json: @upload.errors.full_messages, status: 422
        end
    end

    def upload_params
        params.require(:upload).permit(:name, :path)
    end
end
