using JavacriptGeneralSamples.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.ServiceModel;
using System.ServiceModel.Activation;

namespace JavacriptGeneralSamples.Services
{    
    [AspNetCompatibilityRequirements(RequirementsMode = AspNetCompatibilityRequirementsMode.Allowed)]
    [ServiceBehavior(IncludeExceptionDetailInFaults = true)]
    public class NonRestfulJSONSampleService : ISampleService
    {
        public List<Person> Persons = new List<Person>(new Person[]{ new Person{ ID = 1, Name = "Jaime Alberto Jaramillo Zapata"}, new Person{ID = 2, Name= "Angelica Maria Castrillon Cardona"}
        , new Person{ID = 3, Name="Catalina Ochoa"}, new Person{ID=4, Name="Mariana Ramirez"}, new Person{ID = 5, Name="Martin Salas"}
        });

        // Add more operations here and mark them with [OperationContract]

        public List<Person> GetByName(string name)
        {
            return Persons.Where(p => p.Name.StartsWith(name)).ToList();
        }

        public Person GetById(string id)
        {
            return Persons.SingleOrDefault(p => p.ID == Convert.ToInt32(id));
        }
    }
}
