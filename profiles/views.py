from rest_framework import generics
from django.db.models import Count
from .models import Profile
from .serializers import ProfileSerializer
from drf_api_buy_sell.permissions import IsOwnerOrReadOnly


class ProfileList(generics.ListAPIView):
    queryset = Profile.objects.annotate(
        cars_count=Count('owner__car', distinct=True),
    ).order_by('-created_on')
    serializer_class = ProfileSerializer


class ProfileDetail(generics.RetrieveUpdateAPIView):
    permission_classes = [IsOwnerOrReadOnly]
    queryset = Profile.objects.annotate(
        cars_count=Count('owner__car', distinct=True),
    ).order_by('-created_on')
    serializer_class = ProfileSerializer
