# Generated by Django 2.1 on 2018-08-22 11:26

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='FieldOptions',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('options', models.CharField(max_length=128)),
            ],
        ),
        migrations.CreateModel(
            name='FieldType',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('field_label', models.CharField(max_length=32)),
                ('field_type', models.CharField(choices=[(1, 'TEXT'), (2, 'NUMBER'), (3, 'DATE'), (4, 'ENUM')], max_length=32)),
            ],
        ),
        migrations.CreateModel(
            name='RiskType',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=128)),
            ],
        ),
        migrations.CreateModel(
            name='RiskValue',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('value', models.CharField(max_length=128)),
                ('fieldtype', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='risks.FieldType')),
                ('risktype', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='risks.RiskType')),
            ],
        ),
        migrations.AddField(
            model_name='fieldtype',
            name='risktype',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='risks.RiskType'),
        ),
        migrations.AddField(
            model_name='fieldoptions',
            name='fields',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='risks.FieldType'),
        ),
    ]