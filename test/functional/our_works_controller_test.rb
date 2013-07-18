require 'test_helper'

class OurWorksControllerTest < ActionController::TestCase
  setup do
    @our_work = our_works(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:our_works)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create our_work" do
    assert_difference('OurWork.count') do
      post :create, our_work: {  }
    end

    assert_redirected_to our_work_path(assigns(:our_work))
  end

  test "should show our_work" do
    get :show, id: @our_work
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @our_work
    assert_response :success
  end

  test "should update our_work" do
    put :update, id: @our_work, our_work: {  }
    assert_redirected_to our_work_path(assigns(:our_work))
  end

  test "should destroy our_work" do
    assert_difference('OurWork.count', -1) do
      delete :destroy, id: @our_work
    end

    assert_redirected_to our_works_path
  end
end
