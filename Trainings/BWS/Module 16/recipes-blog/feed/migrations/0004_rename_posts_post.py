# Generated by Django 4.2.1 on 2023-05-24 11:09

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('feed', '0003_posts_date'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Posts',
            new_name='Post',
        ),
    ]
