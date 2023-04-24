from rest_framework import generics, viewsets
from django.shortcuts import get_object_or_404
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Book, Genre,  User, Author, Task
from .serializers import BookSerializer, GenreSerializer,UserSerializer, AuthorSerializer,TaskSerializer

#Using CBV
class BookViewSet(viewsets.ModelViewSet): # need to rewrite funcs 
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
        return Book.objects.filter(genre__id=genre_id)

class BookDetailByGenre(generics.RetrieveAPIView):
    serializer_class = BookSerializer

    def get_object(self):
        genre_id = self.kwargs['genre_id']
        book_id = self.kwargs['book_id']
        return get_object_or_404(Book, id=book_id, genre__id=genre_id)

class BookListByAuthor(generics.ListAPIView):
    serializer_class = BookSerializer

    def get_queryset(self):
        author_id = self.kwargs['author_id']
        return Book.objects.filter(author__id=author_id)

class BookDetailByAuthor(generics.RetrieveAPIView):
    serializer_class = BookSerializer

    def get_object(self):
        author_id = self.kwargs['author_id']
        book_id = self.kwargs['book_id']
        return get_object_or_404(Book, id=book_id, author__id=author_id)


#Using FBV  
# @api_view(['GET', 'POST'])
# def Book_list_by_genre(request, genre_id):
#     books = get_object_or_404(Book,bookgenre__genre_id=genre_id)
#     serializer = BookSerializer(books, many=True)
#     return Response(serializer.data, safe=False)


# def Book_detail_by_genre(request, genre_id, book_id):
#     book = get_object_or_404(Book, id=book_id, bookgenre__genre_id=genre_id)
#     serializer = BookSerializer(book)
#     return Response(serializer.data, safe=False)