<!DOCTYPE html>
<html>
<head>
    <title>Ticket Create</title> 
    <link href="https://cdn.quilljs.com/1.3.6/quill.snow.css" rel="stylesheet">
    <link rel="stylesheet" href="/UserIncludes/Style/TicketCreate.css" type="text/css">
    <link rel="stylesheet" href="/Style/global.css" type="text/css">
    <script src="//cdn.quilljs.com/1.3.6/quill.js"></script>
    </head>
    <body>
        <h1>TicketCreate</h1>  
        <div class="background-color-editor">
            <div id="editor"></div>
                <script>
                    var quill = new Quill('#editor', {
                        modules: {
                        toolbar: [
                            // eine eckige Klammer repräsentiert einen "abschnitt"
                            // dadurch entsteht ein gewisser abstand zu anderen elementen
                                [{ 'font': [] }],
                                ['bold', 'italic', 'underline', 'strike'],
                                ['blockquote', 'code-block'],
                                [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
                                [{ 'list': 'ordered'}, { 'list': 'bullet' }],     
                                [{ 'indent': '-1'}, { 'indent': '+1' }],        
                                [{ 'direction': 'rtl' }],  
                                [{ 'color': [] }, { 'background': [] }], 
                                [{ 'align': [] }],

                            ]
                        },
                        placeholder: 'Beschreibung zu deinem Problem',
                        theme: 'snow'  
                    });
                </script>
        </div>        
        <button id="btn-submit" type="submit">Speichern</button>
    </body>
</html>