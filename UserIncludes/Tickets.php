<!DOCTYPE html>
<html lang="de" dir="ltr" bs-dark-theme="dark">
<head>
    <title>Tickets</title>    
    <link rel="stylesheet" href="/UserIncludes/Style/Tickets.css" type="text/css">
    <link rel="stylesheet" href="/Style/global.css" type="text/css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
    <script src="//cdn.quilljs.com/1.3.6/quill.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"></script> 
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js"></script>
</head>
<body>
    <div class="container m-4" id="container">
        <div class="input-container">
            <input type="text" class="form-control" id="searchbar_betreff" placeholder="Suche nach Betreff" onkeyup="filterSuche('searchbar_betreff', 0)">
            <input type="text" class="form-control" id="searchbar_datum" placeholder="Suche nach Datum" onkeyup="filterSuche('searchbar_datum', 1)">
            <input type="text" class="form-control" id="searchbar_kategorie" placeholder="Suche nach Kategorie" onkeyup="filterSuche('searchbar_kategorie', 2)">
            <input type="text" class="form-control" id="searchbar_status" placeholder="Suche nach Status" onkeyup="filterSuche('searchbar_status', 3)">
        </div>       
    </div>
</body>
</html>