# laravel-react-crud

# setup steps
1. Clone the repository
2. Install composer dependencies using composer install
3. Once you have installed the dependencies, you need to create the .env file. You can copy the example file using this command cp .env.example .env
4. After you have created you .env file you need to generate the application key by running this command php artisan key:generate
5. Create a new mysql database and add the details of your MySQL server in the .env file.
6. Once the database connection is ready, you need to run the migrations using the following command php artisan migrate --seed
7. then run npm install
8. then run npm run dev it will build all the files 
9. lastly run php artisan serve, to start the application
10. create your account, login with that and you are ready to use the application
11. either you can directly login with email=test@example.com and password=password

# checklist
- [x] Frontend in React(TypeScript)
- [X] Backend in Laravel
- [X] CRUD Operations
- [X] Authentication (login, signup)
- [X] Use of InertiaJs to talk to laravel
- [X] Material UI Table to perform CRUD Operations
- [X] One Seprate form also to peform addition along with Material UI Table
- [X] MVC architecture
- [X] Prettier and Linter Configuration
- [x] Dockerised
- [X] Deployement steps in Readme File
- [X] Mobile Responsive

# setup using docker
## Prerequisite
Make sure you have [docker](https://docs.docker.com/install/) and [docker-compose](https://docs.docker.com/compose/install/) installed on you machine.

1. `git clone`
2. `create a .env file copy content from .env.docker and do not make any change`

run following command in terminal / power shell
```
docker-compose up -d
```

when docker will finish building the containers, access the "laravel-react-app" container using following command

`docker exec -it lr_app sh`

now you will be inside container

run following commands
1. `composer install && composer update`
2. `php artisan migrate --seed`
3. `php artisan key:gen`
4. if npm version < 7 `npm install && npm run dev` else `npm install --legacy-peer-deps && npm run dev`
5. `php artisan serve`

open browser and check the following address

`http://localhost:8100`

# ScreenShots
![MainPage](mainPage.png)
![LoginPage](loginPage.png)
![HomePage](HomePage.png)
![DataView](DataViewPage.png)
![AddForm](AddFormPage.png)
