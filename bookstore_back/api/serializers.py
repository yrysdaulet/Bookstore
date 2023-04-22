from rest_framework import serializers
from .models import Author, Book, Genre, BookGenre, User, Library, Task

#serializers.Serializer
class TaskSerializer(serializers.Serializer):
    image = serializers.URLField()
    answer = serializers.CharField(max_length=1)

class AuthorSerializer(serializers.Serializer):
    name = serializers.CharField(max_length=255)

#serializers.ModelSerializer
class BookSerializer(serializers.ModelSerializer):
    author = AuthorSerializer()
    
    class Meta:
        model = Book
        fields = '__all__'

class GenreSerializer(serializers.ModelSerializer):
    class Meta:
        model = Genre
        fields = '__all__'

# class BookGenreSerializer(serializers.ModelSerializer):
#     book = BookSerializer()
#     genre = GenreSerializer()
    
#     class Meta:
#         model = BookGenre
#         fields = '__all__'

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

# class LibrarySerializer(serializers.ModelSerializer):
#     user = UserSerializer()
#     book = BookSerializer()
    
#     class Meta:
#         model = Library
#         fields = '__all__'
