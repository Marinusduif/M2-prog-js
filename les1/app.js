class App
{
    runApplication()
    {    
        let appNaam = "gerbenland";
        let versienummer = 0.9;
        let versiedatum = new Date();
        let autheur = "marinus";
        let copyright = "joe moeder";
        let distributeur = "gerben";
        let darkmode = true
        console.log(appNaam);
        console.log(versienummer); 
        console.log(versiedatum);
        console.log(autheur);
        console.log(copyright);
        console.log(distributeur);
        console.log(darkmode);
    }

}

let app = new App();
app.runApplication();