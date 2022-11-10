<x-app-layout>
    <x-slot name="header">
        <div class="md:flex md:items-center md:justify-between">
            <div class="flex-1 min-w-0">
                <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                    Reviews
                </h2>
            </div>
            <div class="mt-4 flex md:mt-0 md:ml-4">

                <a href="{{url('review')}}" class="inline-flex items-center px-3.5 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-indigo-700 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700">Back</a>


            </div>
        </div>
    </x-slot>
    <br>


    <div class="container">
        <div class="mt-10 sm:mt-0">
            <div class="md:grid md:grid-cols-4 md:gap-6">
                <div class="md:col-span-1">

                </div>

                <div class="mt-5 md:mt-0 md:col-span-3">

                    <form  action="{{(isset($reviews))?route('review.update',$reviews->reviews_id):route('review.store')}}" method="POST"  enctype="multipart/form-data" >
                        @csrf
                        @if(isset($reviews))
                            @method('PUT')
                        @endif



                        <div class="shadow sm:rounded-md sm:overflow-hidden">
                            <div class="bg-white py-6 px-4 space-y-6 sm:p-6">
                                <div class="sm:col-span-4">
                                    <label for="email" class="block text-sm font-medium text-gray-700"> Date </label>
                                    <div class="mt-1">
                                        <input id="date" name="date" type="date" value="{{ !empty(old('date'))?old('date'):(!empty($reviews->date)?date('Y-m-d',strtotime($reviews->date)):date('d-m-Y')) }}" autocomplete="name" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md">
                                        @error('date')
                                        <p class="mt-2 text-sm text-red-600" id="email-error">{{ $message }}</p>
                                        @enderror
                                    </div>
                                </div>

                                <div class="sm:col-span-4">
                                    <label for="email" class="block text-sm font-medium text-gray-700"> Name </label>
                                    <div class="mt-1">
                                        <input id="name" name="name" type="text" value="{{isset($reviews)?$reviews->name:old('reviews')}}" autocomplete="name" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md">
                                        @error('name')
                                        <p class="mt-2 text-sm text-red-600" id="email-error">{{ $message }}</p>
                                        @enderror
                                    </div>
                                </div>


                                <div class="sm:col-span-6">
                                    <label for="about" class="block text-sm font-medium text-gray-700"> Client Review </label>
                                    <div class="mt-1">
                                        <textarea id="client_review" name="client_review" rows="3" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-300 rounded-md">{{isset($reviews)?$reviews->client_review:old('client_review')}}</textarea>
                                    </div>

                                </div>

                                <div class="sm:col-span-6">
                                    <label for="about" class="block text-sm font-medium text-gray-700"> Owner Response </label>
                                    <div class="mt-1">
                                        <textarea id="owner_response" name="owner_response" rows="3" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-300 rounded-md">{{isset($reviews)?$reviews->owner_response:old('owner_response')}}</textarea>
                                    </div>

                                </div>
                                <div class="pt-5">
                                    <div class="flex justify-end">
                                        <a href="{{route('review.index')}}" class="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Cancel</a>
                                        <button type="submit" class="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Save</button>
                                    </div>
                                </div>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    </div>





</x-app-layout>
