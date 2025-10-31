from django.db import models

# Create your models here.

class TodoItem(models.Model):
    title = models.CharField(max_length=20)
    description = models.TextField(max_length=200)
    is_completed = models.BooleanField(default=False)
    is_favourite = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.title} -> {"completed" if self.is_completed else "not done yet"}'