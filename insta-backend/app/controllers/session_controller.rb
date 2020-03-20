class SessionController < ApplicationController
  before_action :authenticated, only: [ :create, :destroy]
  def create
    # binding.pry
    @user = User.find_by(username: params[:username])
    
      if @user && @user.authenticate(params[:password])  
        session[:user_id] = @user.id
        # binding.pry
        render json: @user
      else 
        render json: @puser.errors, status: :unprocessable_entity
      end
  end 

  def destroy 
    binding.pry
    session.delete("user_id")
    session[:user_id] = nil 
  end 

  private 

  def user_params
    params.permit(:username, :password)
  end
end
