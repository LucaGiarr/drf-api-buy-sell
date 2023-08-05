from django.http import Http404
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Car
from .serializers import CarSerializer
from drf_api_buy_sell.permissions import IsOwnerOrReadOnly


class CarList(APIView):
    def get(self, request):
        cars = Car.objects.all()
        serializer = CarSerializer(
            cars, many=True, context={'request': request})
        return Response(serializer.data)


class CarDetail(APIView):
    serializer_class = CarSerializer
    permission_classes = [IsOwnerOrReadOnly]

    def get_object(self, pk):
        try:
            car = Car.objects.get(pk=pk)
            self.check_object_permissions(self.request, car)
            return car
        except Car.DoesNotExist:
            raise Http404

    def get(self, request, pk):
        car = self.get_object(pk)
        serializer = CarSerializer(
            car, context={'request': request}
        )
        return Response(serializer.data)

    def put(self, request, pk):
        car = self.get_object(pk)
        serializer = CarSerializer(
            car, data=request.data, context={'request': request}
        )
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
