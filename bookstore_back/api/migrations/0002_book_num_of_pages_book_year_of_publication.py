# Generated by Django 4.1.7 on 2023-04-25 07:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='book',
            name='num_of_pages',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='book',
            name='year_of_publication',
            field=models.IntegerField(default=0),
        ),
    ]
