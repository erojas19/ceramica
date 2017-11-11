from django.db import models


# Create your models here.
class Empresa(models.Model):
  name = models.CharField(max_length=100)
  direction = models.CharField(max_length=100)
  nit = models.CharField(max_length=100)
  website = models.URLField()
  email = models.EmailField()

  class Meta:
    ordering = ['-id']

  def __str__(self):
    return u"%s" % self.name

  def as_json(self):
    return dict(pk=self.pk, name=self.name, direction=self.direction, nit=self.nit,
                website=self.website, email=self.email)
