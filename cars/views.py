from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Car
from .serializers import CarSerializer


class CarList(APIView):
    def get(self, request):
        cars = Car.objects.all()
        serializer = CarSerializer(cars, many=True)
        return Response(serializer.data)
