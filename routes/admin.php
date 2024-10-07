<?php

use App\Http\Controllers\Admin\AdminController;
use App\Http\Controllers\Admin\CategoryController;
use App\Http\Controllers\Admin\DashboarController;
use App\Http\Controllers\Admin\NewsController;
use App\Http\Controllers\Admin\RoleController;
use App\Http\Controllers\Admin\SettingController;
use App\Http\Controllers\Admin\SubCategoryController;
use App\Http\Controllers\Admin\VotController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProfileController;


Route::middleware('auth')->prefix('admin')->group(function () {
    Route::get('dashboard', [DashboarController::class, 'index'])->name('dashboard');

    Route::resource('category', CategoryController::class);
    Route::resource('subcategory', SubCategoryController::class);
    Route::post('subcategory/{id}',[SubCategoryController::class,'update'])->name('subcategoryupdate');

    Route::resource('news', NewsController::class);
    Route::post('news/{id}',[NewsController::class,'update'])->name('newsupdate');

    Route::resource('vot',   VotController::class);
    Route::resource('role',  RoleController::class);
    Route::resource('admin', AdminController::class);

    Route::get('settings', [SettingController::class, 'index'])->name('settings');
    Route::get('settings/home', [SettingController::class, 'homesetting'])->name('setting.home');
    Route::post('settings/home/store', [SettingController::class, 'homesettingStore'])->name('setting.home.store');
    Route::get('settings/socialmedia', [SettingController::class, 'socialmediaSettings'])->name('setting.socialmedia');
    Route::post('settings/socialmedia/store', [SettingController::class, 'socialsettingStore'])->name('setting.socialmedia.store');
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
