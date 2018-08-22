from rest_framework import serializers
from .models import RiskType, RiskValue, FieldType, FieldOptions


class RiskSerializer(serializers.ModelSerializer):

    class Meta:
        model = RiskType
        fields = '__all__'
        depth = 5


class FieldTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = FieldType
        fields = '__all__'
        depth = 3
