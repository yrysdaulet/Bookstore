from rest_framework import serializers
from .models import *

#serializers.Serializer
class TaskSerializer(serializers.Serializer):
    image = serializers.URLField()
    answer = serializers.CharField(max_length=1)

class AuthorSerializer(serializers.Serializer):
    name = serializers.CharField(max_length=255)
#serializers.ModelSerializer

class GenreSerializer(serializers.ModelSerializer):
    class Meta:
        model = Genre
        fields = '__all__'

class BookSerializer(serializers.ModelSerializer):
    author = AuthorSerializer()
    genres = serializers.SlugRelatedField(
        many=True,
        queryset=Genre.objects.all(),
        slug_field='name'
    )
    
    def create(self, validated_data):
        author_data = validated_data.pop('author')
        author_name = author_data.pop('name')
        author, created = Author.objects.get_or_create(name=author_name, defaults=author_data)
        genres_data = validated_data.pop('genres')
        genres = [Genre.objects.get_or_create(name=genre_name)[0] for genre_name in genres_data]
        book = Book.objects.create(author=author, **validated_data)
        book.genres.set(genres)
        return book
    class Meta:
        model = Book
        fields = '__all__'
    

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'


class LibrarySerializer(serializers.ModelSerializer):
    user = UserSerializer()
    book = BookSerializer()
    
    class Meta:
        model = Library
        fields = '__all__'
