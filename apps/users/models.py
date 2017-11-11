from django.contrib.auth.models import PermissionsMixin, AbstractBaseUser, BaseUserManager
from django.db import models


class UserManager(BaseUserManager):
    def _create_user(self, username, email, password, is_staff, is_superuser,
                     **extra_fields):
        if not email:
            return ValueError('El email es obligatorio')
        email = self.normalize_email(email)
        user = self.model(username=username, email=email, is_active=True,
                          is_staff=is_staff,
                          is_superuser=is_superuser, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_user(self, username, email, password, **extra_fields):
        return self._create_user(username, email, password, False, False, **extra_fields)

    def create_superuser(self, username, email, password, **extra_fields):
        return self._create_user(username, email, password, True, True, **extra_fields)


class User(AbstractBaseUser, PermissionsMixin):
    username = models.CharField(max_length=30, unique=True)
    email = models.EmailField(max_length=100, unique=True)
    first_name = models.CharField(max_length=100)
    second_name = models.CharField(max_length=100)
    third_name = models.CharField(max_length=100)
    ci = models.IntegerField(default=0)

    objects = UserManager()

    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)

    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = ['email', ]

    def get_short_name(self):
        return self.username

    def as_json(self):
        return dict(id=self.id, username=self.username, email=self.email,
                    first_name=self.first_name, second_name=self.second_name,
                    third_name=self.third_name, ci=self.ci)
