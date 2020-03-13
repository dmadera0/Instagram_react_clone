class SessionController < ApplicationController
  before_action :authenticated, only: [ :create, :destroy]
  def create
    # binding.pry
    @user = User.find_by(username: params[:username])
    
      if @user && @user.authenticate(params[:password])  
        session[:user_id] = @user.id
        binding.pry
        render json: @user
      end
  end 

  def destroy 
    binding.pry
    session.delete("user_id")
    session[:user_id] = nil 
  end 

  private 

  def authenticated
    !!current_user
  end

  def current_user
    User.find_by(id: session[:user_id])
  end

  def user_params
    params.permit(:username, :password)
  end
end
