#import kısmı
from rest_framework import serializers
from .models import Products
from .models import ProductsW
from .models import FeatureL
from .models import FeatureW
from .models import Softtech

#Yukarıda ilk olarak cloudprocejt uygulaması için oluşturmuş olduğumuz model sınıflarını serializers.py içerisine aktardık.
# Buna ek olarak modellerin serileştirmesinde kullanacağımız serializers sınıfına da ekledik.

class ProductSerializers(serializers.ModelSerializer):
    class Meta:
        model=Products
        fields="__all__"

class ProductsWSerializers(serializers.ModelSerializer):
    class Meta:
        model=ProductsW
        fields="__all__"

class FeatureLSerializers(serializers.ModelSerializer):
    class Meta:
        model=FeatureL
        fields="__all__"

class FeatureWSerializers(serializers.ModelSerializer):
    class Meta:
        model=FeatureW
        fields="__all__"
class SoftSerializers(serializers.ModelSerializer):
    class Meta:
        model= Softtech
        fields="__all__"


