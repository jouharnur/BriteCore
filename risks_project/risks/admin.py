from django.contrib import admin
from .models import FieldType, RiskType, FieldOptions, RiskValue
# Register your models here.
@admin.register(FieldType)
class FieldTypeAdmin(admin.ModelAdmin):
    list_display=('field_label','field_type','risktype')

@admin.register(RiskType)
class RiskTypeAdmin(admin.ModelAdmin):
    pass

@admin.register(FieldOptions)
class FieldoptionsAdmin(admin.ModelAdmin):
    list_display=('options',)


@admin.register(RiskValue)
class RiskvalueAdmin(admin.ModelAdmin):
    list_display=('risktype','fieldtype','value')
    

