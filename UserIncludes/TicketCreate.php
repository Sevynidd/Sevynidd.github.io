<!DOCTYPE html>
<html>
<head>
    <title>Ticket Create</title> 
    <link href="https://cdn.quilljs.com/1.3.6/quill.snow.css" rel="stylesheet">
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
        
        <button class="btn" id="btn-submit" type="submit"> Speichern</button>
    </body>
</html>