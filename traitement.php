<?php
// Récupérer le texte depuis le formulaire
$texteUtilisateur = $_POST['texte'];

// Chemin vers le fichier texte
$cheminFichier = 'textes_utilisateurs.txt';

// Ouvrir le fichier en mode écriture, en ajoutant le texte à la fin
$file = fopen($cheminFichier, 'a');

// Écrire le texte dans le fichier, suivi d'un saut de ligne
fwrite($file, $texteUtilisateur . "\n");

// Fermer le fichier
fclose($file);

// Rediriger l'utilisateur vers la page d'accueil ou afficher un message de confirmation
header('Location: index.html');
exit();
?>
