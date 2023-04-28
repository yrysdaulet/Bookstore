from rest_framework import generics, viewsets, status
from django.shortcuts import get_object_or_404
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import *
from .serializers import *

# Using CBV


class BookViewSet(viewsets.ModelViewSet):  # need to rewrite funcs
    queryset = Book.objects.all()
    serializer_class = BookSerializer
    


class GenreViewSet(viewsets.ModelViewSet):
    queryset = Genre.objects.all()
    serializer_class = GenreSerializer


class AuthorViewSet(viewsets.ModelViewSet):
    queryset = Author.objects.all()
    serializer_class = AuthorSerializer


class TaskViewSet(viewsets.ModelViewSet):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer


class BookListByGenre(generics.ListAPIView):
    serializer_class = BookSerializer

    def get_queryset(self):
        genre_id = self.kwargs['genre_id']
        genre = get_object_or_404(Genre, pk=genre_id)
        return Book.objects.filter(genres=genre)


class BookDetailByGenre(generics.RetrieveAPIView):
    serializer_class = BookSerializer

    def get_object(self):
        genre_id = self.kwargs['genre_id']
        book_id = self.kwargs['book_id']
        genre = get_object_or_404(Genre, pk=genre_id)
        return get_object_or_404(Book, pk=book_id, genres=genre)


class BookListByAuthor(generics.ListAPIView):
    serializer_class = BookSerializer

    def get_queryset(self):
        author_id = self.kwargs['author_id']
        author = get_object_or_404(Author, pk=author_id)
        return Book.objects.filter(author=author)


class BookDetailByAuthor(generics.RetrieveAPIView):
    serializer_class = BookSerializer

    def get_object(self):
        author_id = self.kwargs['author_id']
        book_id = self.kwargs['book_id']
        author = get_object_or_404(Author, pk=author_id)
        return get_object_or_404(Book, pk=book_id, author=author)

# Using FBV


@api_view(['GET'])
def book_list_by_user(request, user_id):
    user = get_object_or_404(User, pk=user_id)
    books = Book.objects.filter(library__user=user)
    serializer = BookSerializer(books, many=True)
    return Response(serializer.data)

@api_view(['GET', 'POST', 'DELETE'])
def book_detail_by_user(request, user_id, book_id):
    user = get_object_or_404(User, pk=user_id)

    if request.method == 'GET':
        book = get_object_or_404(Book, pk=book_id, library__user=user)
        serializer = BookSerializer(book)
        return Response(serializer.data)

    elif request.method == 'POST':
        book = get_object_or_404(Book, pk=book_id)
        library = Library(user=user, book=book)
        library.save()
        serializer = LibrarySerializer(library)
        return Response(serializer.data, status=status.HTTP_201_CREATED)

    elif request.method == 'DELETE':
        book = get_object_or_404(Book, pk=book_id, library__user=user)
        book.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)