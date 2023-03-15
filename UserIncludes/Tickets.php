<!DOCTYPE html>
<html lang="de" dir="ltr" data-bs-theme="dark">
<head>
    <title>Tickets</title>   
    <link rel="icon" type="image/x-icon" href="/Bilder/Ticketsystem.png"> 
    <link rel="stylesheet" href="/UserIncludes/Style/Tickets.css" type="text/css">
    <link rel="stylesheet" href="/Style/global.css" type="text/css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0-alpha1/css/bootstrap.min.css" integrity="sha512-72OVeAaPeV8n3BdZj7hOkaPSEk/uwpDkaGyP4W2jSzAC8tfiO4LMEDWoL3uFp5mcZu+8Eehb4GhZWFwvrss69Q==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0-alpha1/js/bootstrap.bundle.min.js" integrity="sha512-i9cEfJwUwViEPFKdC1enz4ZRGBj8YQo6QByFTF92YXHi7waCqyexvRD75S5NVTsSiTv7rKWqG9Y5eFxmRsOn0A==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js"></script>
</head>
<body>
    <div class="container m-4" id="container">
        <div class="input-container my-4">
            <input type="text" class="form-control" id="searchbar_betreff" placeholder="Suche nach Betreff" onkeyup="filterSuche('searchbar_betreff', 0)">
            <input type="text" class="form-control" id="searchbar_kategorie" placeholder="Suche nach Kategorie" onkeyup="filterSuche('searchbar_kategorie', 1)">
            <input type="text" class="form-control" id="searchbar_Priorität" placeholder="Suche nach Priorität" onkeyup="filterSuche('searchbar_priorität', 2)">
            <input type="text" class="form-control" id="searchbar_status" placeholder="Suche nach Status" onkeyup="filterSuche('searchbar_status', 3)">
            <input type="text" class="form-control" id="searchbar_benutzer" placeholder="Suche nach Benutzer" onkeyup="filterSuche('searchbar_benutzer', 4)">
            <input type="text" class="form-control" id="searchbar_datum" placeholder="Suche nach Datum" onkeyup="filterSuche('searchbar_datum', 5)">
        </div> 
        <div> 
            <table class="table table-hover table-bordered" id="Tickets_Tabelle">
            <thead>
                <tr>
                    <th onclick="sortiereTabelle(0)" scope="col">Betreff</th>
                    <th onclick="sortiereTabelle(1)" scope="col">Kategorie</th>
                    <th onclick="sortiereTabelle(2)" scope="col">Priorität</th>
                    <th onclick="sortiereTabelle(3)" scope="col">Status</th>
                    <th onclick="sortiereTabelle(4)" scope="col">Benutzer</th>  
                    <th onclick="sortiereTabelle(5)" scope="col">Datum</th>                
                </tr>
            </thead>   
            </table>  
        </div>
    </div>
</body>
</html>