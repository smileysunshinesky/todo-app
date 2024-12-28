<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Todo;

class TodoController extends Controller
{
    public function index()
    {
        $todos = Todo::all();

        return response()->json($todos);
    }

    public function create(Request $request)
    {
        $todo = Todo::create([
            'description' => $request->description,
            'completed' => false,
        ]);

        return response()->json($todo);
    }

    public function store(Request $request)
    {
        // Validate the request data
        $request->validate([
            'description' => 'required|string|max:255',
            'completed' => 'boolean',
        ]);

        // Create a new todo instance
        $todo = new Todo();
        $todo->description = $request->description;
        $todo->completed = $request->filled('completed') ? $request->completed : false;
        $todo->save();

        // Return the newly created todo
        return response()->json($todo, 201);

        // return $request;
    }

    public function update(Request $request, $id)
    {
        $todo = Todo::find($id);

        $todo->completed = $request->has('completed') ? $request->completed : $todo->completed;
        $todo->save();

        return response()->json($todo);
    }

    public function delete()
    {
        $todo = Todo::where('completed', true)->delete();

        return response()->json($todo);
    }
}
