class CreatePosts < ActiveRecord::Migration[6.0]
  def change
    create_table :posts do |t|
      t.string :content
      t.string :location
      t.datetime :created
      t.datetime :updated

      t.timestamps
    end
  end
end
