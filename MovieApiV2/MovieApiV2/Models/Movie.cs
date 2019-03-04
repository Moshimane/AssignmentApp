using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MovieApiV2.Models
{
    public class Movie
    {
        public Guid Id { get; set; }
       
        public string Name { get; set; }

        public string Starring { get; set; }

        public string Summary { get; set; }

        public string Category { get; set; }

        public string Year { get; set; }

        public int Rating = 0;
    } 
}
