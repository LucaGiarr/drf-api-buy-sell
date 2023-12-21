from django.urls import path, include
from rest_framework.routers import DefaultRouter
from cars import views
from .views import MessageViewSet


router = DefaultRouter()
router.register(r'messages', MessageViewSet, basename='message')

urlpatterns = [
    path('cars/', views.CarList.as_view()),
    path('cars/<int:pk>/', views.CarDetail.as_view()),
    # path('cars/', views.MessageViewSet.as_view()),

    path('api/', include(router.urls)),
]
