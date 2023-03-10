<!DOCTYPE html>
<html lang="de" dir="ltr" bs-dark-theme="dark">

<head>
    <title>Ticket Create</title>
    <link href="https://cdn.quilljs.com/1.3.6/quill.snow.css" rel="stylesheet">
    <link rel="stylesheet" href="/UserIncludes/Style/TicketCreate.css" type="text/css">
    <link rel="stylesheet" href="/Style/global.css" type="text/css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
    <script src="//cdn.quilljs.com/1.3.6/quill.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"></script> 
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js"></script>
</head>

<body>
    <div class="container mx-4 p-5">
        <form method="post">
            <div id="container-info"></div>
            <div class="row mb-1">
                <div class="input-group">
                    <span class="input-group-text">Betreff</span>
                    <input type="text" class="form-control" id="Betreff" placeholder="Betreff" autocomplete="off"
                        list="BetreffListe" required>
                    <datalist id="BetreffListe">
                        <option value="Audi"></option>
                        <option value="Lambo"></option>
                        <option value="BMW"></option>
                    </datalist>
                </div>
            </div>
            <div class="row my-4">
                <div class="col-md-4">
                    <div class="input-group">
                        <span class="input-group-text">Priorität</span>
                        <select class="form-select" id="Prioritaet">
                            <option value="1" selected>Kann weiterarbeiten</option>
                            <option value="2">Kann nicht weiterarbeiten</option>
                        </select>
                    </div>
                </div>
                <div class="col-md-2">
                    <div class="form-check">
                        <input type="checkbox" class="form-check-input" name="checkboxVisible" id="checkboxVisible">
                        <label class="form-check-label" for="checkboxVisible">Ticket für alle sichtbar</label>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="input-group">
                        <span class="input-group-text">Kategorie</span>
                        <select class="form-select" id="Kategorie">
                            <option value="1" selected>Vemas</option>
                            <option value="2">PC-Probleme</option>
                            <option value="3">Neue Hardware - Anfrage</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="row mt-5">
                <div class="background-color-editor">
                    <div id="editor"></div>
                    <script>
                    var quill = new Quill('#editor', {
                        modules: {
                            toolbar: [
                                // eine eckige Klammer repräsentiert einen "abschnitt"
                                // dadurch entsteht ein gewisser abstand zu anderen elementen
                                [{
                                    'font': []
                                }],
                                ['bold', 'italic', 'underline', 'strike'],
                                ['blockquote', 'code-block'],
                                [{
                                    'header': [1, 2, 3, 4, 5, 6, false]
                                }],
                                [{
                                    'list': 'ordered'
                                }, {
                                    'list': 'bullet'
                                }],
                                [{
                                    'indent': '-1'
                                }, {
                                    'indent': '+1'
                                }],
                                [{
                                    'direction': 'rtl'
                                }],
                                [{
                                    'color': []
                                }, {
                                    'background': []
                                }],
                                [{
                                    'align': []
                                }],
                                ['image', 'link']
                            ]
                        },
                        placeholder: 'Beschreibung zu deinem Problem',
                        theme: 'snow'
                    });
                    </script>
                </div>
            
            </div>
            <button class="btn btn-primary mt-4" id="btn-submit" type="submit">Ticket erstellen</Button>  
            <button class="btn btn-primary mt-4" id="btn-cancel" type="submit">Inhalt löschen</Button>  
        </form>
    </div>
</body>

</html>