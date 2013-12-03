using JavacriptGeneralSamples.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.ServiceModel;
using System.ServiceModel.Activation;
using System.ServiceModel.Web;

namespace JavacriptGeneralSamples.Services
{
    [AspNetCompatibilityRequirements(RequirementsMode = AspNetCompatibilityRequirementsMode.Allowed)]
    [ServiceBehavior(IncludeExceptionDetailInFaults = true)]
    public class JSONSampleService : ISampleService
    {
        public List<Person> Persons = new List<Person>(new Person[]{ new Person{ ID = 1, Name = "Jaime Alberto Jaramillo Zapata"}, new Person{ID = 2, Name= "Angelica Maria Castrillon Cardona"}
        , new Person{ID = 3, Name="Catalina Ochoa"}, new Person{ID=4, Name="Mariana Ramirez"}, new Person{ID = 5, Name="Martin Salas"}
        });

        [WebInvoke(Method = "GET", ResponseFormat = WebMessageFormat.Json, UriTemplate = "PersonName/{name}")]
        public List<Entities.Person> GetByName(string name)
        {
            return Persons.Where(p => p.Name.StartsWith(name)).ToList();
        }

        [WebInvoke(Method = "GET", ResponseFormat = WebMessageFormat.Json, UriTemplate = "PersonId/{id}")]
        public Person GetById(string id)
        {
            return Persons.SingleOrDefault(p => p.ID == Convert.ToInt32( id));
        }
    }
}
