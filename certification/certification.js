var i = 0;
var txt = 'Bienvenue sur les Certifications     '; 
var speed = 150;

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("demo").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    } else {
        // Réinitialiser i pour permettre la répétition de l'animation
        i = 0;
        // Effacer le contenu du paragraphe pour la prochaine itération
        document.getElementById("demo").innerHTML = "";
        // Appeler à nouveau typeWriter après un délai
        setTimeout(typeWriter, speed);
    }
}
    
typeWriter();