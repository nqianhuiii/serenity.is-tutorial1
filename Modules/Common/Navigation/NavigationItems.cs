using Serenity.Navigation;
using MyPages = MovieTutorial.MovieDB.Pages;

[assembly: NavigationLink(1000, "Dashboard", url: "~/", permission: "", icon: "fa-tachometer")]
[assembly: NavigationMenu(2000, "Movie Database", icon: "fa-film")]
[assembly: NavigationLink(2100, "Movie Database/Movies", typeof(MyPages.MoviePage), icon: "fa-video-camera")]
[assembly: NavigationLink(2200, "Movie Database/Genre", typeof(MyPages.GenrePage), icon: "fa-thumb-tack")]
[assembly: NavigationLink(2300, "Movie Database/Person", typeof(MyPages.PersonPage), icon: "fa-users")]

