from django.contrib import admin
from django.urls import path
from .views import *


urlpatterns = [
    path('books/', BookViewSet.as_view({'get':'list', 'post':'create',})),
    path('books/<int:pk>/', BookViewSet.as_view({'get':'retrieve', 'put':'update', 'patch':'partial_update', 'delete':'destroy'})),
    
    path('authors/', AuthorViewSet.as_view({'get':'list', 'post':'create',})),
    path('author/<int:pk>/', AuthorViewSet.as_view({'get':'retrieve', 'put':'update', 'patch':'partial_update', 'delete':'destroy'})),
   
    path('task/', TaskViewSet.as_view({'get':'list', 'post':'create',})),
    path('genres/<int:pk>/', TaskViewSet.as_view({'get':'retrieve', 'put':'update', 'patch':'partial_update', 'delete':'destroy'})),
   
    path('genres/', GenreViewSet.as_view({'get':'list', 'post':'create',})),
    path('genres/<int:pk>/', GenreViewSet.as_view({'get':'retrieve', 'put':'update', 'patch':'partial_update', 'delete':'destroy'})),
   
    # path('genres/<int:genre_id>/books/', Book_list_by_genre),
    # path('genres/<int:genre_id>/books/<int:book_id>/', Book_detail_by_genre),
]