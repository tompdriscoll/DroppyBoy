class Api::FilesController < ApplicationController
    def create
        @file = file.new(file_params)

        if @file.save
            render :show
        else
            p 'this is an error' 
            render json: @file.errors.full_messages, status: 422
        end
    end

    def file_params
        params.require(:file).permit(:name, :path)
    end
end
