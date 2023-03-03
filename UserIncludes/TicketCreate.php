<!DOCTYPE html>
<html>
<head>
    <title>Ticket Create</title> 
    <link href="https://cdn.quilljs.com/1.3.6/quill.snow.css" rel="stylesheet">
    <script src="//cdn.quilljs.com/1.3.6/quill.js"></script>
    </head>
    <body>
        <h1 style="color: #ffffff">TicketCreate</h1>  
        <div id="editor"></div>
        <script>
             var quill = new Quill('#editor', {
                theme: "snow"
            });
        </script>
        <button class="btn" id="btn-submit" type="submit">Speichern</button>
    </body>
</html>