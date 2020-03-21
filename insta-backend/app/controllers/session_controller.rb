class SessionController < ApplicationController
  skip_before_action :user_is_authenticated, only: [ :create, :destroy, :myindex]
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

  def set_user
    @user = User.find_by(id: params[:user_id])
  end

  def user_params
    params.permit(:username, :password)
  end
end
