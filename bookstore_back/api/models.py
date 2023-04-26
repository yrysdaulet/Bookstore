from django.db import models
from django.contrib.auth.models import AbstractUser, Group,Permission

class Author(models.Model):
    name = models.CharField(max_length=255)
    def __str__(self):
        return self.name
class Genre(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    def __str__(self):
        return self.name

class Book(models.Model):
    title = models.CharField(max_length=255)
    author = models.ForeignKey(Author, on_delete=models.CASCADE)
    description = models.TextField()
    image = models.URLField()
    genres = models.ManyToManyField(Genre)
    year_of_publication = models.IntegerField(default=0)
    num_of_pages = models.IntegerField(default=0)
    rating_count = models.IntegerField(default=0)
    rating_value = models.DecimalField(max_digits=5, decimal_places=2,default=0.0)

    def __str__(self):
        return self.title
class User(AbstractUser):
    groups = models.ManyToManyField(Group, related_name='api_users')
    user_permissions = models.ManyToManyField(Permission, related_name='api_users')
    role_choices = [
        ('admin', 'Admin'),
        ('client', 'Client')
    ]
    role = models.CharField(max_length=50, choices=role_choices)


class Library(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    book = models.ForeignKey(Book, on_delete=models.CASCADE)


class Task(models.Model):
    image = models.URLField()
    answer = models.CharField(max_length=1)