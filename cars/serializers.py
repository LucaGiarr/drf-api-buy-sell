from rest_framework import serializers
from .models import Car, Message


class CarSerializer(serializers.ModelSerializer):
    owner = serializers.ReadOnlyField(source='owner.username')
    is_owner = serializers.SerializerMethodField()
    profile_id = serializers.ReadOnlyField(source='owner.profile.id')
    profile_image = serializers.ReadOnlyField(source='owner.profile.image.url')

    def validate_car_photo(self, value):
        if value.size > 1024 * 1024 * 2:
            raise serializers.ValidationError(
                'Image size larger than 2MB.'
            )
        if value.image.width > 1024:
            raise serializers.ValidationError(
                'Image width larger than 1024px.'
            )

        if value.image.height > 1024:
            raise serializers.ValidationError(
                'Image height larger than 1024px.'
            )
        return value

    def validate_car_photo_1(self, value):
        if value.size > 1024 * 1024 * 2:
            raise serializers.ValidationError(
                'Image size larger than 2MB.'
            )
        if value.image.width > 1024:
            raise serializers.ValidationError(
                'Image width larger than 1024px.'
            )

        if value.image.height > 1024:
            raise serializers.ValidationError(
                'Image height larger than 1024px.'
            )
        return value

    def validate_car_photo_2(self, value):
        if value.size > 1024 * 1024 * 2:
            raise serializers.ValidationError(
                'Image size larger than 2MB.'
            )
        if value.image.width > 1024:
            raise serializers.ValidationError(
                'Image width larger than 1024px.'
            )

        if value.image.height > 1024:
            raise serializers.ValidationError(
                'Image height larger than 1024px.'
            )
        return value

    def validate_car_photo_3(self, value):
        if value.size > 1024 * 1024 * 2:
            raise serializers.ValidationError(
                'Image size larger than 2MB.'
            )
        if value.image.width > 1024:
            raise serializers.ValidationError(
                'Image width larger than 1024px.'
            )

        if value.image.height > 1024:
            raise serializers.ValidationError(
                'Image height larger than 1024px.'
            )
        return value

    def validate_car_photo_4(self, value):
        if value.size > 1024 * 1024 * 2:
            raise serializers.ValidationError(
                'Image size larger than 2MB.'
            )
        if value.image.width > 1024:
            raise serializers.ValidationError(
                'Image width larger than 1024px.'
            )

        if value.image.height > 1024:
            raise serializers.ValidationError(
                'Image height larger than 1024px.'
            )
        return value

    def get_is_owner(self, obj):
        request = self.context['request']
        return request.user == obj.owner

    class Meta:
        model = Car
        fields = '__all__'

class MessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Message
        fields = '__all__'