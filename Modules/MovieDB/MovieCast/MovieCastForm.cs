using Serenity.ComponentModel;
using System;

namespace MovieTutorial.MovieDB.Forms
{
    [FormScript("MovieDB.MovieCast")]
    [BasedOnRow(typeof(MovieCastRow), CheckNames = true)]
    public class MovieCastForm
    {
        public int PersonId { get; set; }
        public string Character { get; set; }
    }
}