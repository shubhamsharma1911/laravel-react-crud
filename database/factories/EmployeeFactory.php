<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Employee>
 */
class EmployeeFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'company_name' => $this->faker->word(),
            'company_ceo' => $this->faker->word(),
            'company_address' => $this->faker->word(),
            'inception_date' => $this->faker->dateTime(),
            'user_id' => 1,

        ];
    }
}
