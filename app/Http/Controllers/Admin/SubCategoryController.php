<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Admin\SubCategory;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Illuminate\Support\Str;
use Intervention\Image\ImageManager;
use Intervention\Image\Drivers\Gd\Driver;

class SubCategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $subcategories = SubCategory::paginate(10);
        // return $subcategories;
        return Inertia::render('Admin/SubCategory/Index', ['subcategories' => $subcategories]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $categories = Category::get();
        return Inertia::render('Admin/SubCategory/Create', ['categories' => $categories]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {

        // return $request->all();
        $request->validate([
            'name' => 'required',
            'category_id' => 'required',
        ]);

        $data = [
            'name' => $request->name,
            'slug' => Str::slug($request->name),
            'category_id' => $request->category_id,
            'description' => $request->description,
            'user_id' => Auth::user()->id,
        ];


        if ($request->file('thumbnail')) {
            $imagethumbnail = $request->file('thumbnail');
            $extension = $imagethumbnail->getClientOriginalExtension();
            $thumbnailname = Str::uuid() . '.' . $extension;

            $manager = new ImageManager(Driver::class);
            $img = $manager->read($request->file('thumbnail'));
            $img = $img->scale(200);

            $path_name = '/uploads/thumbnail/subcategory' . $thumbnailname;

            $some = $img->save(public_path($path_name));

            $data['thumbnail'] = $path_name;
        }

        SubCategory::create($data);
        return to_route('subcategory.index');
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
        $subcategory = SubCategory::where('id', $id)->first();
        $categories = Category::get();
        return Inertia::render('Admin/SubCategory/Edit', ['subcategory' => $subcategory, 'categories' =>  $categories]);
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

            $path_name = '/uploads/thumbnail/subcategory/' . $thumbnailname;

            $some = $img->save(public_path($path_name));

            $data['thumbnail'] = $path_name;
        }

        $subcategory = SubCategory::firstWhere('id', $id);
        $subcategory->update($data);

        return to_route('subcategory.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        SubCategory::where('id', $id)->delete();
        return redirect()->route('subcategory.index');
    }
}
