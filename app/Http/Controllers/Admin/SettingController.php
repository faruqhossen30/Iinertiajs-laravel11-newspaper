<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Admin\Settings\Setting;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;


class SettingController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('Admin/SettingPage');
    }

    public function homesettingStore(Request $request)
    {
        // return $request->all();

        $request->validate([
            'site_title' => 'required'
        ]);
        Setting::updateOrInsert([
            'id' => 1
        ], [
            'site_title'    => $request->site_title,
            'info'          => $request->info,
            'logo'          => $request->logo,
            'banner'        => $request->banner,
            'email'         => $request->email,
            'address'       => $request->address,
            'telephone_no'  => $request->telephone_no,
            'mobile_no'     => $request->mobile_no,

        ]);

        return to_route('setting.home');
    }


    public function homesetting()
    {

        return Inertia::render('Admin/Homesettingpage');
    }
    public function socialmediaSettings()
    {

        return Inertia::render('Admin/SociamediaSetting');
    }




    public function socialsettingStore(Request $request)
    {
        // return $request->all();

        $request->validate([
            'facebook_group_link' => 'required'
        ]);
        Setting::updateOrInsert([
            'id' => 1
        ], [

            'facebook_group_link' => $request->facebook_group_link,
            'facebook_page_link'  => $request->facebook_page_link,
            'facebook_link'       => $request->facebook_link,
            'twitter_link'        => $request->twitter_link,
            'instagram_link'      => $request->instagram_link,
            'linkedin_link'       => $request->linkedin_link,
            'youtube_link'        => $request->youtube_link,
            'intro_video_link'    => $request->intro_video_link,

        ]);

        return to_route('setting.home');
    }

}
