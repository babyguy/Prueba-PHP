<?php

use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// api/index
Route::get('index',[UserController::class, 'userList']);
// api/register
Route::post('register',[UserController::class, 'createUser']);
// api/updateUser/{id_user}
Route::post('updateUser/{id}',[UserController::class, 'updateUser']);
// api/deleteUser/{id_user}
Route::delete('deleteUser/{id}',[UserController::class, 'deleteUser']);