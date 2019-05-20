<?php

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

Route::get('/{path?}', function($path = null){
    return View::make('app');
})->where('path', '.*'); 


// Route::get('/', function () {
//     return view('app');
// });

// Route::get('/{all?}', function(){
//     return view('app');
// })->where('all', '([A-z\d-\/_.]+)?');
//Auth::routes();

// Route::get('/home', 'HomeController@index')->name('home');
