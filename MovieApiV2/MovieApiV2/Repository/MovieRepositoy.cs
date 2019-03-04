using MovieApiV2.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Dapper;
using System.Data.SqlClient;

namespace MovieApiV2.Repository
{
    public class MovieRepositoy
    {

        //get a list of all movies in the database
        public List<Movie> GetAll()
        {
            using (var cnn = new SqlConnection("Data Source=CLUBLESS\\SQLEXPRESS;Initial Catalog=MovieDB;Integrated Security=True")) // 
            {
                return cnn.Query<Movie>("Select * from Movie").ToList();
            }         
        }

        //select a movie from the database
        public Movie GetByid(Guid id )
        {
            var sql = "SELECT a.[Id] AS MoviesId " +
                         "a.[Name] " +
                         "b.[Id] AS RateId" +
                         $" FROM Movies a WHERE a.id = {id}";

            using (var cnn = new SqlConnection("Data Source=CLUBLESS\\SQLEXPRESS;Initial Catalog=MovieDB;Integrated Security=True")) // 
            {
                return cnn.Query<Movie>("Select * From Movie " +
                    "WHERE Id = @Id", new { id }).SingleOrDefault();
            }
        }

        //Insert and Update database content
        public bool Upsert(Movie  movie)
        {
            List<Movie> m = GetAll();
            int i = 0;
            int id = 0;
            //Check if movie exist in the database when adding a new movie
             while(i < m.Count())
            {
                if (m[i].Name.Equals(movie.Name) && !m[i].Id.Equals(movie.Id))
                {
                    id = 1;
                    break;
                }
               i++; 
            }

            if(id == 1)
            {
                return false;
            }
            else
            {
                Movie mv = GetByid(movie.Id);
                var sql = "";
                if (mv == null)
                {
                    sql = "INSERT INTO Movie (Id, Name, Starring, Summary, Category, Year, Rating )" +
                       $" VALUES ( '{movie.Id}', '{movie.Name}', '{movie.Starring}', '{movie.Summary}', '{movie.Category}'," +
                       $" '{movie.Year}', '{movie.Rating}')";
                }
                else
                {
                    sql = $"UPDATE Movie SET Name = '{ movie.Name }'," +
                   $" Starring = '{ movie.Starring }', Summary = '{ movie.Summary }'," +
                   $" Category = '{ movie.Category }', Year = '{ movie.Year }'," +
                   $" Rating = '{ movie.Rating }'" +
                   " WHERE" +
                   $" Id = '{ movie.Id }'";
                }


                using (var cnn = new SqlConnection("Data Source=CLUBLESS\\SQLEXPRESS;Initial Catalog=MovieDB;Integrated Security=True")) // 
                {
                    cnn.Execute(sql, movie);
                }

                return true;
            }
        }

        //Delete movie with the specified Id from the database 
        public bool Delete(Guid id)
        {
            var sql = "Delete FROM Movie" +
               $" WHERE Id = '{ id }'";

           
            using (var cnn = new SqlConnection("Data Source=CLUBLESS\\SQLEXPRESS;Initial Catalog=MovieDB;Integrated Security=True")) // 
            {
                cnn.Execute(sql,new { Id = id });
            }
            return true;
        }

    }
}
