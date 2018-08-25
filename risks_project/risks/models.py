from django.db import models


class RiskType(models.Model):

    name = models.CharField(max_length=128)

    def __str__(self):
        return self.name


class FieldType(models.Model):
    
    TYPE_CHOICES = (('TEXT', 'TEXT'), ('NUMBER', 'NUMBER'), ('DATE', 'DATE'), ('ENUM', 'ENUM'))
    field_label = models.CharField(max_length=32)
    field_type = models.CharField(max_length=32, choices=TYPE_CHOICES)
    risktype = models.ForeignKey(RiskType, on_delete=models.CASCADE)

    def __str__(self):
        return self.field_label


class RiskHeader(models.Model):

    ref = models.CharField(max_length=128)
    datecreated = models.DateField(auto_now_add=True)
    risktype = models.ForeignKey(RiskType, on_delete=models.CASCADE)


class RiskValue(models.Model):
    
    fieldtype = models.OneToOneField(FieldType, on_delete=models.CASCADE)
    value = models.CharField(max_length=128)
    riskheader = models.ForeignKey(RiskHeader, related_name='values', on_delete=models.CASCADE)
    
    def __str__(self):
        return self.fieldtype.field_label + ":" + self.value


class FieldOptions(models.Model):
    options = models.CharField(max_length=128)
    fieldtype = models.ForeignKey(FieldType, related_name='options', on_delete=models.CASCADE)
    
    def __str__(self):
        return self.options