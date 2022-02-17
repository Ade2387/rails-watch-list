class Movie < ApplicationRecord
  has_many :bookmarks
  has_many :movies, though: :movies
end
