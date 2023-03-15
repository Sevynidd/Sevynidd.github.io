<!DOCTYPE html>
<html lang="de" dir="ltr" bs-dark-theme="dark">

<head>
    <title>Dashboard</title>
    <link rel="icon" type="image/x-icon" href="/Bilder/Ticketsystem.png">
    <link rel="stylesheet" href="/UserIncludes/Style/Dashboard.css" type="text/css">
    <link rel="stylesheet" href="/Style/global.css" type="text/css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.2.3/css/bootstrap.min.css" integrity="sha512-SbiR/eusphKoMVVXysTKG/7VseWii+Y3FdHrt0EpKgpToZeemhqHeZeLWLhJutz/2ut2Vw1uQEj2MbRF+TVBUA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
</head>

<body>
    <div class="row mt-2">

        <div class="col-12">
            <div class="card text-white mb-4 shadow-sm py-4" id="card-welcome">
                <img class="rounded-circle ms-4" src="/Bilder/Benutzer.png" width=60px height=60px>
                <div class="card-body">

                    <h5 class="card-title mt-2" id="Username"></h5>
                    <h6 class="text-muted" id="WarumHier"></h6>
                </div>
            </div>
        </div>

        <div class="col-6">
            <div class="card text-white mb-4 shadow-sm">
                <span class="position-absolute top-0 start-0 translate-middle badge rounded-pill"
                    id="badge-eigene"></span>
                <div class="card-body table-responsive">
                    <h5 class="card-title">Deine Tickets
                        <button class="btn btn-warning float-end" id="btn-submit">Ticket erstellen</button>
                    </h5>
                    <p class="card-text">
                    <table class="table table-sm table-hover" id="table-eigeneTickets">
                        <thead>
                            <tr>
                                <th>Betreff</th>                                
                                <th>Priorität</th>
                                <th>Kategorie</th>
                                <th>Datum</th>
                            </tr>
                        </thead>        
                    </table>
                    </p>
                </div>
            </div>
        </div>

        <div class="col-6">
            <div class="card text-white mb-4 shadow-sm">
                <span class="position-absolute top-0 start-0 translate-middle badge rounded-pill"
                    id="badge-allgemeine"></span>
                <div class="card-body table-responsive">
                    <h5 class="card-title">Allgemeine Tickets
                        <button class="btn btn-warning float-end" id="btn-submit">Ticket erstellen</button>
                    </h5>
                    <p class="card-text">
                    <table class="table table-sm table-hover" id="table-allgemeineTickets">
                        <thead>
                            <tr>
                                <th>Betreff</th>
                                <th>Priorität</th> 
                                <th>Kategorie</th>                                                           
                                <th>Datum</th>                                
                                <th>Benutzer</th>
                            </tr>
                        </thead>        
                    </table>
                    </p>
                </div>
            </div>
        </div>

        <div class="col-6">
            <div class="card text-white mb-4 shadow-sm">
                <div class="card-body">
                    <h5 class="card-title">Danger card title</h5>
                    <p class="card-text">Some dummy text to make up the card's content. You can replace it anytime.</p>
                </div>
            </div>
        </div>

        <div class="col-6">
            <div class="card text-white mb-4 shadow-sm">
                <div class="card-body">
                    <h5 class="card-title">Warning card title</h5>
                    <p class="card-text">Some dummy text to make up the card's content. You can replace it anytime.</p>
                </div>
            </div>
        </div>

        <div class="col-6">
            <div class="card text-white mb-4 shadow-sm">
                <div class="card-body">
                    <h5 class="card-title">Info card title</h5>
                    <p class="card-text">Some dummy text to make up the card's content. You can replace it anytime.</p>
                </div>
            </div>
        </div>

        <div class="col-6">
            <div class="card text-white mb-4 shadow-sm">
                <div class="card-body">
                    <h5 class="card-title">Dark card title</h5>
                    <p class="card-text">Some dummy text to make up the card's content. You can replace it anytime.</p>
                </div>
            </div>
        </div>

    </div>

</body>

</html>