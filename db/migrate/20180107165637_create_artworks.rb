class CreateArtworks < ActiveRecord::Migration[5.0]
  def change
    create_table :artworks do |t|
      t.string :photo, null: false
      t.string :text

      t.references :category
      t.timestamps null: false
    end
  end
end
