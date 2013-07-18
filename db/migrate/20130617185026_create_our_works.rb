class CreateOurWorks < ActiveRecord::Migration
  def change
    create_table :our_works do |t|

      t.timestamps
    end
  end
end
