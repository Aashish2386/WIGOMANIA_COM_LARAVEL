<?php

namespace App\Http\Controllers;

use App\Models\Reviews;
use Illuminate\Http\Request;

class ReviewController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
                $review=Reviews::orderBy('created_at','DESC')->paginate(10);
        return view('master.review.index')->with(compact('review'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('master.review.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate(
            [
                'date' => 'required',
                'name' => 'required',

            ],
            [
                'date.required' => 'date is required',
                'name.required' => 'name is required',

            ]
        );

        $request->validate([

        ]);
        $review=new Reviews();
        $review->name=$request->post('name');
        $review->owner_response=$request->post('owner_response');
        $review->client_review=$request->post('client_review');
        $review->date=date('Y-m-d', strtotime($request->post('date')));
        $review->save();


        return redirect()->route('review.index')->with('success','Review created successfully.');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
       $reviews=Reviews::find($id);
       return view('master.review.create')->with(compact('reviews'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, int $id)
    {


        $request->validate(
            [
                'date' => 'required',
                'name' => 'required',

            ],
            [
                'date.required' => 'date is required',
                'name.required' => 'name is required',

            ]
        );

        Reviews::where('reviews_id',$id)->update([
            'name'=>$request->post('name'),
            'client_review'=>$request->post('client_review'),
            'owner_response'=>$request->post('owner_response'),
            'date'=>date('Y-m-d', strtotime($request->post('date')))
        ]);

        return redirect()->route('review.index')->with('success','Review updated successfully');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Reviews::destroy($id);

        return redirect()->route('review.index')->with('success','Review deleted successfully');
    }
}
