# Generated by Django 2.1 on 2018-08-24 05:28

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('risks', '0003_auto_20180824_0827'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='riskvalue',
            name='datecreated',
        ),
        migrations.RemoveField(
            model_name='riskvalue',
            name='datemodified',
        ),
    ]
