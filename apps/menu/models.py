from django.db import models


# Create your models here.

class Menu(models.Model):
    text = models.CharField(max_length=100, blank=True, default=None)
    icon_cls = models.CharField(max_length=100, blank=True, default=None)
    status = models.BooleanField(default=True)
    class_name = models.CharField(max_length=100, null=True, default=None)
    require_text = models.CharField(max_length=200, null=True, default=None)
    require_source = models.CharField(max_length=200, null=True, default=None)
    parent = models.ForeignKey(
        'self', blank=True, null=True, related_name='items')

    def __str__(self):
        return self.text

    def as_json(self):
        res = dict(id=self.id,
                   text=self.text,
                   status=self.status,
                   class_name=self.class_name,
                   require_text=self.require_text,
                   require_source=self.require_source,
                   parent=self.parent_id)
        return res
