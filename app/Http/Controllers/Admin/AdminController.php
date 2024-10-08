<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;
use Spatie\Permission\Models\Role;

class AdminController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $admins = User::latest()->paginate(10);
        // return $admins;
        return Inertia::render('Admin/Admin/Index', ['admins'=>$admins]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $roles = Role::all();
        return Inertia::render('Admin/Admin/Create', ['roles'=>$roles]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'email' => 'required',
            'password' => ['required', 'confirmed', 'min:4'],
        ]);
        $data = [
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),

        ];
        // return $data;
        $ids = array_map('intval', $request->role_ids);
        $user = User::create($data);
        $user->assignRole($ids);
        return redirect()->route('admin.index')->with('create',' Admin Successfully Created');
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
        $admin = User::where('id', $id)->first();
        $roles = Role::all();
        return Inertia::render('Admin/Admin/Edit', ['admin' => $admin ,'roles' => $roles]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $ids = array_map('intval', $request->role_ids);
        $admin = User::firstWhere('id', $id);

        $admin->update([
            'name'     => $request->name,
            'email'    => $request->email,
            'password' => Hash::make($request->password),

        ]);

        // if ($request->role_ids) {
        //     $admin->roles()->detach();
        //     $admin->assignRole($ids);
        // }

        return redirect()->route('admin.index')->with('warning',' Admin Successfully Updated');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        User::where('id', $id)->delete();
        return redirect()->route('admin.index');
    }
}
