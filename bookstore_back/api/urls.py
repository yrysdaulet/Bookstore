from django.contrib import admin
from django.urls import path
from .views import *
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
    TokenVerifyView
)


urlpatterns = [
    path('books/', BookViewSet.as_view({'get':'list', 'post':'create',})),
    path('books/<int:pk>/', BookViewSet.as_view({'get':'retrieve', 'put':'update', 'patch':'partial_update', 'delete':'destroy'})),
    path('books/<int:id>/rate/', rate_book),
    
    path('authors/', AuthorViewSet.as_view({'get':'list', 'post':'create',})),
    path('authors/<int:pk>/', AuthorViewSet.as_view({'get':'retrieve', 'put':'update', 'patch':'partial_update', 'delete':'destroy'})),
   
    path('tasks/', TaskViewSet.as_view({'get':'list', 'post':'create',})),
    path('tasks/<int:pk>/', TaskViewSet.as_view({'get':'retrieve', 'put':'update', 'patch':'partial_update', 'delete':'destroy'})),
   
    path('genres/', GenreViewSet.as_view({'get':'list', 'post':'create',})),
    path('genres/<int:pk>/', GenreViewSet.as_view({'get':'retrieve', 'put':'update', 'patch':'partial_update', 'delete':'destroy'})),
   
    path('genres/<int:genre_id>/books/', BookListByGenre.as_view()),
    path('genres/<int:genre_id>/books/<int:book_id>/', BookDetailByGenre.as_view()),
    
    path('authors/<int:author_id>/books/', BookListByAuthor.as_view()),
    path('authors/<int:author_id>/books/<int:book_id>/', BookDetailByAuthor.as_view()),

    path('library/<int:user_id>/books/', book_list_by_user),
    path('library/<int:user_id>/books/<int:book_id>/', book_detail_by_user),

    path('register/', RegisterView.as_view()),
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('token/verify/', TokenVerifyView.as_view(), name='token_verify'),

]