# Generated by Django 4.0.5 on 2022-06-27 13:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cloudapi', '0006_rename_software_soft'),
    ]

    operations = [
        migrations.CreateModel(
            name='Softtech',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(default='', max_length=64)),
                ('price', models.IntegerField()),
                ('incruces', models.IntegerField()),
                ('max', models.IntegerField()),
            ],
        ),
    ]