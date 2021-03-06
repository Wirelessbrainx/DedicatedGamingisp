<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta name="description" content="A Dedicated ISP for Gaming">
        <meta name="keywords" content="ISP, Dedicated, Gaming">
        <meta name="author" content="Oliver Grimes">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>DedicatedGamingISP</title>
        <link href="{{mix('css/app.css')}}" rel="stylesheet" type="text/css">
    </head>
    <body>
        <div id="app" class='react-container'></div>
        <script src="{{mix('js/app.js')}}" ></script>
    </body>
</html>
