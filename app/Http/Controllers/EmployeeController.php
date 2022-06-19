<?php

namespace App\Http\Controllers;

use App\Models\Employee;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Route;
use Log;
use Exception;
// Get the currently authenticated user...



class EmployeeController extends Controller
{
    public function index()
    {

        $employees = Employee::query()
            ->where('user_id', Auth::user()->id)
            ->get();

        return Inertia::render('Employee/List/index', [
            'employees' => $employees,
        ]);
    }

    public function destroy(Employee $id)
    {
        try
        {
            $id->delete(); 
        }
        catch(Exception $e)
        {
            //Log::error($e);
        }
    }

    public function update(Request $request)
    {
        try
        {
            $id     = $request->get('id');
            $company_name   = $request->get('company_name');
            $company_ceo = $request->get('company_ceo');
            $company_address = $request->get('company_address');
            $inception_date = $request->get('inception_date');
            


            Employee::where('id', $id)->update([
                'company_name'   =>  $company_name,
                'company_ceo' =>  $company_ceo,
                'company_address' => $company_address,
                'inception_date' => $inception_date,
                
            ]);

            return response()->json([
                'company_name'   =>  $company_name,
                'company_ceo' =>  $company_ceo,
                'company_address' => $company_address,
                'inception_date' => $inception_date
            ]);
        
        }
        catch(Exception $e)
        {
            Log::error($e);
        }
    }

    public function store(Request $request)
    {
        try
        {
            $company_name   = $request->get('company_name');
            $company_ceo = $request->get('company_ceo');
            $company_address = $request->get('company_address');
            $inception_date = $request->get('inception_date');
            $user = Auth::user();

// Get the currently authenticated user's ID...

            $user_id = Auth::id();
            Employee::create([
                'company_name'   =>  $company_name,
                'company_ceo' =>  $company_ceo,
                'company_address' => $company_address,
                'inception_date' => $inception_date,
                'user_id' => $user_id,
            ]);

            // return response()->json([
            //     'company_name'   =>  $company_name,
            //     'company_ceo' =>  $company_ceo,
            //     'company_address' => $company_address,
            //     'inception_date' => $inception_date
            // ]);
           
        
        }
        catch(Exception $e)
        {
            Log::error($e);
        }
    }

    public function add()
    {
        return Inertia::render('Employee/List/addform');
    }

}
