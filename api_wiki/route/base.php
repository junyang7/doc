<?php


use PF\Cores\Route;


Route::prefix('api')->middlewareList(['cors', ])->group(function(){
    Route::post('/user/login', 'ControllerUser@login');
});


Route::prefix('api')->middlewareList(['cors', ])->group(function(){
    Route::post('/document/add', 'ControllerDocument@add');
    Route::get('/document/title/getList', 'ControllerTitle@getList');
    Route::get('/document/content/get', 'ControllerContent@get');
    Route::post('/document/set', 'ControllerDocument@set');
    Route::any('/', 'ControllerIndex@index');
});
