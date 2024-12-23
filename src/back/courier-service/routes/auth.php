<?php

use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\Auth\ConfirmablePasswordController;
use App\Http\Controllers\Auth\EmailVerificationNotificationController;
use App\Http\Controllers\Auth\EmailVerificationPromptController;
use App\Http\Controllers\Auth\NewPasswordController;
use App\Http\Controllers\Auth\PasswordController;
use App\Http\Controllers\Auth\PasswordResetLinkController;
use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\Auth\VerifyEmailController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::middleware('guest')->group(function () {

    // Route::post('register', [RegisteredUserController::class, 'store']);

    // Route::post('login', [AuthenticatedSessionController::class, 'store']);

Route::get('/register', function () {
    return Inertia::render('Auth/Register');
})->name('register');

Route::get('/login', function () {
    return Inertia::render('Auth/Login');
})->name('login');
});
