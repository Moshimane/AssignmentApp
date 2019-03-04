using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using MovieApiV2.Models;
using MovieApiV2.Repository;


namespace MovieApiV2.Controllers
{
    [EnableCors("AllowAllHeaders")]
    [Route("api/[controller]")]
    [ApiController]
    public class MoviesController : ControllerBase
    {

        private readonly MovieRepositoy _movieRepositoy;

        public MoviesController(MovieRepositoy movieRepositoy)  // Dependency Injection
        {
            this._movieRepositoy = movieRepositoy;
        }


        // GET api/movies  // Returns all movies
        [HttpGet]
        public ActionResult<IEnumerable<string>> Get()
        {
            var result = this._movieRepositoy.GetAll();

            return Ok(result);
        }

        // GET api/movies/5
        [HttpGet("{id}")]
        public ActionResult<string> Get(Guid id)
        {
            var result = this._movieRepositoy.GetByid(id);

            if(result != null)
            {
                return Ok(result);
            }

            return NotFound();
        }

        // POST api/movies
        [HttpPost]
        public bool Post([FromBody] Movie movie)
        {
            {
                return this._movieRepositoy.Upsert(movie);  // make this return bool true if successfule else false
            }
          

        }

        // DELETE api/movies
        [HttpDelete("{id}")]
        public void Delete(Guid id)
        {
            this._movieRepositoy.Delete(id);
        }
    }
}
