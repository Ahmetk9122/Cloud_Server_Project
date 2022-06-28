from  rest_framework import viewsets
from .serializers import ProductSerializers
from .models import Products
from .serializers import ProductsWSerializers
from .models import ProductsW
from .serializers import FeatureLSerializers
from .models import FeatureL
from .serializers import FeatureWSerializers
from .models import FeatureW
from .serializers import SoftSerializers
from .models import Softtech

#Viewsets’den bahsetmek gerekirse, DRF ile oluşturmuş olduğumuz API’lara yapılan istekler sonucunda,
# hangi model, hangi istek tipine ne cevap vericek bunların ayarlamasını yapmamız gerekmektedir.
# Manuel olarak bu işlemleri gerçekleştirmek yerine viewsets sınıfı ile bütün bu yapılması gerekenleri DRF bizim yerimize gerçekleştirir.
# Biz en basit haliyle ModelViewSet sınıfını kullanacağız.

class ProductView(viewsets.ModelViewSet):
    serializer_class = ProductSerializers
    http_method_names =["get"]
    queryset = Products.objects.all()

class ProductwView(viewsets.ModelViewSet):
    serializer_class = ProductsWSerializers
    http_method_names =["get"]
    queryset = ProductsW.objects.all()

class FeaturewView(viewsets.ModelViewSet):
    serializer_class = FeatureLSerializers
    http_method_names =["get"]
    queryset = FeatureW.objects.all()

class FeaturelView(viewsets.ModelViewSet):
    serializer_class = FeatureWSerializers
    http_method_names =["get"]
    queryset = FeatureL.objects.all()

class SoftView(viewsets.ModelViewSet):
    serializer_class = SoftSerializers
    http_method_names =["get"]
    queryset = Softtech.objects.all()
