<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Admin\News;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Illuminate\Support\Str;
use Intervention\Image\ImageManager;
use Intervention\Image\Drivers\Gd\Driver;
use Devfaysal\BangladeshGeocode\Models\Division;
use Devfaysal\BangladeshGeocode\Models\District;
use Devfaysal\BangladeshGeocode\Models\Upazila;

class NewsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $news = News::paginate(10);
        // return $subcategories;
        return Inertia::render('Admin/News/Index', ['news' => $news]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $divisions = Division::all();
        $districts = District::all();
        $upazilas = Upazila::all();

        $categories = Category::get();
        return Inertia::render('Admin/News/Create', ['categories' => $categories, 'divisions' => $divisions, 'districts' => $districts, 'upazilas' => $upazilas]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {

        // return $request->all();
        // $request->validate([
        //     'title' => 'required',
        //     'category_id' => 'required',
        // ]);

        $data = [
            'title' => $request->title,
            'slug' => Str::slug($request->name),
            'category_id' => $request->category_id,
            'description' => $request->description,
            'video_ifrem' => $request->video_ifrem,
            'meta_title' => $request->meta_title,
            'meta_description' => $request->meta_description,
            'keyword' => $request->keyword,
            'division_id' => $request->division_id,
            'district_id' => $request->district_id,
            'upazila_id' => $request->upazila_id,
            'visibility' => $request->visibility,
            'user_id' => Auth::user()->id,

        ];


        if ($request->file('thumbnail')) {
            $imagethumbnail = $request->file('thumbnail');
            $extension = $imagethumbnail->getClientOriginalExtension();
            $thumbnailname = Str::uuid() . '.' . $extension;

            $manager = new ImageManager(Driver::class);
            $img = $manager->read($request->file('thumbnail'));
            $img = $img->scale(200);

            $path_name = '/uploads/thumbnail/news' . $thumbnailname;

            $some = $img->save(public_path($path_name));

            $data['thumbnail'] = $path_name;
        }

        News::create($data);
        return to_route('news.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $subcategory = News::where('id', $id)->first();
        $categories = Category::get();
        return Inertia::render('Admin/News/Edit', ['subcategory' => $subcategory, 'categories' =>  $categories]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $request->validate([
            'name' => 'required'
        ]);

        $data = [
            'name' => $request->name,
            'slug' => Str::slug($request->name),
            'category_id' => $request->category_id,
            'description' => $request->description,
            'update_user_id' => Auth::user()->id,
        ];

        if ($request->file('thumbnail')) {
            $imagethumbnail = $request->file('thumbnail');
            $extension = $imagethumbnail->getClientOriginalExtension();
            $thumbnailname = Str::uuid() . '.' . $extension;

            $manager = new ImageManager(Driver::class);
            $img = $manager->read($request->file('thumbnail'));
            $img = $img->scale(200);

            $path_name = '/uploads/thumbnail/news/' . $thumbnailname;

            $some = $img->save(public_path($path_name));

            $data['thumbnail'] = $path_name;
        }

        $news = news::firstWhere('id', $id);
        $news->update($data);

        return to_route('news.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        News::where('id', $id)->delete();
        return redirect()->route('news.index');
    }
}
