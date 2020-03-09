class SessionController < ApplicationController

  def create
    binding.pry
    @user = User.find_by(email: params[:email] || username: params[:username] || phoneNum: params[phoneNum])
      if @user && @user.authenticate(params[:password])  
        session[:user_id] = @user.id
        render json: @user
      end
  end 
end
