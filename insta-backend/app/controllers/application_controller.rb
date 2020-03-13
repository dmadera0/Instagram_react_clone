class ApplicationController < ActionController::API
  protect_from_forgery :exception
  include ActionController::Helpers
  
  include ActionController::Cookies
  # helper_method :current_user
  before_action :authenticated

  def authenticated
    !!current_user
  end

  def current_user
    User.find_by(id: session[:user_id])
  end
end
