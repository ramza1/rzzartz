class MessagesController < ApplicationController
  def create
    @message = Message.new(params[:message])
    if @message.valid?
      MessageMailer.send_message(@message).deliver
      respond_to do |format|
        format.js
      end
    else
      respond_to do |format|
        format.js
      end
    end
  end
end
