using Serenity.Data;
using Serenity.Services;
using System.Collections.Generic;
using MyRequest = Serenity.Services.SaveRequest<MovieTutorial.MovieDB.MovieRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = MovieTutorial.MovieDB.MovieRow;
using System.Linq;

namespace MovieTutorial.MovieDB;

public interface IMovieSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

public class MovieSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IMovieSaveHandler
{
    public MovieSaveHandler(IRequestContext context)
            : base(context)
    {
    }
}