from django.db import models

class Education(models.Model):
    school = models.CharField(max_length=100)
    degree = models.CharField(max_length=100, blank=True)
    start_date = models.DateField(max_length=50, blank=True, null=True)
    end_date = models.DateField(max_length=100, blank=True, null=True)
    expected = models.BooleanField(default=False)
    present = models.BooleanField(default=False)
    description = models.TextField(blank=True)

class Experience(models.Model):
    company = models.CharField(max_length=100)
    role = models.CharField(max_length=100)
    start_date = models.DateField(max_length=50, blank=True, null=True)
    end_date = models.DateField(max_length=50, blank=True, null=True)
    expected = models.BooleanField(default=False)
    present = models.BooleanField(default=False)
    description = models.TextField(blank=True)

class Skill(models.Model):
    name = models.CharField(max_length=50)
    category = models.CharField(max_length=50)