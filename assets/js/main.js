/* Coque Corporate Sports - interactions et traductions FR / EN / DE */
(function(){
  var $=function(s,c){return (c||document).querySelector(s)};
  var $$=function(s,c){return Array.prototype.slice.call((c||document).querySelectorAll(s))};
  var reduce=window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ================= i18n ================= */
  var L={
  en:{
    'js.pick':'Pick a programme','js.armed':'Now click a day for {p} (click again to remove it)','js.more':'Add another programme, or send your week',
    'js.free':'Free','js.add':'Click to add','js.dayempty':'empty','js.toggle':'Click to toggle {p}',
    'js.empty':'Your week is empty. Pick a programme, then a day, and build as many sessions as you like.',
    'js.n1':'1 weekly session planned.','js.nN':'{n} weekly sessions planned.',
    'js.p.climb':'Climbing Wall (2 h, groups of 8 or 16)','js.p.run':'Running Club (1 h, group of 12)','js.p.active':'Active Sessions (1 h, groups of 10, 20 or 25)','js.p.court':'Open Court (group of 10)',
    'js.d.0':'Mon','js.d.1':'Tue','js.d.2':'Wed','js.d.3':'Thu','js.d.4':'Fri',
    'js.D.0':'Monday','js.D.1':'Tuesday','js.D.2':'Wednesday','js.D.3':'Thursday','js.D.4':'Friday',
    'js.weekHdr':'My ideal week:','js.noteWeekly':'Weekly Sports programme','js.noteExp':'Team Experience: ','js.noteTailor':'A tailor-made Team Experience','js.noteKaart':'The Coque Kaart for our employees','js.pfx':'I am interested in: ',
    'js.err':'Please add your name and a valid work email so we can reply.',
    'js.sentT':'Your request is ready.','js.sentB':'If your email app did not open, copy the message below and send it to {mail}, or call {tel}.',
    'js.open':'Open my email app','js.copy':'Copy message','js.copied':'Copied','js.sel':'Selected, press copy',
    'js.hello':'Hello,\n\nI would like to discuss a Corporate Sports programme.','js.lName':'Name','js.lCompany':'Company','js.lEmail':'Email','js.lSize':'Team size','js.lInt':'Interested in','js.subject':'Corporate Sports request',
    'aria.week':'Your week','title':'Corporate Sports | Coque Luxembourg','desc':'Team experiences, the Coque Kaart and weekly sports programmes for companies in Luxembourg. Move together, perform better.'
  },
  fr:{
    'js.pick':'Choisissez un programme','js.armed':'Cliquez maintenant sur un jour pour {p} (cliquez à nouveau pour le retirer)','js.more':'Ajoutez un autre programme ou envoyez votre semaine',
    'js.free':'Libre','js.add':'Cliquer pour ajouter','js.dayempty':'libre','js.toggle':'Cliquer pour ajouter ou retirer {p}',
    'js.empty':'Votre semaine est vide. Choisissez un programme, puis un jour, et ajoutez autant de séances que vous le souhaitez.',
    'js.n1':'1 séance hebdomadaire prévue.','js.nN':'{n} séances hebdomadaires prévues.',
    'js.p.climb':'Climbing Wall (2 h, groupes de 8 ou 16)','js.p.run':'Running Club (1 h, groupe de 12)','js.p.active':'Active Sessions (1 h, groupes de 10, 20 ou 25)','js.p.court':'Open Court (groupe de 10)',
    'js.d.0':'Lun','js.d.1':'Mar','js.d.2':'Mer','js.d.3':'Jeu','js.d.4':'Ven',
    'js.D.0':'Lundi','js.D.1':'Mardi','js.D.2':'Mercredi','js.D.3':'Jeudi','js.D.4':'Vendredi',
    'js.weekHdr':'Ma semaine idéale :','js.noteWeekly':'Programme Weekly Sports','js.noteExp':'Team Experience : ','js.noteTailor':'Une Team Experience sur mesure','js.noteKaart':'La Coque Kaart pour nos collaborateurs','js.pfx':'Je suis intéressé(e) par : ',
    'js.err':'Merci d\'indiquer votre nom et une adresse e-mail professionnelle valide pour que nous puissions vous répondre.',
    'js.sentT':'Votre demande est prête.','js.sentB':'Si votre messagerie ne s\'est pas ouverte, copiez le message ci-dessous et envoyez-le à {mail}, ou appelez le {tel}.',
    'js.open':'Ouvrir ma messagerie','js.copy':'Copier le message','js.copied':'Copié','js.sel':'Texte sélectionné, copiez-le',
    'js.hello':'Bonjour,\n\nJe souhaite discuter d\'un programme Corporate Sports.','js.lName':'Nom','js.lCompany':'Entreprise','js.lEmail':'E-mail','js.lSize':'Taille de l\'équipe','js.lInt':'Intéressé(e) par','js.subject':'Demande Corporate Sports',
    'aria.week':'Votre semaine','desc':'Team Experiences, Coque Kaart et programmes Weekly Sports pour les entreprises au Luxembourg. Move together, perform better.',
    'cta.talk':'Nous contacter',
    'h1.a':'Mettez le sport','h1.b':'à l\'agenda de','h1.c':'votre entreprise.',
    'hero.lead':'Des journées de team building, un avantage sportif pour chaque collaborateur et des programmes hebdomadaires pour vos équipes. Terrains, mur d\'escalade, piscine, salles de réunion et restaurant se trouvent sur un seul site, à Luxembourg-Ville.',
    'hero.ask':'Que recherchez-vous ?',
    'in1.t':'Une journée qui rassemble l\'équipe','in1.d':'Des expériences de team building ponctuelles',
    'in2.t':'Un avantage pour chaque collaborateur','in2.d':'La Coque Kaart, flexible et durable',
    'in3.t':'Une routine qui s\'installe','in3.d':'Des séances hebdomadaires, adaptées à votre semaine',
    'hero.call':'Vous préférez en parler ? Appelez le',
    'hero.alt':'Deux collègues en tenue de bureau montent en courant des marches en béton, suivis d\'une traînée lumineuse. Move together, perform better.',
    'f1.d':'Bâtiment ouvert du lundi au vendredi','f2.t':'Tram « Coque »','f2.d':'L\'arrêt de tram dessert le site',
    'f3.t':'De 8 à 25','f3.d':'Personnes par groupe, selon la formule','f4.t':'Un seul site','f4.d':'Sport, salles de réunion, restaurant, wellness, hôtel',
    'fm.h':'Trois façons de mettre votre équipe en mouvement','fm.p':'Choisissez celle qui correspond à votre objectif du moment. Vous pourrez les combiner par la suite, et nos Event Managers adapteront chacune à votre entreprise.',
    'tab.team':'Des journées de team building ponctuelles','tab.kaart':'Un avantage sportif flexible pour chaque collaborateur','tab.weekly':'Des séances de groupe régulières pour vos équipes',
    'tp.h':'Renforcez la collaboration, améliorez la communication et créez des souvenirs dont on parlera lundi.',
    'tp.p':'Du sport, des salles de réunion professionnelles et une belle table dans une seule formule, pour les entreprises de toutes tailles. Choisissez une expérience pour voir ce qu\'elle comprend.',
    'xb.climb':'Groupe de 8 · 2 h d\'escalade','xb.move':'Groupe de 10, 20 ou 25 · cours d\'1 h','xb.court':'Groupe de 10 · 2 h sur un terrain privé','xb.beach':'Groupe de 8 · 2 h, en été',
    'g8':'Groupe de 8','g10':'Groupe de 10','g10x':'Groupe de 10, 20 ou 25','seasonal':'Saisonnier',
    'alt.climb2':'Prises d\'escalade colorées sur le mur d\'escalade de la Coque','alt.weights':'La salle d\'entraînement de la Coque, avec un disque de musculation jaune au premier plan','alt.court2':'Une salle de sport avec parquet et gradins','alt.beach':'Des collègues jouent au beach-volley sur un terrain de sable',
    'alt.cards':'Trois cartes Coque Kaart disposées en éventail','alt.pool':'La piscine de la Coque et ses lignes d\'eau',
    'xl.climb':'Défiez votre équipe sur le mur, puis gardez cette énergie pour une séance de travail.',
    'xi.climb.t':'2 h d\'escalade','xi.climb.d':'Séance de groupe avec un instructeur privé, matériel inclus',
    'inc.meet.t':'Salle de réunion','inc.meet.d':'Salle de réunion pour une demi-journée','inc.dine.t':'Menu business','inc.dine.d':'Au restaurant « la Coquille »',
    'ask.about':'S\'informer sur',
    'xl.move':'Mettez tout le monde en mouvement avec un cours au choix, animé par un coach privé, puis passez à la réunion.',
    'xi.move.t':'Cours collectif d\'1 h','xi.move.d':'Au choix, avec un coach privé',
    'xl.court':'Votre propre terrain, vos propres règles. Organisez le jeu d\'équipe que vos collègues ont vraiment envie de jouer.',
    'xi.court.t':'2 h sur un terrain privé','xi.court.d':'Libre d\'organiser votre activité d\'équipe préférée','sp.foot':'Football',
    'xl.beach':'Une expérience d\'équipe estivale : on joue d\'abord, puis on partage un barbecue sur la terrasse.',
    'xi.beach1.t':'2 h de beach-volley','xi.beach1.d':'Sur votre terrain privé','xi.beach2.t':'Menu barbecue','xi.beach2.d':'Sur la terrasse de « la Coquille »',
    'xi.beach3.t':'Un autre sport ?','xi.beach3.d':'Le terrain multisports extérieur peut être réservé à la place',
    'tl.h':'Vous cherchez quelque chose d\'unique ?','tl.p':'Nos Event Managers conçoivent une expérience entièrement sur mesure, selon vos objectifs, votre budget et vos attentes.',
    'tl.c1':'Salles de réunion','tl.c2':'Restauration','tl.c3':'Expériences wellness','tl.c4':'Hébergement à l\'hôtel','tl.c5':'Et d\'autres services Coque','tl.b':'Concevoir un événement sur mesure',
    'k.h':'Favorisez un mode de vie actif, au quotidien.',
    'k.p':'Offrez à vos collaborateurs la liberté de rester actifs et de prendre soin de leur bien-être à leur façon, à leur rythme. Avec la Coque Kaart, votre entreprise leur donne un accès durable à un large éventail d\'activités sportives et de bien-être à la Coque.',
    'k.m1':'Charger des entrées','k.m2':'Allouer un budget',
    'k.a':'Chargez les cartes avec des entrées précises, choisies selon votre entreprise.',
    'c.swim':'Natation','c.sports':'Cours de sport','c.climb':'Escalade','c.classes':'Cours',
    'k.b':'Attribuez à chaque collaborateur un budget prédéfini et laissez-le choisir comment l\'utiliser.',
    'emp.a':'Collaborateur A','emp.b':'Collaborateur B','emp.c':'Collaborateur C',
    'k.ill':'Illustration : un même budget, trois façons de l\'utiliser.',
    'pk1.t':'Directement aux tourniquets','pk1.d':'Les détenteurs de la carte accèdent rapidement au site, sans faire la queue à la caisse.',
    'pk2.t':'Horaires de piscine étendus','pk2.d':'Les collaborateurs nagent pendant des horaires d\'ouverture élargis de la piscine.',
    'pk3.t':'Un avantage valable toute l\'année','pk3.d':'Un avantage flexible qui encourage un mode de vie actif tout au long de l\'année.',
    'k.ask':'<b>Intéressé ?</b> Notre équipe se fera un plaisir de vous accompagner.','k.btn':'Se renseigner sur la Coque Kaart',
    'w.h':'Faites du sport un élément de votre culture d\'entreprise.',
    'w.p':'Des séances régulières, organisées par des professionnels, aident les collaborateurs à rester actifs, à réduire leur stress et à créer des liens avec leurs collègues. Esquissez votre semaine idéale ci-dessous, nous la construirons avec vous.',
    'pg.climb.m':'Chaque semaine · 2 h · groupe de 8 ou 16','pg.climb.d':'Instructeur privé, matériel inclus',
    'pg.run.m':'Chaque semaine · 1 h · groupe de 12','pg.run.d':'Sur la piste d\'athlétisme de la Coque Arena, coach de running en option',
    'pg.active.m':'Chaque semaine · 1 h · groupe de 10, 20 ou 25','pg.active.d':'Un cours au choix avec un coach privé : Pilates, Power Workout, Group Cycle, Yoga Body, Shape, Full Body, Zumba, Back Fit',
    'pg.court.m':'Chaque semaine · groupe de 10','pg.court.d':'Votre terrain de sport privé, en libre utilisation, en salle ou en extérieur',
    'w.send':'Envoyer cette semaine à nos Event Managers',
    'c.h':'Investissez dans la santé et le bien-être de vos équipes.',
    'c.lead':'Parlez-nous de votre entreprise. Nos Event Managers concevront un programme personnalisé selon vos objectifs, votre effectif et les activités préférées de vos équipes.',
    'd.team':'Équipe Corporate Sports','d.mail':'E-mail',
    'd.access':'Arrêt de tram « Coque ». Le parking Coque est payant, avec 3 heures offertes aux clients de la Coque (hors manifestations).',
    'd.hrs':'Horaires d\'ouverture du bâtiment','d.hrsd':'Lundi au vendredi 06h30–22h00 · Week-end 07h30–19h00. Chaque activité a ses propres horaires.',
    'f.name':'Votre nom','f.company':'Entreprise','f.companyph':'Votre entreprise','f.email':'E-mail professionnel','f.size':'Taille de l\'équipe',
    'f.sel':'Sélectionner','f.s1':'Jusqu\'à 10 personnes','f.s2':'11 à 25 personnes','f.s3':'26 à 50 personnes','f.s4':'Plus de 50 personnes',
    'f.int':'Qu\'est-ce qui vous intéresse ?','f.msg':'Vos objectifs, en quelques mots','f.msgph':'Nombre de collaborateurs, dates souhaitées, ce que vous souhaitez atteindre','f.send':'Envoyer ma demande'
  },
  de:{
    'js.pick':'Programm auswählen','js.armed':'Klicken Sie jetzt auf einen Tag für {p} (erneut klicken zum Entfernen)','js.more':'Fügen Sie ein weiteres Programm hinzu oder senden Sie Ihre Woche',
    'js.free':'Frei','js.add':'Zum Hinzufügen klicken','js.dayempty':'frei','js.toggle':'Klicken, um {p} hinzuzufügen oder zu entfernen',
    'js.empty':'Ihre Woche ist noch leer. Wählen Sie ein Programm und dann einen Tag und planen Sie beliebig viele Einheiten.',
    'js.n1':'1 wöchentliche Einheit geplant.','js.nN':'{n} wöchentliche Einheiten geplant.',
    'js.p.climb':'Climbing Wall (2 Std., Gruppen von 8 oder 16)','js.p.run':'Running Club (1 Std., Gruppe von 12)','js.p.active':'Active Sessions (1 Std., Gruppen von 10, 20 oder 25)','js.p.court':'Open Court (Gruppe von 10)',
    'js.d.0':'Mo','js.d.1':'Di','js.d.2':'Mi','js.d.3':'Do','js.d.4':'Fr',
    'js.D.0':'Montag','js.D.1':'Dienstag','js.D.2':'Mittwoch','js.D.3':'Donnerstag','js.D.4':'Freitag',
    'js.weekHdr':'Meine ideale Woche:','js.noteWeekly':'Weekly-Sports-Programm','js.noteExp':'Team Experience: ','js.noteTailor':'Eine individuelle Team Experience','js.noteKaart':'Die Coque Kaart für unsere Mitarbeitenden','js.pfx':'Ich interessiere mich für: ',
    'js.err':'Bitte geben Sie Ihren Namen und eine gültige geschäftliche E-Mail-Adresse an, damit wir antworten können.',
    'js.sentT':'Ihre Anfrage ist bereit.','js.sentB':'Falls sich Ihre E-Mail-App nicht geöffnet hat, kopieren Sie die Nachricht unten und senden Sie sie an {mail} oder rufen Sie an: {tel}.',
    'js.open':'E-Mail-App öffnen','js.copy':'Nachricht kopieren','js.copied':'Kopiert','js.sel':'Markiert, bitte kopieren',
    'js.hello':'Guten Tag,\n\nich möchte ein Corporate-Sports-Programm besprechen.','js.lName':'Name','js.lCompany':'Unternehmen','js.lEmail':'E-Mail','js.lSize':'Teamgröße','js.lInt':'Interesse an','js.subject':'Corporate-Sports-Anfrage',
    'aria.week':'Ihre Woche','desc':'Team Experiences, Coque Kaart und Weekly-Sports-Programme für Unternehmen in Luxemburg. Move together, perform better.',
    'cta.talk':'Kontakt',
    'h1.a':'Bringen Sie Sport','h1.b':'auf die Agenda','h1.c':'Ihres Unternehmens.',
    'hero.lead':'Teambuilding-Tage, ein Sportbenefit für jeden Mitarbeitenden und wöchentliche Programme für Ihre Teams. Sportplätze, Kletterwand, Schwimmbad, Tagungsräume und Restaurant liegen an einem einzigen Standort in Luxemburg-Stadt.',
    'hero.ask':'Wonach suchen Sie?',
    'in1.t':'Ein Tag, der das Team zusammenbringt','in1.d':'Einmalige Teambuilding-Erlebnisse',
    'in2.t':'Ein Benefit für jeden Mitarbeitenden','in2.d':'Die Coque Kaart, flexibel und langfristig',
    'in3.t':'Eine Routine, die bleibt','in3.d':'Wöchentliche Gruppentrainings, passend zu Ihrer Woche',
    'hero.call':'Lieber persönlich? Rufen Sie an:',
    'hero.alt':'Zwei Kollegen in Businesskleidung laufen eine Betontreppe hinauf, eine Lichtspur folgt ihrer Bewegung. Move together, perform better.',
    'f1.d':'Gebäude Montag bis Freitag geöffnet','f2.t':'Tram „Coque“','f2.d':'Die Tramhaltestelle liegt am Standort',
    'f3.t':'8 bis 25','f3.d':'Personen pro Gruppe, je nach Format','f4.t':'Ein Standort','f4.d':'Sport, Tagungsräume, Restaurant, Wellness, Hotel',
    'fm.h':'Drei Wege, Ihr Team in Bewegung zu bringen','fm.p':'Wählen Sie das Angebot, das zu Ihrem heutigen Ziel passt. Später lassen sich alle kombinieren, und unsere Event Manager passen jedes an Ihr Unternehmen an.',
    'tab.team':'Einmalige Teambuilding-Tage','tab.kaart':'Ein flexibles Sport-Benefit für jeden Mitarbeitenden','tab.weekly':'Regelmäßige Gruppentrainings für Ihre Teams',
    'tp.h':'Stärken Sie die Zusammenarbeit, verbessern Sie die Kommunikation und schaffen Sie Erinnerungen, über die am Montag noch gesprochen wird.',
    'tp.p':'Sport, professionelle Tagungsräume und gutes Essen in einem Paket, für Unternehmen jeder Größe. Wählen Sie ein Erlebnis, um zu sehen, was enthalten ist.',
    'xb.climb':'Gruppe von 8 · 2 Std. Klettern','xb.move':'Gruppe von 10, 20 oder 25 · 1 Std. Kurs','xb.court':'Gruppe von 10 · 2 Std. privater Platz','xb.beach':'Gruppe von 8 · 2 Std., Sommersaison',
    'g8':'Gruppe von 8','g10':'Gruppe von 10','g10x':'Gruppe von 10, 20 oder 25','seasonal':'Saisonal',
    'alt.climb2':'Bunte Klettergriffe an der Kletterwand der Coque','alt.weights':'Der Trainingsbereich der Coque mit gelber Hantelscheibe im Vordergrund','alt.court2':'Eine Sporthalle mit Holzboden und Tribüne','alt.beach':'Kolleginnen und Kollegen spielen Beachvolleyball auf einem Sandfeld',
    'alt.cards':'Drei Coque-Kaart-Karten, fächerförmig angeordnet','alt.pool':'Das Schwimmbad der Coque mit Bahnleinen',
    'xl.climb':'Fordern Sie Ihr Team an der Wand heraus und nehmen Sie die Energie mit in eine Arbeitssitzung.',
    'xi.climb.t':'2 Std. Klettern','xi.climb.d':'Gruppensession mit eigenem Instruktor, komplette Ausrüstung inklusive',
    'inc.meet.t':'Tagungsraum','inc.meet.d':'Tagungsraum für einen halben Tag','inc.dine.t':'Business-Menü','inc.dine.d':'Im Restaurant „la Coquille“',
    'ask.about':'Anfrage zu',
    'xl.move':'Bringen Sie alle in Bewegung mit einem Kurs nach Wahl unter Leitung eines eigenen Coachs, bevor es an die Arbeit geht.',
    'xi.move.t':'1 Std. Gruppenkurs','xi.move.d':'Nach Wahl, mit eigenem Coach',
    'xl.court':'Ihr eigener Platz, Ihre eigenen Regeln. Organisieren Sie das Teamspiel, das Ihre Kolleginnen und Kollegen wirklich spielen wollen.',
    'xi.court.t':'2 Std. privater Platz','xi.court.d':'Frei für Ihre liebste Teamaktivität','sp.foot':'Fußball',
    'xl.beach':'Ein Team-Erlebnis für den Sommer: erst spielen, dann gemeinsam auf der Terrasse grillen.',
    'xi.beach1.t':'2 Std. Beachvolleyball','xi.beach1.d':'Auf Ihrem privaten Feld','xi.beach2.t':'Barbecue-Menü','xi.beach2.d':'Auf der Terrasse der „la Coquille“',
    'xi.beach3.t':'Lieber eine andere Sportart?','xi.beach3.d':'Stattdessen kann der Outdoor-Multisportplatz reserviert werden',
    'tl.h':'Sie suchen etwas Besonderes?','tl.p':'Unsere Event Manager entwickeln ein vollständig individuelles Erlebnis, abgestimmt auf Ihre Ziele, Ihr Budget und Ihre Erwartungen.',
    'tl.c1':'Tagungsräume','tl.c2':'Catering','tl.c3':'Wellness-Erlebnisse','tl.c4':'Hotelübernachtung','tl.c5':'Und weitere Coque-Services','tl.b':'Individuelles Event planen',
    'k.h':'Fördern Sie einen aktiven Lebensstil, jeden Tag.',
    'k.p':'Geben Sie Ihren Mitarbeitenden die Freiheit, auf ihre Weise und in ihrem Tempo aktiv zu bleiben und auf ihr Wohlbefinden zu achten. Mit der Coque Kaart bietet Ihr Unternehmen langfristigen Zugang zu einem breiten Angebot an Sport- und Wellnessaktivitäten in der Coque.',
    'k.m1':'Eintritte aufladen','k.m2':'Budget zuweisen',
    'k.a':'Laden Sie die Karten mit bestimmten Eintritten auf, passend zu Ihrem Unternehmen.',
    'c.swim':'Schwimmen','c.sports':'Sportkurse','c.climb':'Klettern','c.classes':'Kurse',
    'k.b':'Weisen Sie jedem Mitarbeitenden ein festes Budget zu und lassen Sie ihn selbst entscheiden, wie er es einsetzt.',
    'emp.a':'Person A','emp.b':'Person B','emp.c':'Person C',
    'k.ill':'Illustration: dasselbe Budget, drei verschiedene Arten, es zu nutzen.',
    'pk1.t':'Direkt durch die Drehkreuze','pk1.d':'Karteninhaber kommen schnell hinein, ohne am Ticketschalter anzustehen.',
    'pk2.t':'Erweiterte Badezeiten','pk2.d':'Mitarbeitende schwimmen zu erweiterten Öffnungszeiten des Schwimmbads.',
    'pk3.t':'Ein Benefit für das ganze Jahr','pk3.d':'Ein flexibles Mitarbeiter-Benefit, das einen aktiven Lebensstil das ganze Jahr über fördert.',
    'k.ask':'<b>Interesse geweckt?</b> Unser Team unterstützt Sie gerne.','k.btn':'Anfrage zur Coque Kaart',
    'w.h':'Machen Sie Sport zum Teil Ihrer Unternehmenskultur.',
    'w.p':'Regelmäßige, professionell organisierte Einheiten helfen Mitarbeitenden, aktiv zu bleiben, Stress abzubauen und sich mit Kolleginnen und Kollegen zu vernetzen. Skizzieren Sie unten Ihre ideale Woche, wir setzen sie gemeinsam mit Ihnen um.',
    'pg.climb.m':'Wöchentlich · 2 Std. · Gruppe von 8 oder 16','pg.climb.d':'Eigener Instruktor, Ausrüstung inklusive',
    'pg.run.m':'Wöchentlich · 1 Std. · Gruppe von 12','pg.run.d':'Auf der Leichtathletikbahn der Coque Arena, optional mit Lauf-Coach',
    'pg.active.m':'Wöchentlich · 1 Std. · Gruppe von 10, 20 oder 25','pg.active.d':'Ein Kurs nach Wahl mit eigenem Coach: Pilates, Power Workout, Group Cycle, Yoga Body, Shape, Full Body, Zumba, Back Fit',
    'pg.court.m':'Wöchentlich · Gruppe von 10','pg.court.d':'Ihr privates Spielfeld zur freien Nutzung, drinnen oder draußen',
    'w.send':'Diese Woche an unsere Event Manager senden',
    'c.h':'Investieren Sie in Gesundheit und Wohlbefinden Ihres Teams.',
    'c.lead':'Erzählen Sie uns von Ihrem Unternehmen. Unsere Event Manager entwickeln ein persönliches Programm, abgestimmt auf Ihre Ziele, Ihre Belegschaft und die Lieblingsaktivitäten Ihrer Teams.',
    'd.team':'Corporate-Sports-Team','d.mail':'E-Mail',
    'd.access':'Tramhaltestelle „Coque“. Das Parkhaus Coque ist kostenpflichtig, 3 Stunden sind für Coque-Kunden kostenlos (außer bei Veranstaltungen).',
    'd.hrs':'Öffnungszeiten des Gebäudes','d.hrsd':'Montag bis Freitag 06:30–22:00 · Wochenende 07:30–19:00. Jede Aktivität hat eigene Öffnungszeiten.',
    'f.name':'Ihr Name','f.company':'Unternehmen','f.companyph':'Ihr Unternehmen','f.email':'Geschäftliche E-Mail','f.size':'Teamgröße',
    'f.sel':'Auswählen','f.s1':'Bis zu 10 Personen','f.s2':'11 bis 25 Personen','f.s3':'26 bis 50 Personen','f.s4':'Mehr als 50 Personen',
    'f.int':'Was interessiert Sie?','f.msg':'Ihre Ziele in wenigen Worten','f.msgph':'Anzahl der Mitarbeitenden, Wunschtermine, was Sie erreichen möchten','f.send':'Anfrage senden'
  }};
  var lang='en';
  function T(k,v){
    var s=(L[lang]&&L[lang][k]!==undefined)?L[lang][k]:L.en[k];
    if(s===undefined)return k;
    if(v)for(var x in v)s=s.split('{'+x+'}').join(v[x]);
    return s;
  }
  /* capture the English text that is already in the page */
  $$('[data-i18n]').forEach(function(el){if(L.en[el.dataset.i18n]===undefined)L.en[el.dataset.i18n]=el.innerHTML.trim();});
  $$('[data-i18n-attr]').forEach(function(el){el.dataset.i18nAttr.split(';').forEach(function(p){var a=p.split(':');if(L.en[a[1]]===undefined)L.en[a[1]]=el.getAttribute(a[0]);});});

  function setLang(l,persist){
    if(!L[l])l='en';
    lang=l;
    document.documentElement.lang=l;
    $$('[data-i18n]').forEach(function(el){el.innerHTML=T(el.dataset.i18n);});
    $$('[data-i18n-attr]').forEach(function(el){el.dataset.i18nAttr.split(';').forEach(function(p){var a=p.split(':');el.setAttribute(a[0],T(a[1]));});});
    document.title=T('title');
    var md=$('meta[name="description"]');if(md)md.setAttribute('content',T('desc'));
    $$('.lang button').forEach(function(b){b.setAttribute('aria-pressed',b.dataset.lang===l)});
    $('#week').setAttribute('aria-label',T('aria.week'));
    var s=$('#sent');if(s)s.hidden=true;
    render();
    if(persist){try{localStorage.setItem('coque-lang',l)}catch(e){}}
  }
  $$('.lang button').forEach(function(b){b.addEventListener('click',function(){setLang(b.dataset.lang,true)})});

  /* ================= main tabs ================= */
  var tabs=$$('.tab'), panels=$$('.panel');
  function showTab(key,focus){
    tabs.forEach(function(t){var on=t.dataset.tab===key;t.setAttribute('aria-selected',on);t.tabIndex=on?0:-1;if(on&&focus)t.focus();});
    panels.forEach(function(p){
      var on=p.dataset.panel===key; p.hidden=!on;
      if(on){p.classList.remove('in');void p.offsetWidth;p.classList.add('in');if(key==='kaart')animateBars();}
    });
  }
  tabs.forEach(function(t,i){
    t.addEventListener('click',function(){showTab(t.dataset.tab)});
    t.addEventListener('keydown',function(e){
      var n=null;
      if(e.key==='ArrowRight')n=(i+1)%tabs.length;
      if(e.key==='ArrowLeft')n=(i-1+tabs.length)%tabs.length;
      if(n!==null){e.preventDefault();showTab(tabs[n].dataset.tab,true);}
    });
  });
  function goFormats(key){showTab(key);$('#formats').scrollIntoView({behavior:reduce?'auto':'smooth'});}
  $$('[data-go]').forEach(function(b){b.addEventListener('click',function(){goFormats(b.dataset.go)})});
  $$('[data-nav]').forEach(function(a){a.addEventListener('click',function(e){e.preventDefault();goFormats(a.dataset.nav)})});

  /* ================= team experiences ================= */
  var xbtns=$$('.xp-btn'), xarts=$$('[data-xpd]');
  function showXp(key,focus){
    xbtns.forEach(function(b){var on=b.dataset.xp===key;b.setAttribute('aria-selected',on);b.tabIndex=on?0:-1;if(on&&focus)b.focus();});
    xarts.forEach(function(a){var on=a.dataset.xpd===key;a.hidden=!on;if(on){a.style.animation='none';void a.offsetWidth;a.style.animation='';}});
  }
  xbtns.forEach(function(b,i){
    b.addEventListener('click',function(){showXp(b.dataset.xp)});
    b.addEventListener('keydown',function(e){
      var n=null,k=e.key;
      if(k==='ArrowDown'||k==='ArrowRight')n=(i+1)%xbtns.length;
      if(k==='ArrowUp'||k==='ArrowLeft')n=(i-1+xbtns.length)%xbtns.length;
      if(n!==null){e.preventDefault();showXp(xbtns[n].dataset.xp,true);}
    });
  });

  /* ================= kaart ================= */
  var segs=$$('.seg button');
  function animateBars(){
    $$('#modeBudget .bar i').forEach(function(i){i.style.width='0';});
    requestAnimationFrame(function(){requestAnimationFrame(function(){
      $$('#modeBudget .bar i').forEach(function(i){i.style.width=i.dataset.w+'%';});
    });});
  }
  segs.forEach(function(b){b.addEventListener('click',function(){
    segs.forEach(function(s){s.setAttribute('aria-pressed',s===b)});
    var bud=b.dataset.mode==='budget';
    $('#modeAdmissions').hidden=bud; $('#modeBudget').hidden=!bud;
    if(bud)animateBars();
  })});

  /* ================= weekly builder ================= */
  var PROGS={
    climb:{name:'Climbing Wall',c:'var(--sand)'},
    run:{name:'Running Club',c:'var(--aqua)'},
    active:{name:'Active Sessions',c:'var(--mint)'},
    court:{name:'Open Court',c:'var(--peri)'}
  };
  var DAYS=[0,1,2,3,4];
  var plan={0:[],1:[],2:[],3:[],4:[]};
  var armed=null;
  var week=$('#week');
  DAYS.forEach(function(d){
    var b=document.createElement('button');
    b.type='button';b.className='day';b.dataset.day=d;
    b.addEventListener('click',function(){
      if(!armed)return;
      var arr=plan[d],i=arr.indexOf(armed);
      if(i>-1)arr.splice(i,1);else arr.push(armed);
      render();
    });
    week.appendChild(b);
  });
  $$('.prog').forEach(function(p){p.addEventListener('click',function(){
    armed=(armed===p.dataset.prog)?null:p.dataset.prog; render();
  })});
  function weekLines(){
    return DAYS.filter(function(d){return plan[d].length}).map(function(d){
      return T('js.D.'+d)+': '+plan[d].map(function(k){return T('js.p.'+k)}).join(' + ');
    });
  }
  function render(){
    $$('.prog').forEach(function(p){p.setAttribute('aria-pressed',p.dataset.prog===armed)});
    var any=DAYS.some(function(d){return plan[d].length});
    $('#stepText').textContent=armed?T('js.armed',{p:PROGS[armed].name}):(any?T('js.more'):T('js.pick'));
    $$('.day').forEach(function(b){
      var d=+b.dataset.day;
      b.classList.toggle('armed',!!armed);
      if(armed)b.style.setProperty('--armed',PROGS[armed].c);
      b.setAttribute('aria-label',T('js.D.'+d)+(plan[d].length?': '+plan[d].map(function(k){return PROGS[k].name}).join(', '):': '+T('js.dayempty'))+(armed?'. '+T('js.toggle',{p:PROGS[armed].name}):''));
      b.innerHTML='<strong>'+T('js.d.'+d)+'</strong>';
      if(!plan[d].length){var e=document.createElement('span');e.className='slot-empty';e.textContent=armed?T('js.add'):T('js.free');b.appendChild(e);}
      plan[d].forEach(function(k){var s=document.createElement('span');s.className='slot';s.style.setProperty('--c',PROGS[k].c);s.textContent=PROGS[k].name;b.appendChild(s);});
    });
    var lines=weekLines(), st=$('#summaryText');
    if(!lines.length){st.textContent=T('js.empty');}
    else{
      var n=DAYS.reduce(function(a,d){return a+plan[d].length},0);
      var head=n>1?T('js.nN',{n:n}):T('js.n1');
      st.innerHTML='<b></b> <span></span>';
      st.firstChild.textContent=head;
      st.lastChild.textContent=lines.join(' · ');
    }
  }

  /* ================= contact ================= */
  function setInterest(v){$$('input[name="int"]').forEach(function(c){if(c.value===v)c.checked=true})}
  var map={team:'Team Experiences',kaart:'Coque Kaart',weekly:'Weekly Sports'};
  function lineFor(b){
    if(b.dataset.noteName)return T('js.pfx')+T('js.noteExp')+b.dataset.noteName;
    if(b.dataset.noteKey==='tailor')return T('js.pfx')+T('js.noteTailor');
    if(b.dataset.noteKey==='kaart')return T('js.pfx')+T('js.noteKaart');
    if(b.id==='sendWeek'){var l=weekLines();return l.length?(T('js.weekHdr')+'\n'+l.join('\n')):(T('js.pfx')+T('js.noteWeekly'));}
    return '';
  }
  $$('[data-ask]').forEach(function(b){b.addEventListener('click',function(){
    setInterest(map[b.dataset.ask]);
    var line=lineFor(b),m=$('#msg');
    if(line&&m.value.indexOf(line)===-1)m.value=(m.value?m.value+'\n\n':'')+line;
    $('#contact').scrollIntoView({behavior:reduce?'auto':'smooth'});
    setTimeout(function(){$('#name').focus({preventScroll:true})},reduce?0:600);
  })});
  $('#form').addEventListener('submit',function(e){
    e.preventDefault();
    var f=e.target,name=f.name.value.trim(),email=f.email.value.trim(),sent=$('#sent');
    if(!name||!/^\S+@\S+\.\S+$/.test(email)){
      sent.hidden=false;sent.style.borderColor='#F2A3A3';sent.textContent=T('js.err');
      (name?f.email:f.name).focus();return;
    }
    sent.style.borderColor='';
    var ints=$$('input[name="int"]:checked').map(function(c){return c.value});
    var sizeTxt=f.size.value?f.size.options[f.size.selectedIndex].text:'-';
    var body=T('js.hello')+'\n\n'+T('js.lName')+': '+name+'\n'+T('js.lCompany')+': '+(f.company.value||'-')+'\n'+T('js.lEmail')+': '+email+'\n'+T('js.lSize')+': '+sizeTxt+'\n'+T('js.lInt')+': '+(ints.join(', ')||'-')+'\n\n'+(f.msg.value||'');
    var subject=T('js.subject')+(f.company.value?' - '+f.company.value:'');
    var href='mailto:corporate.sports@coque.lu?subject='+encodeURIComponent(subject)+'&body='+encodeURIComponent(body);
    sent.hidden=false;
    var mail='<a href="mailto:corporate.sports@coque.lu" style="color:var(--mint)">corporate.sports@coque.lu</a>';
    sent.innerHTML='<strong></strong> <span></span><pre id="msgOut"></pre><div class="row"><a class="btn btn-primary" id="openMail" target="_top"></a><button type="button" class="btn btn-ghost" id="copyBtn"></button></div>';
    sent.querySelector('strong').textContent=T('js.sentT');
    sent.querySelector('span').innerHTML=T('js.sentB',{mail:mail,tel:'+352 43 60 60 735'});
    $('#msgOut').textContent=body;
    var om=$('#openMail');om.href=href;om.textContent=T('js.open');
    var cb=$('#copyBtn');cb.textContent=T('js.copy');
    cb.addEventListener('click',function(){
      function sel(){var r=document.createRange();r.selectNodeContents($('#msgOut'));var s=getSelection();s.removeAllRanges();s.addRange(r);cb.textContent=T('js.sel')}
      try{navigator.clipboard.writeText(body).then(function(){cb.textContent=T('js.copied')},sel)}catch(x){sel()}
    });
    try{var a=document.createElement('a');a.href=href;a.target='_top';document.body.appendChild(a);a.click();a.remove();}catch(x){}
  });

  /* ================= progress rail ================= */
  var dot=$('#railDot'),fill=$('#railFill'),tick=false;
  function rail(){
    var h=document.documentElement,max=h.scrollHeight-innerHeight,p=max>0?Math.min(1,Math.max(0,scrollY/max)):0;
    var y=(0.08+p*0.84)*innerHeight;
    dot.style.transform='translateY('+y+'px)';fill.style.height=y+'px';tick=false;
  }
  addEventListener('scroll',function(){if(!tick){tick=true;requestAnimationFrame(rail)}},{passive:true});
  addEventListener('resize',rail);rail();

  /* ================= init ================= */
  var start='en';
  try{
    var q=(new URLSearchParams(location.search).get('lang')||'').toLowerCase();
    var saved=localStorage.getItem('coque-lang');
    var nav=((navigator.language||'en').slice(0,2)).toLowerCase();
    start=L[q]?q:(L[saved]?saved:(L[nav]?nav:'en'));
  }catch(e){var n2=((navigator.language||'en').slice(0,2)).toLowerCase();start=L[n2]?n2:'en';}
  setLang(start,false);
})();
