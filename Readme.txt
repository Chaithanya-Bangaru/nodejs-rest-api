Notes :

POST to a URL creates a child resource at a server defined URL.
PUT to a URL creates/replaces the resource in its entirety at the client defined URL.
PATCH to a URL updates part of the resource at that client defined URL.


Step 1
--Get Mongodb shell installed
-- use this query from bin folder to set the dbpath
Step 2
> C:\Program Files\MongoDB 2.6 Standard\bin>mongod.exe --dbpath "C:\Users\xprk689\initSoft\my-mongodb-path\data"

above will startup the mongo shell spitting the below script...

C:\Program Files\MongoDB 2.6 Standard\bin>mongod.exe --dbpath "C:\Users\xprk689\initSoft\my-mongodb-path\data"
2016-05-25T11:25:55.515-0500 [initandlisten] MongoDB starting : pid=7512 port=27017 dbpath=C:\Users\xprk689\initSoft\my-mongodb-path\data 64-bit host=PKMA-DS001D630
2016-05-25T11:25:55.516-0500 [initandlisten] targetMinOS: Windows 7/Windows Server 2008 R2
2016-05-25T11:25:55.516-0500 [initandlisten] db version v2.6.6
2016-05-25T11:25:55.516-0500 [initandlisten] git version: 608e8bc319627693b04cc7da29ecc300a5f45a1f
2016-05-25T11:25:55.516-0500 [initandlisten] build info: windows sys.getwindowsversion(major=6, minor=1, build=7601, platform=2, service_pack='Service Pack 1') BOOST_LIB_VERSION=1_49

2016-05-25T11:25:55.516-0500 [initandlisten] allocator: system
2016-05-25T11:25:55.516-0500 [initandlisten] options: { storage: { dbPath: "C:\Users\xprk689\initSoft\my-mongodb-path\data" } }
2016-05-25T11:25:55.544-0500 [initandlisten] journal dir=C:\Users\xprk689\initSoft\my-mongodb-path\data\journal
2016-05-25T11:25:55.544-0500 [initandlisten] recover : no journal files present, no recovery needed
2016-05-25T11:25:55.646-0500 [initandlisten] waiting for connections on port 27017
2016-05-25T11:25:55.657-0500 [initandlisten] connection accepted from 127.0.0.1:64583 #1 (1 connection now open)

Step 3.


----Sample Chrome dev plugin Postman requests :
Ex1
Get all books :
URL :localhost:9000/api/
Click Send

Ex2
URL :localhost:9000/api/books/5745d40cd95454302a526894
Req :
{
"author": "ABC Productions",
"genre": "Romance",
"title": "You've got mail",
"read": true
}
Method : PUT
Header : Content-Type = application/json

Ex3
URL : URL :localhost:9000/api/books
Req :
{
"author": "ABC Productions",
"genre": "Romance",
"title": "You've got mail",
"read": true
}
Method : POST

Ex4
URL : URL :localhost:9000/api/books/ID

Method : DELETE

Ex5
URL : URL :localhost:9000/api/books/ID
Req :
Method : PATCH
{
        "genre": "Romance",
        "title": "You've got mail-2",
        "read": true
    }