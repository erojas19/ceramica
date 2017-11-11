from django.db import models
from apps.product.models import Product
from apps.users.models import User


class PhaseProduction(models.Model):
    phase = models.CharField(max_length=100)
    status = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):  # __unicode__ on Python 2
        return self.phase

    class Meta:
        ordering = ('id',)


class Machine(models.Model):
    user = models.ManyToManyField(User)
    product = models.ForeignKey(Product)
    date = models.DateField()
    time_start = models.DateTimeField()
    time_end = models.DateTimeField()
    quantity = models.IntegerField(default=0)
    rack = models.IntegerField(default=0)
    status = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return str(self.rack) + ' ' + str(self.quantity)

    class Meta:
        ordering = ('-id',)

    def as_json(self):
        return dict(id=self.id, date=self.date.strftime('%Y-%d-%m'),
                    time_start=self.time_start.strftime('%Y-%d-%m %H:%M%S'),
                    time_end=self.time_end.strftime('%Y-%d-%m %H:%M%S'),
                    quantity=self.quantity, rack=self.rack,
                    product=self.product.as_json(),
                    create_at=self.created_at.strftime('%Y-%d-%m %H:%M%S'),
                    update_at=self.updated_at.strftime('%Y-%d-%m %H:%M%S'))
