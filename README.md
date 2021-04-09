# Neighbourhood Heroes
To connect those needing help with those willing to help, to strengthen communities and build friendships.

## Contributors

* [Asel Perera](https://github.com/aselperera)
* [Mahbub Ahmed](https://github.com/Mahbub55)
* [Beth Gooding](https://github.com/beth-gooding)

## Key Points

* This is currently a backend project, there is a limited frontend provided by Django and the Django Rest Framework
* Frontend will be added to this project later on in the bootcamp, when we have learnt about clientside frameworks

## Features

* Those in need can create tasks
* Tasks can be updated if the requirements change
* Volunteers are able to view the list of tasks
* Volunteers can select a task to complete
* Once the task is done, volunteers can mark the task as complete
* The original task setter can then remove the task from the database

## How to Use

1. Set up a virtual environment:
```sh
   python -m venv <environment-name>
```

2. Install the dependencies:
```sh
  .<environment-name>/Scripts/activate
  pip install -r requirements.txt
```

3. Apply the database migrations:
```sh
  python manage.py migrate
```

4. Deploy the app on your localhost:
```sh
  python manage.py runserver
```

5. Send requests using postman


## Technologies Used

* Django
* Django Rest Framework
* SQLite Database
* Postman