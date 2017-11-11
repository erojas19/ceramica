# Sistema de produccion
## pasos para la instalacion
admin-django startproject ceramica
## pasos para runserver
python manage.py runserver --settings=ceramica.settings.local

python manage.py makemigrations users
python manage.py migrate
python manage.py createsuperuser
python manage.py makemigrations menu
python manage.py migrate
python manage.py loaddata apps\menu\fixtures\initial_data.json
python manage.py makemigrations company
python manage.py migrate
python manage.py product
python manage.py migrate
python manage.py makemigrations produccion
python manage.py migrate

## instalar extjs 6
### para instalar extjs descomprima extjs6  en la carpeta /static/ext/