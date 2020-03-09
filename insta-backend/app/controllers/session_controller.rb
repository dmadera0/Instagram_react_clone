class SessionController < ApplicationController

  def create
    # binding.pry
    @user = User.find_by(username: params[:username])
    
      if @user && @user.authenticate(params[:password])  
        session[:user_id] = @user.id
        render json: @user
      end
  end 

  private 
  def user_params
    params.permit(:username, :password)
  end
end
