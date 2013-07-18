class OurWorksController < ApplicationController
  # GET /our_works
  # GET /our_works.json
  def index
    @our_works = OurWork.all

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @our_works }
    end
  end

  # GET /our_works/1
  # GET /our_works/1.json
  def show
    @our_work = OurWork.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @our_work }
    end
  end

  # GET /our_works/new
  # GET /our_works/new.json
  def new
    @our_work = OurWork.new

    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @our_work }
    end
  end

  # GET /our_works/1/edit
  def edit
    @our_work = OurWork.find(params[:id])
  end

  # POST /our_works
  # POST /our_works.json
  def create
    @our_work = OurWork.new(params[:our_work])

    respond_to do |format|
      if @our_work.save
        format.html { redirect_to @our_work, notice: 'Our work was successfully created.' }
        format.json { render json: @our_work, status: :created, location: @our_work }
      else
        format.html { render action: "new" }
        format.json { render json: @our_work.errors, status: :unprocessable_entity }
      end
    end
  end

  # PUT /our_works/1
  # PUT /our_works/1.json
  def update
    @our_work = OurWork.find(params[:id])

    respond_to do |format|
      if @our_work.update_attributes(params[:our_work])
        format.html { redirect_to @our_work, notice: 'Our work was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: "edit" }
        format.json { render json: @our_work.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /our_works/1
  # DELETE /our_works/1.json
  def destroy
    @our_work = OurWork.find(params[:id])
    @our_work.destroy

    respond_to do |format|
      format.html { redirect_to our_works_url }
      format.json { head :no_content }
    end
  end
end
