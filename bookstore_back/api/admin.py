from django.contrib import admin
from .models import *
class BookAdmin(admin.ModelAdmin):
    list_display = ('id','title', 'author', 'description')
class AuthorAdmin(admin.ModelAdmin):
    list_display = ('id','name')
class GenreAdmin(admin.ModelAdmin):
    list_display = ('id','name', 'description')

class LibraryAdmin(admin.ModelAdmin):
    list_display = ('user', 'book')
# class UserAdmin(admin.ModelAdmin):
#     list_display = ('user', 'book')
# Register your models here.


admin.site.register(Book, BookAdmin)
admin.site.register(Task)
admin.site.register(Genre, GenreAdmin)
admin.site.register(Author)
admin.site.register(Library, LibraryAdmin)
admin.site.register(User)
