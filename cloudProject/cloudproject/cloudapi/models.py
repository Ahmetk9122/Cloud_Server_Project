#import kısmı
from django.db import models

#sqllite tarafında tablolarımızı oluşturmak için kullanılan modeller codefirst yaklaşımı gerçekleştirilmiştir.

#Linux Kontrol Paneli ve Yazılımlar Kısmının modeli
class Products (models.Model):
    name = models.CharField(default="", max_length=64,blank=False,null=False)
    price = models.IntegerField(null=False,blank=False)

#Windows Kontrol Paneli ve Yazılımlar Kısmının modeli
class ProductsW (models.Model):
    name = models.CharField(default="", max_length=64,blank=False,null=False)
    price = models.IntegerField(null=False,blank=False)

#Linux Ekstra Özellikler Kısmının modeli
class FeatureL (models.Model):
    name = models.CharField(default="", max_length=64,blank=False,null=False)
    price = models.IntegerField(null=False,blank=False)
#Windows Ekstra Özellikler Kısmının modeli
class FeatureW (models.Model):
    name = models.CharField(default="", max_length=64,blank=False,null=False)
    price = models.IntegerField(null=False,blank=False)

#Software Kısmının modeli
class Softtech (models.Model):
    name = models.CharField(default="", max_length=64,blank=False,null=False)
    price = models.IntegerField(null=False,blank=False)
    incruces = models.IntegerField(null=False, blank=False)
    max = models.IntegerField(null=False, blank=False)