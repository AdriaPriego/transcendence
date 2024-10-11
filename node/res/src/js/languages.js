import i18next from 'i18next';
import { getCookie } from './user_login.js';
import { createToast } from './components/toast.js';
import blockchain from './pages/blockchain.js';

export async function generateLangs()
{
	/* Sets language, hierarchy is local storage > database prefered language > english default */
	let	savedLanguage;
	if (localStorage.getItem('language')) {
		savedLanguage = localStorage.getItem('language');
	}
	else if (await getCookie('token')){
		try {
			const response = await fetch('https://localhost:3001/login/getLang/', {
				method: 'GET',
				headers: {'Authorization': 'Bearer ' + await getCookie('token')},
			});
			const	responseJson = await response.json();
			if (!response.ok) {
				throw new Error(`${responseJson.error}`);
			}
			savedLanguage = responseJson.language;
		  } catch (e) {
			createToast('warning', `Error: ${e}`);
		  }
	}
	else {
		savedLanguage = 'en';
	}

	i18next.init({
		lng: savedLanguage,
		fallbackLng: 'en',
		resources: {
			en: {
				translation: {
					play: 'Play',
					local_game: 'Local Game',
					online_game: 'Online Game',
					tournament: 'Tournament',
					profile: 'Profile',
					settings: 'Settings',
					friends: 'Friends',
					match_history: 'Match history',
					language: 'Language',
					catalan: 'Catalan',
					spanish: 'Spanish',
					english: 'English',
					french: 'French',
					logout: 'Log out',
					username: 'Username',
					input_username: 'Enter your username',
					password: 'Password',
					login: 'Log in',
					login_42: 'Log in with 42',
					no_account: 'Don\'t have an account? Sign up here',
					signup: 'Sign up',
					details_register: 'Please enter your details to register.',
					name: 'Name',
					input_name: 'Enter your name',
					last_name: 'Last name',
					input_last_name: 'Enter your last name',
					loading: 'Loading...',
					password_should: 'Password should be',
					check_between: 'Between 8 and 16 character long',
					check_number: ' At least 1 number',
					check_lower: ' At least 1 lowercase letter',
					check_upper: ' At least 1 uppercase letter',
					check_special: ' At least 1 special character (!,@,#,$,%,^,&,_,=,+,-)',
					password_rep: 'Confirm password',
					submit: 'Submit',
					profile_info: 'Update your profile info.',
					alias: 'Alias',
					campus: 'Campus',
					prefered_language: 'Preferred language',
					update: 'Update',
					friends: 'Friends',
					friends_info: 'Add, remove, and see your friends status.',
					add_friend: 'Add friend',
					no_pending_requets: 'No pending friend requests',
					friend_request: '{{alias}} (@{{username}}) wants to add you as a friend.',
					accept: 'Accept',
					reject: 'Reject',
					no_friends: 'No friends yet',
					match_history: 'Match history',
					match_history_info: 'View your last games and stats.',
					games_played: 'Games played',
					wins: 'Wins',
					defeats: 'Defeats',
					waitroom: 'Waitroom',
					waitroom_info: 'Create a new game or join an existing one.',
					hey_name: 'Hey, {{name}}!',
					welcome: 'Welcome to Transcendence!',
					wait_room: "Waiting Room",
					room_owner: "Room owner",
					attendee: "Attendee",
					serach_oponent: "Search Opponent",
					leave_room: "Leave Room",
					no_attendees: "No attendees yet.",
					ready_start: "Both players are present! Ready to start the game.",
					play_btn: "Play",
					waiting_oponent: "Waiting for an opponent to join...",
					room_expired: "This room has expired.",
					time_remaining: "Time remaining:",
					error: "Error",
					return_home: "Return Home",
					create_game: "Create Game",
					join_game:"Join Game",
					selector_game:"Join a Game: Select a Room",
					no_rooms:"No rooms are available to join.",
					close: "Close",
					fail_join: 'Failed to join room',
					error_select_room: "Please select a room!",
					join_tour: "Join Tournament",
					delete_wait_room: "Delete Waiting Room",
					conf_tourn: "Tournament Configuration",
					size_tourn: "Tournament Size",
					players: "Players",
					n_humans: "Number of humans: ",
					n_ias: "Number of IA: ",
					create: "Create",
					create_tour: "Create Tournament",
					no_tour: "No Tournaments are Open to register",
					select_tour: "Select Tournament",
					registred: "Registred",
					connecting: 'Connecting...',
					quit_room: 'Quit Room',
					player_1: 'Player 1',
					player_2: 'Player 2',
					score: 'Score:',
					room_not_found: 'Room Not Found',
					room_not_found_info: 'The room you are trying to access does not exist.',
					back_to_home: 'Go Back Home',
					connected: 'Connected',
					disconnected: 'Disconnected',
					go_to_tournament: 'Go To Tournament',
					leaving_waiting_room: 'Leaving waiting room',
					you_left_room: 'You left the room',
					game_over: "Game over",
					player_forfeit: 'Player forfeit',
					start: 'Start!',
					lost_forfeit: 'You lost the game by forfeit',
					won_forfeit: 'You won the game by forfeit',
					you_won: 'You won!',
					you_lost: 'You lost!',
					match_play: 'You have a match to play against',
					waitroom_tournament: "Waiting Room for Tournament ID", 
					you_are: "You are",
					playing_tournament:"Playing Tournament ID",
					congrats: "Congrats",
					tournament_over: "Tournament is over",
					final_result: "Final Results",
					runner_up: "Runner up",
					tournament_date: "Tournament Date",
					wait_nxt_match: "Waiting for your next match...",
					eliminated:"You are eliminated from the tournament.",
					RO_tournament:"You are not registered for this tournament. Read-only :)",
					blockchain_history: 'Blockchain history',
					blockchain_info: 'View all history registered in the blockchain',
					player_count: 'Players: {{count}}',
					go_home: 'Go home',
					try_again: 'Try again',
					ai_won: 'AI WON',
					you_won: 'YOU WON',
					scored: 'Goals scored',
					conceded: 'Goals conceded',
					winrate: 'Winrate',
					victory: 'Victory',
					defeat: 'Defeat',
					regular: 'Regular',
				}
			},
			es: {
				translation: {
					play: 'Jugar',
					local_game: 'Partida local',
					online_game: 'Partida en línea',
					tournament: 'Torneo',
					profile: 'Perfil',
					settings: 'Configuración',
					friends: 'Amigos',
					match_history: 'Historial de partidas',
					language: 'Idioma',
					catalan: 'Catalán',
					spanish: 'Español',
					english: 'Inglés',
					french: 'Francés',
					logout: 'Cerrar sesión',
					username: 'Nombre de usuario',
					input_username: 'Introduce tu nombre de usuario',
					password: 'Contraseña',
					login: 'Iniciar sesión',
					login_42: 'Iniciar sesión con 42',
					no_account: '¿No tienes cuenta? Regístrate aquí',
					signup: 'Regístrate',
					details_register: 'Por favor ingresa tus datos para registrarte.',
					name: 'Nombre',
					input_name: 'Introduce tu nombre',
					last_name: 'Apellido',
					input_last_name: 'Introduce tu apellido',
					loading: 'Cargando...',
					password_should: 'La contraseña debe ser',
					check_between: 'Entre 8 y 16 caracteres',
					check_number: 'Al menos 1 número',
					check_lower: 'Al menos 1 letra minúscula',
					check_upper: 'Al menos 1 letra mayúscula',
					check_special: 'Al menos 1 carácter especial (!,@,#,$,%,^,&,_,=,+,-)',
					password_rep: 'Confirmar contraseña',
					submit: 'Enviar',
					profile_info: 'Actualiza la información de tu perfil.',
					alias: 'Alias',
					campus: 'Campus',
					prefered_language: 'Idioma preferido',
					update: 'Actualizar',
					friends_info: 'Añadir, eliminar y ver el estado de tus amigos.',
					add_friend: 'Añadir amigo',
					no_pending_requets: 'No tienes solicitudes de amistad pendientes',
					friend_request: '{{alias}} (@{{username}}) quiere agregarte como amigo.',
					accept: 'Aceptar',
					reject: 'Rechazar',
					no_friends: 'Aún no tienes amigos',
					match_history_info: 'Consulta tus últimas partidas y estadísticas.',
					games_played: 'Partidas jugadas',
					wins: 'Victorias',
					defeats: 'Derrotas',
					waitroom: 'Sala de espera',
					waitroom_info: 'Crea una nueva partida o únete a una existente.',
					hey_name: '¡Hola, {{name}}!',
					welcome: '¡Bienvenido a Transcendence!',
					wait_room: 'Sala de espera',
					room_owner: 'Propietario de la sala',
					attendee: 'Asistente',
					serach_oponent: 'Buscar oponente',
					leave_room: 'Salir de la sala',
					no_attendees: 'Aún no hay asistentes.',
					ready_start: '¡Ambos jugadores están presentes! Listo para comenzar la partida.',
					play_btn: 'Jugar',
					waiting_oponent: 'Esperando a que se una un oponente...',
					room_expired: 'Esta sala ha expirado.',
					time_remaining: 'Tiempo restante:',
					error: 'Error',
					return_home: 'Volver a la página principal',
					create_game: 'Crear partida',
					join_game: 'Unirse a partida',
					selector_game: 'Unirse a partida: selecciona una sala',
					no_rooms: 'No hay salas disponibles.',
					close: 'Cerrar',
					fail_join: 'Error al unirse a la sala',
					error_select_room: '¡Por favor selecciona una sala!',
					join_tour: 'Unirse a torneo',
					delete_wait_room: 'Eliminar sala de espera',
					conf_tourn: 'Configuración del torneo',
					size_tourn: 'Tamaño del torneo',
					players: 'Jugadores',
					n_humans: 'Número de humanos: ',
					n_ias: 'Número de IA: ',
					create: 'Crear',
					create_tour: 'Crear torneo',
					no_tour: 'No hay torneos abiertos para registrarse',
					select_tour: 'Seleccionar torneo',
					registred: 'Registrado',
					connecting: 'Conectando...',
					quit_room: 'Salir de la sala',
					player_1: 'Jugador 1',
					player_2: 'Jugador 2',
					score: 'Marcador:',
					room_not_found: 'Sala no encontrada',
					room_not_found_info: 'La sala a la que intentas acceder no existe.',
					back_to_home: 'Volver al inicio',
					connected: 'Conectado',
					disconnected: 'Desconectado',
					go_to_tournament: 'Ir al torneo',
					leaving_waiting_room: 'Saliendo de la sala de espera',
					you_left_room: 'Has salido de la sala',
					game_over: 'Fin de la partida',
					player_forfeit: 'El jugador se ha rendido',
					start: '¡Comenzar!',
					lost_forfeit: 'Perdiste la partida por abandono',
					won_forfeit: 'Ganaste la partida por abandono',
					you_won: '¡Ganaste!',
					you_lost: '¡Perdiste!',
					match_play: 'Tienes una partida para jugar contra',
					waitroom_tournament: 'Sala de espera para el torneo ID',
					you_are: 'Eres',
					playing_tournament: 'Jugando el torneo ID',
					congrats: 'Felicidades',
					tournament_over: 'El torneo ha terminado',
					final_result: 'Resultado final',
					runner_up: 'Subcampeón',
					tournament_date: 'Fecha del torneo',
					wait_nxt_match: 'Esperando tu próxima partida...',
					eliminated: 'Has sido eliminado del torneo.',
					RO_tournament: 'No estás registrado en este torneo. Solo lectura :)',
					blockchain_history: 'Historia de la blockchain',
					blockchain_info: 'Ver todo el historial registrado en la blockchain',
					player_count: 'Jugadores: {{count}}',
					go_home: 'Ir a casa',
					try_again: 'Intentar de nuevo',
					ai_won: 'LA IA GANÓ',
					you_won: 'TÚ GANASTE',
					scored: 'Goles a favor',
					conceded: 'Goles en contra',
					winrate: 'Tasa de victorias',
					victory: 'Victoria',
					defeat: 'Derrota',
					regular: 'Regular',
				}
			},
			ca: {
				translation: {
					play: 'Jugar',
					local_game: 'Partida local',
					online_game: 'Partida en línia',
					tournament: 'Torneig',
					profile: 'Perfil',
					settings: 'Configuració',
					friends: 'Amics',
					match_history: 'Historial de partides',
					language: 'Idioma',
					catalan: 'Català',
					spanish: 'Espanyol',
					english: 'Anglès',
					french: 'Francès',
					logout: 'Tancar sessió',
					username: 'Nom d\'usuari',
					input_username: 'Introduïu el vostre nom d\'usuari',
					password: 'Contrasenya',
					login: 'Iniciar sessió',
					login_42: 'Iniciar sessió amb 42',
					no_account: 'No tens compte? Registra\'t aquí',
					signup: 'Registra\'t',
					details_register: 'Si us plau, introdueix les teves dades per registrar-te.',
					name: 'Nom',
					input_name: 'Introduïu el vostre nom',
					last_name: 'Cognom',
					input_last_name: 'Introduïu els vostres cognoms',
					loading: 'Carregant...',
					password_should: 'La contrasenya ha de ser',
					check_between: 'Entre 8 i 16 caràcters',
					check_number: 'Com a mínim 1 número',
					check_lower: 'Com a mínim 1 lletra minúscula',
					check_upper: 'Com a mínim 1 lletra majúscula',
					check_special: 'Com a mínim 1 caràcter especial (!,@,#,$,%,^,&,_,=,+,-)',
					password_rep: 'Confirma la contrasenya',
					submit: 'Enviar',
					profile_info: 'Actualitza la informació del teu perfil.',
					alias: 'Àlies',
					campus: 'Campus',
					prefered_language: 'Idioma preferit',
					update: 'Actualitzar',
					friends_info: 'Afegeix, elimina i consulta l\'estat dels teus amics.',
					add_friend: 'Afegeix un amic',
					no_pending_requets: 'No tens sol·licituds d\'amic pendents',
					friend_request: '{{alias}} (@{{username}}) vol afegir-te com a amic.',
					accept: 'Acceptar',
					reject: 'Rebutjar',
					no_friends: 'Encara no tens amics',
					match_history_info: 'Consulta les teves últimes partides i estadístiques.',
					games_played: 'Partides jugades',
					wins: 'Victòries',
					defeats: 'Derrotes',
					waitroom: 'Sala d\'espera',
					waitroom_info: 'Crea una nova partida o uneix-te a una ja existent.',
					hey_name: 'Hola, {{name}}!',
					welcome: 'Benvingut a Transcendence!',
					wait_room: 'Sala d\'espera',
					room_owner: 'Propietari de la sala',
					attendee: 'Assistents',
					serach_oponent: 'Cercar un oponent',
					leave_room: 'Sortir de la sala',
					no_attendees: 'Encara no hi ha assistents.',
					ready_start: 'Els dos jugadors estan presents! Preparats per començar la partida.',
					play_btn: 'Jugar',
					waiting_oponent: 'Esperant que s\'uneixi un oponent...',
					room_expired: 'Aquesta sala ha expirat.',
					time_remaining: 'Temps restant:',
					error: 'Error',
					return_home: 'Tornar a l\'inici',
					create_game: 'Crear partida',
					join_game: 'Unir-se a partida',
					selector_game: 'Unir-se a partida: selecciona una sala',
					no_rooms: 'No hi ha sales disponibles.',
					close: 'Tancar',
					fail_join: 'Error en unir-se a la sala',
					error_select_room: 'Si us plau, selecciona una sala!',
					join_tour: 'Unir-se al torneig',
					delete_wait_room: 'Eliminar sala d\'espera',
					conf_tourn: 'Configuració del torneig',
					size_tourn: 'Mida del torneig',
					players: 'Jugadors',
					n_humans: 'Nombre d\'humans: ',
					n_ias: 'Nombre d\'IA: ',
					create: 'Crear',
					create_tour: 'Crear torneig',
					no_tour: 'No hi ha tornejos oberts per registrar-se',
					select_tour: 'Seleccionar torneig',
					registred: 'Registrat',
					connecting: 'Connectant...',
					quit_room: 'Sortir de la sala',
					player_1: 'Jugador 1',
					player_2: 'Jugador 2',
					score: 'Puntuació:',
					room_not_found: 'Sala no trobada',
					room_not_found_info: 'La sala a la qual intentes accedir no existeix.',
					back_to_home: 'Tornar a l\'inici',
					connected: 'Connectat',
					disconnected: 'Desconnectat',
					go_to_tournament: 'Anar al torneig',
					leaving_waiting_room: 'Sortint de la sala d\'espera',
					you_left_room: 'Has sortit de la sala',
					game_over: 'Fi de la partida',
					player_forfeit: 'El jugador s\'ha rendit',
					start: 'Començar!',
					lost_forfeit: 'Has perdut la partida per rendició',
					won_forfeit: 'Has guanyat la partida per rendició',
					you_won: 'Has guanyat!',
					you_lost: 'Has perdut!',
					match_play: 'Tens una partida per jugar contra',
					waitroom_tournament: 'Sala d\'espera per al torneig ID',
					you_are: 'Ets',
					playing_tournament: 'Jugant el torneig ID',
					congrats: 'Felicitats',
					tournament_over: 'El torneig ha acabat',
					final_result: 'Resultat final',
					runner_up: 'Subcampió',
					tournament_date: 'Data del torneig',
					wait_nxt_match: 'Esperant el teu proper partit...',
					eliminated: 'Has estat eliminat del torneig.',
					RO_tournament: 'No estàs registrat a aquest torneig. Solament lectura :)',
					blockchain_history: 'Història de la blockchain',
					blockchain_info: 'Veure tot l\'historial registrat a la blockchain',
					player_count: 'Jugadors: {{count}}',
					go_home: 'Ves a casa',
					try_again: 'Prova-ho de nou',
					ai_won: 'L\'IA HA GUANYAT',
					you_won: 'TU HAS GUANYAT',
					scored: 'Gols a favor',
					conceded: 'Gols en contra',
					winrate: 'Taxa de victòries',
					victory: 'Victòria',
					defeat: 'Derrota',
					regular: 'Regular',
				}
			},
			fr: {
				translation: {
					play: 'Jouer',
					local_game: 'Partie locale',
					online_game: 'Partie en ligne',
					tournament: 'Tournoi',
					profile: 'Profil',
					settings: 'Paramètres',
					friends: 'Amis',
					match_history: 'Historique des matchs',
					language: 'Langue',
					catalan: 'Catalan',
					spanish: 'Espagnol',
					english: 'Anglais',
					french: 'Français',
					logout: 'Se déconnecter',
					username: 'Nom d\'utilisateur',
					input_username: 'Entrez votre nom d\'utilisateur',
					password: 'Mot de passe',
					login: 'Se connecter',
					login_42: 'Se connecter avec 42',
					no_account: 'Pas de compte? Inscrivez-vous ici',
					signup: 'S\'inscrire',
					details_register: 'Veuillez entrer vos informations pour vous inscrire.',
					name: 'Prénom',
					input_name: 'Entrez votre prénom',
					last_name: 'Nom de famille',
					input_last_name: 'Entrez votre nom de famille',
					loading: 'Chargement...',
					password_should: 'Le mot de passe doit être',
					check_between: 'Entre 8 et 16 caractères',
					check_number: 'Au moins 1 chiffre',
					check_lower: 'Au moins 1 lettre minuscule',
					check_upper: 'Au moins 1 lettre majuscule',
					check_special: 'Au moins 1 caractère spécial (!,@,#,$,%,^,&,_,=,+,-)',
					password_rep: 'Confirmez le mot de passe',
					submit: 'Soumettre',
					profile_info: 'Mettez à jour vos informations de profil.',
					alias: 'Alias',
					campus: 'Campus',
					prefered_language: 'Langue préférée',
					update: 'Mettre à jour',
					friends_info: 'Ajoutez, supprimez et consultez le statut de vos amis.',
					add_friend: 'Ajouter un ami',
					no_pending_requets: 'Aucune demande d\'ami en attente',
					friend_request: '{{alias}} (@{{username}}) veut vous ajouter en tant qu\'ami.',
					accept: 'Accepter',
					reject: 'Rejeter',
					no_friends: 'Pas encore d\'amis',
					match_history_info: 'Consultez vos derniers matchs et statistiques.',
					games_played: 'Parties jouées',
					wins: 'Victoires',
					defeats: 'Défaites',
					waitroom: 'Salle d\'attente',
					waitroom_info: 'Créez une nouvelle partie ou rejoignez-en une existante.',
					hey_name: 'Salut, {{name}}!',
					welcome: 'Bienvenue sur Transcendence!',
					wait_room: 'Salle d\'attente',
					room_owner: 'Propriétaire de la salle',
					attendee: 'Participant',
					serach_oponent: 'Chercher un adversaire',
					leave_room: 'Quitter la salle',
					no_attendees: 'Aucun participant pour le moment.',
					ready_start: 'Les deux joueurs sont présents! Prêts à commencer la partie.',
					play_btn: 'Jouer',
					waiting_oponent: 'En attente qu\'un adversaire rejoigne...',
					room_expired: 'Cette salle a expiré.',
					time_remaining: 'Temps restant:',
					error: 'Erreur',
					return_home: 'Retourner à l\'accueil',
					create_game: 'Créer une partie',
					join_game: 'Rejoindre une partie',
					selector_game: 'Rejoindre une partie: sélectionnez une salle',
					no_rooms: 'Aucune salle disponible.',
					close: 'Fermer',
					fail_join: 'Échec lors de la connexion à la salle',
					error_select_room: 'Veuillez sélectionner une salle!',
					join_tour: 'Rejoindre un tournoi',
					delete_wait_room: 'Supprimer la salle d\'attente',
					conf_tourn: 'Configuration du tournoi',
					size_tourn: 'Taille du tournoi',
					players: 'Joueurs',
					n_humans: 'Nombre d\'humains: ',
					n_ias: 'Nombre d\'IA: ',
					create: 'Créer',
					create_tour: 'Créer un tournoi',
					no_tour: 'Aucun tournoi ouvert à l\'inscription',
					select_tour: 'Sélectionner un tournoi',
					registred: 'Inscrit',
					connecting: 'Connexion...',
					quit_room: 'Quitter la salle',
					player_1: 'Joueur 1',
					player_2: 'Joueur 2',
					score: 'Score:',
					room_not_found: 'Salle introuvable',
					room_not_found_info: 'La salle que vous essayez d\'accéder n\'existe pas.',
					back_to_home: 'Retourner à l\'accueil',
					connected: 'Connecté',
					disconnected: 'Déconnecté',
					go_to_tournament: 'Aller au tournoi',
					leaving_waiting_room: 'Quitter la salle d\'attente',
					you_left_room: 'Vous avez quitté la salle',
					game_over: 'Partie terminée',
					player_forfeit: 'Abandon du joueur',
					start: 'Commencer!',
					lost_forfeit: 'Vous avez perdu la partie par abandon',
					won_forfeit: 'Vous avez gagné la partie par abandon',
					you_won: 'Vous avez gagné!',
					you_lost: 'Vous avez perdu!',
					match_play: 'Vous avez un match à jouer contre',
					waitroom_tournament: 'Salle d\'attente pour le tournoi ID',
					you_are: 'Vous êtes',
					playing_tournament: 'Tournoi en cours ID',
					congrats: 'Félicitations',
					tournament_over: 'Le tournoi est terminé',
					final_result: 'Résultats finaux',
					runner_up: 'Finaliste',
					tournament_date: 'Date du tournoi',
					wait_nxt_match: 'En attente de votre prochain match...',
					eliminated: 'Vous êtes éliminé du tournoi.',
					RO_tournament: 'Vous n\'êtes pas inscrit à ce tournoi. Lecture seule :)',
					blockchain_history: 'Historique de la blockchain',
					blockchain_info: 'Voir tout l\'historique enregistré dans la blockchain',
					player_count: 'Joueurs : {{count}}',
					go_home: 'Retour à l\'accueil',
					try_again: 'Réessayer',
					ai_won: 'L\'IA A GAGNÉ',
					you_won: 'VOUS AVEZ GAGNÉ',
					scored: 'Buts marqués',
					conceded: 'Buts encaissés',
					winrate: 'Taux de victoire',
					victory: 'Victoire',
					defeat: 'Défaite',
					regular: 'Régulier',

				}
			}			
		}		
	}, (err, t) => {
		changeItemLanguage(t);
	});
	
	function changeItemLanguage(t)
	{
		const elementsTransText = document.querySelectorAll('[data-translate="text"]');
		const elementsTransPlaceholder = document.querySelectorAll('[data-translate="placeholder"]');
		
		elementsTransText.forEach( (element) => {
			element.textContent = t(element.getAttribute('data-key'));
		});

		elementsTransPlaceholder.forEach( (element) => {
			element.placeholder = t(element.getAttribute('data-key'));
		});
	}

	const	languageSelectors = document.querySelectorAll('.language-select');
	
	
	languageSelectors.forEach(item => {
		item.addEventListener('click', () => {
			const	language_i18 = item.getAttribute('value');
			i18next.changeLanguage(language_i18, (err, t) => {
				localStorage.setItem('language', language_i18);
				changeItemLanguage(t);
			});
			localStorage.setItem('language', language_i18);
		});
	});
}