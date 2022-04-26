class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  #test
  # Add your routes here
  #users
  get "/users" do
    users = User.all
    users.to_json(include: [tasks: {only: [:task, :username]}], except: [:created_at, :updated_at])
  end

  post "/users" do
    user = User.new(params)
    if user.save
      user.to_json(include: [:tasks])
    else
      user.errors.full_messages.to_json
    end
    
  end

  patch "/users/:id" do
    user = User.find(params[:id])
    user.update(
      username: params[:username]
    )
    user.to_json
  end

  delete "/users/:id" do
    user = User.find(params[:id])
    user.destroy
    user.to_json 
  end

  #tasks
  get "/tasks" do
    tasks = Task.all
    tasks.to_json(except: [:created_at, :updated_at])
  end

  post "/tasks" do
    task = Task.new(params)
    if task.save
      task.to_json
    else
      user.errors.full_messages.to_json
    end
  end

  patch "/tasks/:id" do
    task = Task.find(params[:id])
    task.update(
      task: params[:task],
      complete: params[:complete]
    )
    task.to_json
  end

  delete "/tasks/:id" do
    task = Task.find(params[:id])
    task.destroy
    task.to_json
  end 
end
