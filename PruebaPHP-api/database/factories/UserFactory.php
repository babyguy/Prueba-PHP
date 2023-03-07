<?php

namespace Database\Factories;

use App\Models\Category;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\User>
 */
class UserFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => fake()->name(),
            'lastname'=>fake()->lastName(),
            'cc'=>fake()->randomNumber(8),
            'email' => fake()->unique()->safeEmail(),
            'country'=>fake()->country(),
            'address'=>fake()->address(),
            'phone'=>fake()->phoneNumber(),
            'category'=>Category::all()->random()->id,
        ];
    }

}
