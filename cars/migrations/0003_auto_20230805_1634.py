# Generated by Django 3.2.20 on 2023-08-05 16:34

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('cars', '0002_car_make'),
    ]

    operations = [
        migrations.AddField(
            model_name='car',
            name='seller',
            field=models.OneToOneField(default=1, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
        migrations.AlterField(
            model_name='car',
            name='body_style',
            field=models.CharField(choices=[('Sedan', 'Sedan'), ('Coupe', 'Coupe'), ('Sport car', 'Sport car'), ('Station wagon', 'Station wagon'), ('Hatchback', 'Hatchback'), ('Convertible', 'Convertible'), ('SUV', 'SUV'), ('Minivan', 'Minivan'), ('Pickup Truck', 'Pickup Truck')], max_length=100),
        ),
        migrations.AlterField(
            model_name='car',
            name='car_photo',
            field=models.ImageField(blank=True, upload_to='images/cars/'),
        ),
        migrations.AlterField(
            model_name='car',
            name='car_title',
            field=models.CharField(default='Audi A1', max_length=255),
        ),
        migrations.AlterField(
            model_name='car',
            name='city',
            field=models.CharField(choices=[('Ardee', 'Ardee'), ('Arklow', 'Arklow'), ('Athlone', 'Athlone'), ('Athy', 'Athy'), ('Balbriggan', 'Balbriggan'), ('Ballina', 'Ballina'), ('Ballinasloe', 'Ballinasloe'), ('Ballybay', 'Ballybay'), ('Ballyshannon', 'Ballyshannon'), ('Bandon', 'Bandon'), ('Bantry', 'Bantry'), ('Belturbet', 'Belturbet'), ('Birr', 'Birr'), ('Boyle', 'Boyle'), ('Bray', 'Bray'), ('Buncrana', 'Buncrana'), ('Bundoran', 'Bundoran'), ('Carlow', 'Carlow'), ('Carrickmacross', 'Carrickmacross'), ('Carrick-on-Suir', 'Carrick-on-Suir'), ('Cashel', 'Cashel'), ('Castlebar', 'Castlebar'), ('Castleblayney', 'Castleblayney'), ('Cavan', 'Cavan'), ('Clonakilty', 'Clonakilty'), ('Clones', 'Clones'), ('Clonmel', 'Clonmel'), ('Cobh', 'Cobh'), ('Cootehill', 'Cootehill'), ('Cork', 'Cork'), ('Drogheda', 'Drogheda'), ('Dublin', 'Dublin'), ('Dundalk', 'Dundalk'), ('Dungarvan', 'Dungarvan'), ('Edenderry', 'Edenderry'), ('Ennis', 'Ennis'), ('Enniscorthy', 'Enniscorthy'), ('Fermoy', 'Fermoy'), ('Galway', 'Galway'), ('Gorey', 'Gorey'), ('Granard', 'Granard'), ('Greystones', 'Greystones'), ('Kells', 'Kells'), ('Kilkee', 'Kilkee'), ('Kilkenny', 'Kilkenny'), ('Killarney', 'Killarney'), ('Kilrush', 'Kilrush'), ('Kinsale', 'Kinsale'), ('Leixlip', 'Leixlip'), ('Letterkenny', 'Letterkenny'), ('Limerick', 'Limerick'), ('Lismore', 'Lismore'), ('Listowel', 'Listowel'), ('Longford', 'Longford'), ('Loughrea', 'Loughrea'), ('Macroom', 'Macroom'), ('Mallow', 'Mallow'), ('Midleton', 'Midleton'), ('Monaghan', 'Monaghan'), ('Mountmellick', 'Mountmellick'), ('Muine Bheag', 'Muine Bheag'), ('Mullingar', 'Mullingar'), ('Naas', 'Naas'), ('Navan', 'Navan'), ('Nenagh', 'Nenagh'), ('New Ross', 'New Ross'), ('Newbridge', 'Newbridge'), ('Passage West', 'Passage West'), ('Portlaoise', 'Portlaoise'), ('Shannon', 'Shannon'), ('Skibbereen', 'Skibbereen'), ('Sligo', 'Sligo'), ('Templemore', 'Templemore'), ('Thurles', 'Thurles'), ('Tipperary', 'Tipperary'), ('Tralee', 'Tralee'), ('Tramore', 'Tramore'), ('Trim', 'Trim'), ('Tuam', 'Tuam'), ('Tullamore', 'Tullamore'), ('Waterford', 'Waterford'), ('Westport', 'Westport'), ('Wexford', 'Wexford'), ('Wicklow', 'Wicklow'), ('Youghal', 'Youghal')], max_length=100),
        ),
        migrations.AlterField(
            model_name='car',
            name='make',
            field=models.CharField(max_length=100),
        ),
        migrations.AlterField(
            model_name='car',
            name='transmission',
            field=models.CharField(choices=[('Manual', 'Manual'), ('Automatic', 'Automatic')], max_length=100),
        ),
    ]
