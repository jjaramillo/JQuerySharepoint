using JavacriptGeneralSamples.Entities;
using System.Collections.Generic;
using System.ServiceModel;

namespace JavacriptGeneralSamples.Services
{
    [ServiceContract]    
    interface ISampleService
    {
        [OperationContract]
        List<Person> GetByName(string name);

        [OperationContract]
        Person GetById(string id);
    }
}
