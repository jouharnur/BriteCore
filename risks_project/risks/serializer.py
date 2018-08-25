from rest_framework import serializers
from .models import RiskType, RiskValue, FieldType, FieldOptions, RiskHeader


class FieldOptionsSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = FieldOptions
        fields = ('options', 'fieldtype')


class RiskSerializer(serializers.ModelSerializer):

    class Meta:
        model = RiskType
        fields = '__all__'
        

class FieldTypeSerializer(serializers.ModelSerializer):
    options = FieldOptionsSerializer(many=True)
    risktype= RiskSerializer()    
    class Meta:
        model = FieldType
        fields = ('risktype','field_label', 'field_type', 'options')
        



class RiskValueSerializer(serializers.ModelSerializer):
    fieldtype= FieldTypeSerializer()
    class Meta:
        model = RiskValue
        fields = ('id','fieldtype','value')

class RiskHeaderSerializer(serializers.ModelSerializer):
    values = RiskValueSerializer(many=True)
    
    class Meta:
        model = RiskHeader 
        fields = ('id','datecreated','risktype', 'values')
        depth=4

