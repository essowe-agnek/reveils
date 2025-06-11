$(document).ready(function() {

    // gestion des reveils
    let reveils = [
        {
            id: 'reveilsbible',
            title: 'Les Réveils dans la Bible',
            description: 'Caractéristiques des formidables réveils aux temps bibliques suscités par des hommes de Dieu tels qu\'Esdras, Elie, David, Jonas, l\'apôtre Pierre',
            image: 'images/reveils-bibliques.png',
            date: 'Biblique',
            link: ''
        },
        {
            id: 'wesley',
            title: 'John Wesley',
            description: 'Le fondateur du méthodisme et l\'un des plus grands réformateurs du 18e siècle (1703-1791)',
            image: 'images/john-wesley.png',
            date: '1703-1791',
            link: 'reveils/john-wesley.html'
        },
        {
            id: 'luther',
            title: 'Martin Luther',
            description: 'Le grand réformateur qui ramena dans l\'Eglise l\'autorité et les vérités des Saintes Ecritures (1483-1546)',
            image: 'images/martin-luther.png',
            date: '16e siècle',
            link: ''
        },
        {
            id: 'reveilgalles',
            title: 'Le Réveil au Pays de Galles',
            description: 'Le réveil de 1904 déclenché par un humble mineur de 26 ans',
            image: 'images/reveil-galles.png',
            date: '1904',
            link: 'reveils/reveil-galles.html'
        },
        {
            id: 'azusastreet',
            title: 'Le Réveil d\'Azuza Street',
            description: 'Un précieux compte-rendu de l\'intense enfantement dans la prière précédant le réveil',
            image: 'images/reveil-azuza-street.png',
            date: '1906',
            link: 'reveils/reveil-azuza-street.html'
        },
        {
            id: '6vagues',
            title: 'Les Six Vagues de Réveil',
            description: 'Un aperçu des six mouvements successifs de l\'Esprit depuis la Réforme jusqu\'au début du 20e siècle',
            image: 'images/reveil-6vagues.png',
            date: 'Réforme - 20e siècle',
            link: ''
        },
        {
            id: 'feuduciel',
            title: 'Quand le Feu Descendit du Ciel',
            description: 'Un survol stimulant de quelques réveils historiques extrait du livre de George T.B. Davis',
            image: 'images/feu-du-ciel.png',
            date: 'Historique',
            link: ''
        },
        {
            id: 'savonarole',
            title: 'Jérôme Savonarole',
            description: 'Précurseur de la Grande Réforme Protestante (1452-1498)',
            image: 'images/savonarole.png',
            date: '15e siècle',
            link: ''
        },
        {
            id: 'premierreveilusa',
            title: 'Le Premier Grand Réveil aux Etats-Unis',
            description: 'Un réveil aux résultats incroyables sous l\'impulsion de Jonathan Edwards et George Whitefield',
            image: 'images/premier-reveil-usa.png',
            date: '1730-1740',
            link: ''
        },
        {
            id: 'reveilmethodiste',
            title: 'Le Réveil Méthodiste',
            description: 'Le réveil envoyé du ciel qui bouleversa la face de l\'Angleterre',
            image: 'images/reveil-methodiste.png',
            date: '18e siècle',
            link: ''
        },
        {
            id: 'finney',
            title: 'Dieu descend à New York',
            description: 'Un compte-rendu de l\'oeuvre du Saint-Esprit qui survint en 1820 à Rome, dans les environs de New York',
            image: 'images/finney.png',
            date: '1820',
            link: ''
        },
        {
            id: 'feu1857',
            title: 'Pourquoi le Feu Est-Il Tombé en 1857?',
            description: 'Un réveil qui survint en 1857 à New York en réponse à un mouvement de prière répandu dans toute la ville',
            image: 'images/feu-1857.png',
            date: '1857',
            link: ''
        },
        {
            id: 'topeka',
            title: 'Le Réveil de Topéka et le Réveil Pentecôtiste',
            description: 'Le secret du développement exceptionnel des assemblées aux temps apostoliques redécouvert',
            image: 'images/topeka.png',
            date: '1901-1905',
            link: ''
        },
        {
            id: 'reveilcoreen',
            title: 'La Pentecôte Coréenne',
            description: 'Une merveilleuse oeuvre de Dieu qui prépara des milliers à l\'adversité et à la souffrance',
            image: 'images/reveil-coreen.png',
            date: '1907-1910',
            link: ''
        },
        {
            id: 'reveildrome',
            title: 'Le Réveil de la Drôme',
            description: 'L\'un des deux grands réveils français du XXe siècle',
            image: 'images/reveil-drome.png',
            date: '1922-1939',
            link: ''
        }
    ];

    let displayedReveils = 6;
    let allReveilsDisplayed = false;

    function displayReveils() {
        $('#reveils-container').empty();
        const reveilsToShow = allReveilsDisplayed ? reveils : reveils.slice(0, displayedReveils);
        
        reveilsToShow.forEach((reveil) => {
            $('#reveils-container').append(`
                <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer" data-reveil-id="${reveil.id}">
                    ${reveil.image ? `<img src="${reveil.image}" alt="${reveil.title}" class="w-full h-48 object-cover">` : ''}
                    <div class="p-6">
                        <h3 class="text-xl font-semibold text-gray-800 mb-2">${reveil.title}</h3>
                        <p class="text-gray-600 mb-4">${reveil.description}</p>
                        <div class="flex justify-between items-center">
                            <span class="text-sm text-blue-600">${reveil.date}</span>
                            <a href="${reveil.link}" class="text-blue-600 hover:text-blue-800">Lire plus →</a>
                        </div>
                    </div>
                </div>
            `);
        });

        // Mettre à jour le texte du bouton
        $('#show-more').text(allReveilsDisplayed ? 'Voir moins' : 'Voir la liste complète');
    }

    // Afficher les 6 premiers réveils au chargement
    displayReveils();

    // Gérer le clic sur le bouton
    $('#show-more').click(function() {
        allReveilsDisplayed = !allReveilsDisplayed;
        displayReveils();
        
        // Faire défiler doucement vers le haut de la section
        $('html, body').animate({
            scrollTop: $('#reveils-list').offset().top - 100
        }, 500);
    });
});