<?php

namespace App\Models\Admin\Settings;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Setting extends Model
{
    use HasFactory;

    protected $fillable = [
           'site_title',
            'info',
            'logo',
            'banner',
            'tag',
            'email',
            'address',
            'telephone_no',
            'working_day',
            'working_time',
            'mobile_no',
            'facebook_group_link',
            'facebook_page_link',
            'facebook_link',
            'twitter_link',
            'instagram_link',
            'linkedin_link',
            'youtube_link',
            'intro_video_link'
    ];
}
