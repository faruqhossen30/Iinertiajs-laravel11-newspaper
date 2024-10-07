<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;
use Inertia\Inertia;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class RoleController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $roles = Role::latest()->paginate(10);
        // return  $roles;
        return Inertia::render('Admin/Role/Index', ['roles' => $roles]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $roles = Role::all();
        // return $roles;
        $permissions = Permission::all();
        // return $permissions;
        return Inertia::render('Admin/Role/Create', ['roles' => $roles, 'permissions' => $permissions]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate(
            [
                'name' => 'required|unique:'.Role::class,
                'permissionIds'
            ]
        );
        $createdRole = Role::create(['name' => $request->name]);
        $permissions = array_map('intval', $request->permissionIds);
        $createdRole->syncPermissions($permissions);

        Session::flash('create');
        return redirect()->route('role.index')->with('create', ' Role  Successfully Created');
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
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
