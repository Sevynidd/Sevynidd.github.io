<!DOCTYPE html>
<html>
<head>
    <title>Ticket Create</title> 
    <link href="https://cdn.quilljs.com/1.3.6/quill.snow.css" rel="stylesheet">
    <link rel="stylesheet" href="/UserIncludes/TicketCreate.css" type="text/css">
    <link rel="stylesheet" href="/Style/global.css" type="text/css">
    <script src="//cdn.quilljs.com/1.3.6/quill.js"></script>
    </head>
    <body>
        <h1 style="color: #ffffff">TicketCreate</h1>  
        <div style="background: white; width: 1500px; height: 500px;">
        <div id="editor" style="border: none"></div>
            <script>
                var quill = new Quill('#editor', {
                    theme: "snow"
                });
            </script>
        </div>
        
        <button id="btn-submit" type="submit">Speichern</button>
    </body>
</html>