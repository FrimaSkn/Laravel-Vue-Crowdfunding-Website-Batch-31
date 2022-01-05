<?php

use App\User;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/route-1', function () {
    return "email verified ";
})->middleware('email_verified');

Route::get('/route-2', function () {
    return "email verified dan anda adalah admin";
})->middleware('admin');

