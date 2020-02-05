import os
import dj_database_url
import django_heroku
import psycopg2

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

SECRET_KEY = '8k9-*n^m_kgfaxt0u@@recgf9moyi599d2gqh!81nnng(jijut'

DEBUG = False

ALLOWED_HOSTS = ['vclinicapi.herokuapp.com']

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'djoser',
    'rest_framework',
    'rest_framework_simplejwt',
    'accounts.apps.AccountsConfig',
    'doctors.apps.DoctorsConfig',
]

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'whitenoise.middleware.WhiteNoiseMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'restful_ajax.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [os.path.join(BASE_DIR, 'templates')]
        ,
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': (
        'rest_framework_simplejwt.authentication.JWTAuthentication',
    ),
}

# WSGI_APPLICATION = 'restful_ajax.wsgi.application'

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': 'vclinic',
        'HOST': 'localhost',
        'PORT': '5432',
        'USER': 'postgres',
        'PASSWORD': 'root',
    }
}

# DATABASES = {
#     'default': {
#         'ENGINE': os.environ['ENGINE'],
#         'NAME': os.environ['NAME'],
#         'USER': os.environ['USER'],
#         'PASSWORD': os.environ['PASSWORD'],
#         'HOST': os.environ['HOST'],
#         'PORT': os.environ['PORT'],
#     }
# }

# DATABASE_URL = os.environ['DATABASE_URL']

# conn = psycopg2.connect(DATABASE_URL, sslmode='require')

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_L10N = True

USE_TZ = True

STATIC_URL = '/static/'

# MEDIA_URL = '/media/'

STATICFILES_DIRS = [
    os.path.join(BASE_DIR, "static"),
]

# Logging

LOGGING = {
    'version': 1,
    'disable_existing_loggers': False,
    'handlers': {
        'console': {
            'class': 'logging.StreamHandler',
        },
    },
    'loggers': {
        'django': {
            'handlers': ['console'],
             'level': os.getenv('DJANGO_LOG_LEVEL', 'DEBUG'),
        },
    },
}

STATIC_ROOT = os.path.join(BASE_DIR, "static_cdn")

BASE_URL = 'http://localhost:8000'

LOGIN_REDIRECT_URL = '/api/doctors/add'

DEBUG_PROPAGATE_EXCEPTIONS = True

STATICFILES_STORAGE = 'whitenoise.storage.CompressedManifestStaticFilesStorage'

prod_db = dj_database_url.config(conn_max_age=500)
DATABASES['default'].update(prod_db)

django_heroku.settings(locals())