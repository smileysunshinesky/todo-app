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
