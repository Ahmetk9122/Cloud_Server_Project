from django.contrib import admin
from django.urls import path,include
from rest_framework import routers
from cloudapi import views as cloudviews

# Oluşturduğumuz viewlara(viewlar ,diğer mvc yapılarında controller’a karşılık gelmektedir.)karşılık ,url mekanizmasını kuracağız.
# İlk olarak dikkatimizi çeken DRF modülünden çağırmış olduğumuz routers sınıfındaki DefaultRouter dan aldığımız router isimli instance.
# Bu nesne bizim içini otomatik olarak ,django üzerinden API ‘mız için url yapılandırmasının yapılmasını sağlamaktadır.
# Yani Api’mıza gelen get,post,put,delete vb metotların otomatik olarak, serileştirme işleminin yapıldığı API view’ına göndererek,
# bizi pek çok dertten kurtarmış oluyor. Bu yapılandırmayı manuel şekilde yapabilmeniz de mümkündür.

router = routers.DefaultRouter()
router.register(r"Linux/product",cloudviews.ProductView,"Product")
router.register(r"Windows/product",cloudviews.ProductwView,"Productw")
router.register(r"Linux/feature",cloudviews.FeaturelView,"FeatureL")
router.register(r"Windows/feature",cloudviews.FeaturewView,"FeatureW")
router.register(r"Software",cloudviews.SoftView,"Software")

urlpatterns = [
    path('api/',include(router.urls)),
    path('admin/', admin.site.urls),

]

