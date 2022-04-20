class AddCompletedTask < ActiveRecord::Migration[6.1]
  def change
    add_column :tasks, :complete, :string
  end
end
