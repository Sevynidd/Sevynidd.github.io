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
        <div class="container">        
            <label for="betreff">Betreff</label>
            <input type="text" list="dliste" id="betreff" placeholder="Betreff"/>
            <datalist id="dliste">
                <option value="Aachener …">
                <option value="Hamburger …">
                <option value="Mitteldeutscher …">
                <option value="Niederrheinische …">
            </datalist>
            <div class="container-DD_CB">
                <label for="prio">Priorität</label>
                <select name="priority" id="prio">
                    <option>Work in Progress</option>
                </select> 

                <input type="checkbox" id="cb_alle"></input>
                <label for="cb_alle">Betrifft alle</label>

                <label for="cat">Kategorie</label>
                <select name="category" id="cat">
                    <option>Work in Progress</option>
                </select> 
                    
            </div>
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
                                        ['image', 'link']
                                    ]
                            },
                            placeholder: 'Beschreibung zu deinem Problem',
                            theme: 'snow'  
                        });
                    </script>
            </div>    
            <div class="container-btns">    
                <button id="btn-submit" type="submit">Speichern</button>
                <button id="btn-cancel" type="submit">Abbrechen</button>
            </div>
        </div>
    </body>
</html>