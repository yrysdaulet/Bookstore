from django.contrib import admin
from .models import *

# Register your models here.
admin.site.register(Book)
admin.site.register(Task)
admin.site.register(Genre)
admin.site.register(Author)
    