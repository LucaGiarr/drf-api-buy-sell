# Generated by Django 3.2.20 on 2023-12-21 11:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cars', '0007_auto_20230820_1000'),
    ]

    operations = [
        migrations.AlterField(
            model_name='car',
            name='car_photo',
            field=models.ImageField(blank=True, default='../default_no_image', upload_to='images/cars/'),
        ),
        migrations.AlterField(
            model_name='car',
            name='car_photo_1',
            field=models.ImageField(blank=True, default='../default_no_image', upload_to='images/cars/'),
        ),
        migrations.AlterField(
            model_name='car',
            name='car_photo_2',
            field=models.ImageField(blank=True, default='../default_no_image', upload_to='images/cars/'),
        ),
        migrations.AlterField(
            model_name='car',
            name='car_photo_3',
            field=models.ImageField(blank=True, default='../default_no_image', upload_to='images/cars/'),
        ),
        migrations.AlterField(
            model_name='car',
            name='car_photo_4',
            field=models.ImageField(blank=True, default='../default_no_image', upload_to='images/cars/'),
        ),
    ]
