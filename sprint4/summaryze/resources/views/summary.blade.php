@extends('app')

@section('content')
	
	<div class="section">
	<div class="container">
		<p class="control" style="margin-bottom: 5rem;"><a href="{{ route('home') }}" class="button is-primary is-outlined">Back</a></p>


		@if ($summary->title) 
			<h1 class="title">{{ $summary->title }}</h1>
			<h2 class="subtitle"><a href="{{ $summary->uri }}">{{ $summary->uri }}</a></h2>
		@else
			<h1 class="title is-2"><a href="{{ $summary->uri }}">{{ $summary->uri }}</a></h1>
		@endif

		@if ($summary->description)
			<article class="message is-primary">
				<div class="message-body">{{ $summary->description }}</div>
			</article>
		@endif

		@if ($summary->keywords)
			@foreach ($summary->keywords as $keyword)
				<span class="control tag is-medium is-{{ $summary->randomColor() }}">{{ $keyword }}</span>
			@endforeach
		@endif

		@if ($summary->excerpts)
			<div class="columns is-multiline">
			@foreach($summary->excerpts as $excerpt)
			<div class="column is-one-third">
			<div class="card">
				<div class="card-content">
					{{ $excerpt }}
				</div>
			</div>
			</div>
			@endforeach
			</div>
		@endif


		@if ($summary->images)
			<div class="columns is-multiline" style="margin-top: 5rem;">
				@foreach ($summary->images as $image)
				<div class="column is-one-third">
					<img src="{{ $image }}" style="width: 100%; height: auto;">
				</div>
				@endforeach
			</div>
		@endif
	</div>
	</div>

@endsection