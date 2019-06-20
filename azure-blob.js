var azure = require('azure-storage');

const connectionString = "" ; // storage connection string

var blobService = azure.createBlobService(connectionString);
console.log('start')
blobService.createContainerIfNotExists('taskcontainer',{publicAccessLevel:true},
function(error,result,response){
if(!error)
{
    if(result) { 
        console.log("Container created");
    }
    else {
        console.log("container already exist");
    }

    console.log(response);

}
else 
{
    console.log("eror occured" + error);
}

});


/*To upload a file (assuming it is called task1-upload.txt and it is placed in the same 
    folder as the script below), the method createBlockBlobFromLocalFile can be used.*/