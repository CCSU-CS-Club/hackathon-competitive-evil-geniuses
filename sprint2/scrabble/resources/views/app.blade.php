<!DOCTYPE html>
<html lang="{{ config('app.locale') }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Scrabble</title>

    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
</head>
<body>
    <div id="app" class="section">
    <div class="columns">
    <div class="column">
        <board></board>
        <stand></stand>
    </div>
    <div class="column">
        <game></game>
    </div>
    </div>

    </div>

    <script src="{{ asset('js/app.js') }}"></script>
</body>
</html>
