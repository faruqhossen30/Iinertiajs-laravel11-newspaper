<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Admin\Vot;
use Illuminate\Http\Request;
use Inertia\Inertia;

class VotController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $vots = Vot::latest()->paginate(10);
        return Inertia::render('Admin/Vot/Index', ['vots' => $vots]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {

        return Inertia::render('Admin/Vot/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $data = [
            'description' => $request->description,
            'start_date'  => $request->start_date,
            'end_date'    => $request->end_date,
        ];
        Vot::create($data);
        return to_route('vot.index');
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
        $vot = Vot::where('id', $id)->first();
        return Inertia::render('Admin/Vot/Edit', ['vot' => $vot]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $request->validate([
            'description' => 'required'
        ]);
        $data = [
            'description' => $request->description,
            'start_date'  => $request->start_date,
            'end_date'    => $request->end_date,
        ];
        $vot = Vot::firstWhere('id', $id);
        $vot->update($data);

        return to_route('vot.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        Vot::where('id', $id)->delete();
        return redirect()->route('vot.index');
    }
}
