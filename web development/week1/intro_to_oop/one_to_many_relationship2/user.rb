Class User
  attr_reader :username, :tweets

  def initialize(username)
    @username = username
    @tweets = []
  end

  def post_tweet=(message)
    Tweet.new()
  end

  def ()
  end
end
