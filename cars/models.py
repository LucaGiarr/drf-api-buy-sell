from django.db import models
from datetime import datetime
from django.contrib.auth.models import User


class Car(models.Model):

    city_choice = (

        ('Ardee', 'Ardee'),
        ('Arklow', 'Arklow'),
        ('Athlone', 'Athlone'),
        ('Athy', 'Athy'),
        ('Balbriggan', 'Balbriggan'),
        ('Ballina', 'Ballina'),
        ('Ballinasloe', 'Ballinasloe'),
        ('Ballybay', 'Ballybay'),
        ('Ballyshannon', 'Ballyshannon'),
        ('Bandon', 'Bandon'),
        ('Bantry', 'Bantry'),
        ('Belturbet', 'Belturbet'),
        ('Birr', 'Birr'),
        ('Boyle', 'Boyle'),
        ('Bray', 'Bray'),
        ('Buncrana', 'Buncrana'),
        ('Bundoran', 'Bundoran'),
        ('Carlow', 'Carlow'),
        ('Carrickmacross', 'Carrickmacross'),
        ('Carrick-on-Suir', 'Carrick-on-Suir'),
        ('Cashel', 'Cashel'),
        ('Castlebar', 'Castlebar'),
        ('Castleblayney', 'Castleblayney'),
        ('Cavan', 'Cavan'),
        ('Clonakilty', 'Clonakilty'),
        ('Clones', 'Clones'),
        ('Clonmel', 'Clonmel'),
        ('Cobh', 'Cobh'),
        ('Cootehill', 'Cootehill'),
        ('Cork', 'Cork'),
        ('Drogheda', 'Drogheda'),
        ('Dublin', 'Dublin'),
        ('Dundalk', 'Dundalk'),
        ('Dungarvan', 'Dungarvan'),
        ('Edenderry', 'Edenderry'),
        ('Ennis', 'Ennis'),
        ('Enniscorthy', 'Enniscorthy'),
        ('Fermoy', 'Fermoy'),
        ('Galway', 'Galway'),
        ('Gorey', 'Gorey'),
        ('Granard', 'Granard'),
        ('Greystones', 'Greystones'),
        ('Kells', 'Kells'),
        ('Kilkee', 'Kilkee'),
        ('Kilkenny', 'Kilkenny'),
        ('Killarney', 'Killarney'),
        ('Kilrush', 'Kilrush'),
        ('Kinsale', 'Kinsale'),
        ('Leixlip', 'Leixlip'),
        ('Letterkenny', 'Letterkenny'),
        ('Limerick', 'Limerick'),
        ('Lismore', 'Lismore'),
        ('Listowel', 'Listowel'),
        ('Longford', 'Longford'),
        ('Loughrea', 'Loughrea'),
        ('Macroom', 'Macroom'),
        ('Mallow', 'Mallow'),
        ('Midleton', 'Midleton'),
        ('Monaghan', 'Monaghan'),
        ('Mountmellick', 'Mountmellick'),
        ('Muine Bheag', 'Muine Bheag'),
        ('Mullingar', 'Mullingar'),
        ('Naas', 'Naas'),
        ('Navan', 'Navan'),
        ('Nenagh', 'Nenagh'),
        ('New Ross', 'New Ross'),
        ('Newbridge', 'Newbridge'),
        ('Passage West', 'Passage West'),
        ('Portlaoise', 'Portlaoise'),
        ('Shannon', 'Shannon'),
        ('Skibbereen', 'Skibbereen'),
        ('Sligo', 'Sligo'),
        ('Templemore', 'Templemore'),
        ('Thurles', 'Thurles'),
        ('Tipperary', 'Tipperary'),
        ('Tralee', 'Tralee'),
        ('Tramore', 'Tramore'),
        ('Trim', 'Trim'),
        ('Tuam', 'Tuam'),
        ('Tullamore', 'Tullamore'),
        ('Waterford', 'Waterford'),
        ('Westport', 'Westport'),
        ('Wexford', 'Wexford'),
        ('Wicklow', 'Wicklow'),
        ('Youghal', 'Youghal'),


    )

    year_choice = []
    for r in range(2000, (datetime.now().year+1)):
        year_choice.append((r, r))

    door_choice = (
        ('2', '2'),
        ('3', '3'),
        ('4', '4'),
        ('5', '5'),
        ('6', '6'),
    )

    condition_choice = (
        ('New', 'New'),
        ('Used', 'Used'),
    )

    body_style_choice = (
        ('Sedan', 'Sedan'),
        ('Coupe', 'Coupe'),
        ('Sport car', 'Sport car'),
        ('Station wagon', 'Station wagon'),
        ('Hatchback', 'Hatchback'),
        ('Convertible', 'Convertible'),
        ('SUV', 'SUV'),
        ('Minivan', 'Minivan'),
        ('Pickup Truck', 'Pickup Truck'),
    )

    transmission_choice = (
        ('Manual', 'Manual'),
        ('Automatic', 'Automatic'),
    )

    car_title = models.CharField(
        default='Audi A1', max_length=255, blank=False)
    make = models.CharField(max_length=100, blank=False)
    model = models.CharField(max_length=100, blank=False)
    year = models.IntegerField(('year'), choices=year_choice)
    condition = models.CharField(choices=condition_choice, max_length=100)
    chilometers = models.IntegerField()
    engine = models.CharField(max_length=100)
    transmission = models.CharField(
        choices=transmission_choice, max_length=100)
    body_style = models.CharField(choices=body_style_choice, max_length=100)
    doors = models.CharField(choices=door_choice, max_length=10)
    fuel_type = models.CharField(max_length=50)
    color = models.CharField(max_length=100)
    price = models.IntegerField()
    city = models.CharField(choices=city_choice, max_length=100)
    description = models.TextField()
    car_photo = models.ImageField(upload_to='images/cars/', blank=True)
    car_photo_1 = models.ImageField(upload_to='images/cars/', blank=True)
    car_photo_2 = models.ImageField(upload_to='images/cars/', blank=True)
    car_photo_3 = models.ImageField(upload_to='images/cars/', blank=True)
    car_photo_4 = models.ImageField(upload_to='images/cars/', blank=True)
    created_on = models.DateTimeField(auto_now_add=True)
    seller = models.OneToOneField(User, on_delete=models.CASCADE, default=1)

    class Meta:
        ordering = ["-created_on"]

    def __str__(self):
        return self.car_title
