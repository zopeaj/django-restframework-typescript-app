from django.db import models

# Create your models here.
class Students(models.Model):
    studentId = models.IntegerField(primary_key=True, nullable=False)
    name = models.CharField(default='', nullable=False)
    age = models.IntegerField(default=0, nullable=False)
    email = models.EmailField(default='johndoe@example.com', nullable=False)
    lastname = models.CharField(default='', nullable=False)
    firstname = models.CharField(default='', nullable=False)

    def __str__(self):
        return "%s --- %s" % (self.studentId, self.name)

    def get_absolute_url(self):
        return None
