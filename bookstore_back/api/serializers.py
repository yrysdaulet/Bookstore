from rest_framework import serializers
from .models import *

#serializers.Serializer
class TaskSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    image = serializers.URLField()
    answer = serializers.CharField(max_length=1)

class AuthorSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField(max_length=255)
#serializers.ModelSerializer

class GenreSerializer(serializers.ModelSerializer):
    class Meta:
        model = Genre
        fields = '__all__'
        extra_kwargs = {
            'description': {'required': False}
        }


class BookSerializer(serializers.ModelSerializer):
    author = AuthorSerializer()
    genres = GenreSerializer(many=True)

    def create(self, validated_data):
        author_data = validated_data.pop('author')
        author, _ = Author.objects.get_or_create(**author_data)
        genres_data = validated_data.pop('genres')
        genres = []
        for genre_data in genres_data:
            name = genre_data.pop('name')
            try:
                genre = Genre.objects.get(name=name)
                # If the genre already exists, ignore the description from the data
            except Genre.DoesNotExist:
                genre = Genre.objects.create(name=name, **genre_data)
            genres.append(genre)
        book = Book.objects.create(author=author, **validated_data)
        book.genres.set(genres)
        return book

    class Meta:
        model = Book
        fields = '__all__'
    

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        # fields = '__all__'
        fields = ['id', 'username','email', 'password','groups', 'first_name', 'last_name']


class LibrarySerializer(serializers.ModelSerializer):
    user = UserSerializer()
    book = BookSerializer()
    
    class Meta:
        model = Library
        fields = '__all__'
