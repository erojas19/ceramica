from django.db import models


# Create your models here.
class Product(models.Model):
    name = models.CharField(max_length=150)
    description = models.CharField(max_length=250)
    status = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):  # __unicode__ on Python 2
        return self.name

    class Meta:
        ordering = ('-id',)

    def as_json(self):
        return dict(id=self.id, name=self.name, description=self.description,
                    status=self.status, created_at=self.created_at.strftime('%Y-%d-%m '
                                                                            '%H:%M%S'),
                    updated_at=self.updated_at.strftime('%Y-%d-%m %H:%M%S'))
