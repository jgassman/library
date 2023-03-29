from django.db import models


class Author(models.Model):
    first_name = models.CharField(max_length=100, null=True, blank=True)
    last_name = models.CharField(max_length=100)

    @property
    def display_name(self):
        return f'{self.first_name} {self.last_name}' if self.first_name else f'{self.last_name}'

    def __repr__(self):
        return f'Author(first_name={self.first_name}, last_name={self.last_name})'

    def __str__(self):
        return self.display_name

    class Meta:
        unique_together = ('first_name', 'last_name')
        ordering = ['last_name', 'first_name']
