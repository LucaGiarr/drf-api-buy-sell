# Generated by Django 3.2.20 on 2023-08-04 15:53

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Car',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('car_title', models.CharField(max_length=255)),
                ('city', models.CharField(choices=[(0, 'Ardee'), (1, 'Arklow'), (2, 'Athlone'), (3, 'Athy'), (4, 'Balbriggan'), (5, 'Ballina'), (6, 'Ballinasloe'), (7, 'Ballybay'), (8, 'Ballyshannon'), (9, 'Bandon'), (10, 'Bantry'), (11, 'Belturbet'), (12, 'Birr'), (13, 'Boyle'), (14, 'Bray'), (15, 'Buncrana'), (16, 'Bundoran'), (17, 'Carlow'), (18, 'Carrickmacross'), (19, 'Carrick-on-Suir'), (20, 'Cashel'), (21, 'Castlebar'), (22, 'Castleblayney'), (23, 'Cavan'), (24, 'Clonakilty'), (25, 'Clones'), (26, 'Clonmel'), (27, 'Cobh'), (28, 'Cootehill'), (29, 'Cork'), (30, 'Drogheda'), (31, 'Dublin'), (32, 'Dundalk'), (33, 'Dungarvan'), (34, 'Edenderry'), (35, 'Ennis'), (36, 'Enniscorthy'), (37, 'Fermoy'), (38, 'Galway'), (39, 'Gorey'), (40, 'Granard'), (41, 'Greystones'), (42, 'Kells'), (43, 'Kilkee'), (44, 'Kilkenny'), (45, 'Killarney'), (46, 'Kilrush'), (47, 'Kinsale'), (48, 'Leixlip'), (49, 'Letterkenny'), (50, 'Limerick'), (51, 'Lismore'), (52, 'Listowel'), (53, 'Longford'), (54, 'Loughrea'), (55, 'Macroom'), (56, 'Mallow'), (57, 'Midleton'), (58, 'Monaghan'), (59, 'Mountmellick'), (60, 'Muine Bheag'), (61, 'Mullingar'), (62, 'Naas'), (63, 'Navan'), (64, 'Nenagh'), (65, 'New Ross'), (66, 'Newbridge'), (67, 'Passage West'), (68, 'Portlaoise'), (69, 'Shannon'), (70, 'Skibbereen'), (71, 'Sligo'), (72, 'Templemore'), (73, 'Thurles'), (74, 'Tipperary'), (75, 'Tralee'), (76, 'Tramore'), (77, 'Trim'), (78, 'Tuam'), (79, 'Tullamore'), (80, 'Waterford'), (81, 'Westport'), (82, 'Wexford'), (83, 'Wicklow'), (84, 'Youghal')], max_length=100)),
                ('color', models.CharField(max_length=100)),
                ('model', models.CharField(max_length=100)),
                ('year', models.IntegerField(choices=[(2000, 2000), (2001, 2001), (2002, 2002), (2003, 2003), (2004, 2004), (2005, 2005), (2006, 2006), (2007, 2007), (2008, 2008), (2009, 2009), (2010, 2010), (2011, 2011), (2012, 2012), (2013, 2013), (2014, 2014), (2015, 2015), (2016, 2016), (2017, 2017), (2018, 2018), (2019, 2019), (2020, 2020), (2021, 2021), (2022, 2022), (2023, 2023)], verbose_name='year')),
                ('condition', models.CharField(choices=[('New', 'New'), ('Used', 'Used')], max_length=100)),
                ('price', models.IntegerField()),
                ('description', models.TextField()),
                ('car_photo', models.ImageField(upload_to='images/cars/')),
                ('car_photo_1', models.ImageField(blank=True, upload_to='images/cars/')),
                ('car_photo_2', models.ImageField(blank=True, upload_to='images/cars/')),
                ('car_photo_3', models.ImageField(blank=True, upload_to='images/cars/')),
                ('car_photo_4', models.ImageField(blank=True, upload_to='images/cars/')),
                ('body_style', models.CharField(choices=[(0, 'Sedan'), (1, 'Coupe'), (2, 'Sport car'), (3, 'Station wagon'), (4, 'Hatchback'), (5, 'Convertible'), (6, 'SUV'), (7, 'Minivan'), (8, 'Pickup Truck')], max_length=100)),
                ('engine', models.CharField(max_length=100)),
                ('transmission', models.CharField(choices=[(0, 'Manual'), (1, 'Automatic')], max_length=100)),
                ('chilometers', models.IntegerField()),
                ('doors', models.CharField(choices=[('2', '2'), ('3', '3'), ('4', '4'), ('5', '5'), ('6', '6')], max_length=10)),
                ('fuel_type', models.CharField(max_length=50)),
                ('created_on', models.DateTimeField(auto_now_add=True)),
            ],
            options={
                'ordering': ['-created_on'],
            },
        ),
    ]
