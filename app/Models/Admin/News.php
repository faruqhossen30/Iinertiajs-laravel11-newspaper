<?php

namespace App\Models\Admin;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class News extends Model
{
    use HasFactory;
    protected $fillable =[
        'title',
        'slug',
        'description',
        'thumbnail',
        'video_ifrem',
        'meta_title',
        'meta_description',
        'keyword',
        'division_id',
        'district_id',
        'upazila_id',
        'user_id',
        'update_user_id',
        'visibility',
        'status',
    ];

}


