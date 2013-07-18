class MessageMailer < ActionMailer::Base
  def send_message(message)
    @message = message
    mail to: "rzaartz@gmail.com", subject: message.subject, from: message.email
  end
end
