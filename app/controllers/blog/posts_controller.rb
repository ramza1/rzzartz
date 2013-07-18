class Blog::PostsController < ApplicationController
  def index
    @posts = Post.all
  end

  def new
    @post = Post.new
  end

  def show
    @post = Post.find(params[:id])
  end

  def edit
    @post = Post.find(params[:id])
  end

  def create
    @post = Post.new(params[:post])
    if @post.save
      respond_to do |format|
        format.html {redirect_to blog_post_path(@post)}
      end
    else
      render :new
    end
  end

  def update
    @post = Post.find(params[:id])
    if @post.update_attributes(params[:post])
      respond_to do |format|
        format.html {redirect_to blog_post_path(@post)}
      end
    else
      render :edit
    end
  end

  def destroy
    @post = Post.find(params[:id])
    @post.destroy
    redirect_to blog_posts_url
  end
end
