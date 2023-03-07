<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;


class UserController extends Controller
{

    // user-create
    public function createUser(Request $request)
    {
        try {
            $request->validate([
                'name' => 'required|string|max:100',
                'lastname' => 'required|string|max:100',
                'cc' => 'required|integer',
                'email' => 'required|email|max:150',
                'country' => 'required|string',
                'address' => 'required|string|max:180',
                'phone' => 'required|string|max:10',
                'category' => 'required|exists:categories,id',
            ]);

            $user = User::create([
                'name' => $request->name,
                'lastname' => $request->lastname,
                'cc' => $request->cc,
                'email' => $request->email,
                'country' => $request->country,
                'address' => $request->address,
                'phone' => $request->phone,
                'category'=> $request->category,
            ]);
        } catch (\exception $e) {
            return response()->json([
                'message' => $e->getMessage()
            ], 400);
        }

        return $user;
    }

    // user-list
    public function userList()
    {
        return User::get();
    }

    // user-update
    public function updateUser($id, Request $request)
    {
        try {
            $request->validate([
                'name' => 'required|string|max:100',
                'lastname' => 'required|string|max:100',
                'cc' => 'required|integer',
                'email' => 'required|email|max:150',
                'country' => 'required|string',
                'address' => 'required|string|max:180',
                'phone' => 'required|string|max:10',
                'category' => 'required|exists:categories,id',
            ]);
        } catch (\Throwable $th) {
            return response()->json(['error' => $th->getMessage()]);
        }

        User::find($id)->update([
            'name' => $request->name,
            'lastname' => $request->lastname,
            'cc' => $request->cc,
            'email' => $request->email,
            'country' => $request->country,
            'address' => $request->address,
            'phone' => $request->phone,
            'category'=> $request->category,
        ]);

        return 'usuario actualizado exitosamente';
    }

    // user-delete
    public function deleteUser($id)
    {
        User::find($id)->delete();
        return 'usuario  eliminado exitosamente';
    }
}
