from rest_framework.fields import SerializerMethodField
from rest_framework.serializers import ModelSerializer

from .models import Restaurant, User, MainCategory

class BaseSerializer(ModelSerializer):
    image = SerializerMethodField(source='image')

    def get_image(self, obj):
        request = self.context.get('request')
        if request and obj.image:
            return request.build_absolute_uri('/static/%s' % obj    .image)


class UserSerializer(ModelSerializer):
    def create(self, validated_data):
        data = validated_data.copy()

        u = User(**data)
        u.set_password(u.password)
        u.save()

        return u
    class Meta:
        model = User
        fields = ['id', 'username', 'first_name', 'last_name', 'password', 'avatar']
        extra_kwargs = {
            'password': {
                'write_only': True
            }
        }




class RestaurantSerializer(BaseSerializer):
    owner = UserSerializer()
    class Meta:
        model = Restaurant
        fields = ['id', 'name', 'address', 'phone_number', 'owner', 'star_rate', 'image']



class MainCategorySerializer(BaseSerializer):
    class Meta:
        model = MainCategory
        fields = ['id', 'name', 'image']

