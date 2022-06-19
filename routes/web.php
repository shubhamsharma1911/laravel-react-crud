<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\EmployeeController;
use App\Http\Controllers\WelcomeController;


Route::get('/', [WelcomeController::class, 'index'])->name('welcome.index');;

Auth::routes();

Route::get('/home', [HomeController::class, 'index'])->name('home');
Route::group(['middleware' => ['auth']], function(){
    Route::get('/employees', [EmployeeController::class, 'index'])->name('employees.index');
    Route::delete('/employees/delete/{id}', [EmployeeController::class, 'destroy']);
    Route::post('/employees/update', [EmployeeController::class, 'update']);
    Route::post('/employees/store', [EmployeeController::class, 'store']);
    Route::get('/employees/add', [EmployeeController::class, 'add'])->name('employees.add');
});// Auth::routes();

// Route::get('/home', [HomeController::class, 'index'])->name('home');
