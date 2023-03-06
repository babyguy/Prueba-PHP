<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Category;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {

        $categories = [
            'cliente',
            'proovedor',
            'funcionario interno',
        ];

       

        foreach($categories as $category){
            Category::created([
                'nameCategory' => $category,
            ]);
        }

        \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);

        // \App\Models\Caterory::factory()->create([
        //     'nameCategory' => 'cliente',
        //     'nameCategory' => 'proovedor',
        //     'nameCategory' => 'funcionario interno',
        // ]);
    }
}
