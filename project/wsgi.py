"""
WSGI config for book-api project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/2.1/howto/deployment/wsgi/
"""

import os

from django.core.wsgi import get_wsgi_application


settings = os.environ['DJANGO_ENV']
os.environ.setdefault('DJANGO_SETTINGS_MODULE', f'project.settings.{settings}')

application = get_wsgi_application()