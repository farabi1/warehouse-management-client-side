import React from 'react';
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'





const Blogs = () => {
  return (
    <div>
      <Header></Header>
      <h1> Difference between javascript and nodejs</h1><br />
      <h1>  javascript : Javascript is a programming language that is used for writing scripts on the website. Javascript can only be run in the browsers.It is basically used on the client-side.Javascript is capable enough to add HTML and play with the DOM. Javascript can run in any browser engine as like JS core in safari and Spidermonkey in Firefox.Javascript is used in frontend development. </h1>
      <h1>nodejs : NodeJS is a Javascript runtime environment.We can run Javascript outside the browser with the help of NodeJS.It is mostly used on the server-side.Nodejs does not have capability to add HTML tags.V8 is the Javascript engine inside of node.js that parses and runs Javascript.Nodejs is used in server-side development. </h1>
      <br />
      <h1> When should you use nodejs and when should you use mongodb</h1> <br />
      <h1>Nodejs is a Javascript engine that you can write any application you want with . It runs your Javascript code. Most commonly, it is used to build servers that can respond to web requests, though it can be used for lots of other types of code too.

        MongoDB is a database engine. Code within some application or server uses MongoDB to save, query or update data in a database. There are many web servers built with nodejs that will then use MongoDB for storing data.

        MongoDB offers an API library that runs within a Nodejs application to give you programmatic access to MongoDB so you can create databases and then add, query, update or delete data from the MongoDB database. MongoDB also has API libraries for other programming environments such as Python, Java, etc...

        These two technologies are for different parts of a typical web server system. You don't substitute one for the other. Instead, you can use them together.



        Any project needs a programming environment and a runtime library that offers you basic programming tools/support and can compile and/or interpret your code. Nodejs is such as tool for the Javascript programming language. There are other similar tools for other languages such as Python, Java, PHP, C#, C++, Go, etc...

        So, if you want to write some kind of stand-alone program or server in Javascript, then you can use nodejs for it.



        If your application needs the ability to persistently store data in a way that you can efficiently query or update it later, then you would typically use some form of database. There are dozens of popular databases. MongoDB is one such database. MariaDB, MySql, CouchDB, DynamoDB (on AWS), Postgres are examples of other databases. Different databases have different strengths (things they are best at) and different ways of using them so it's a whole different question to choose the right/best database for what you're doing.</h1><br />
      <h1> Differences between sql and nosql databases.</h1> <br />
      <h1>SQL:  RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS).These databases have fixed or static or predefined schema.These databases are not suited for hierarchical data storage.These databases are best suited for complex queries.Vertically Scalable.Follows ACID property.</h1>
      <h1>NoSQL : Non-relational or distributed database system.Non-relational or distributed database system.These databases are best suited for hierarchical data storage.These databases are not so good for complex queries.	Horizontally scalable.	Follows CAP(consistency, availability, partition tolerance).</h1><br />
      <h1> What is the purpose of jwt and how does it work</h1> <br />
      <h1>JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.</h1><br />
      <h1>A JWT is a string made up of three parts, separated by dots (.), and serialized using base64. In the most common serialization format, compact serialization, the JWT looks something like this: xxxxx.yyyyy.zzzzz.

        Once decoded, you will get two JSON strings:

        The header and the payload.
        The signature.
        The JOSE (JSON Object Signing and Encryption) header contains the type of token — JWT in this case — and the signing algorithm.

        The payload contains the claims. This is displayed as a JSON string, usually containing no more than a dozen fields to keep the JWT compact. This information is typically used by the server to verify that the user has permission to perform the action they are requesting.

        There are no mandatory claims for a JWT, but overlaying standards may make claims mandatory. For example, when using JWT as bearer access token under OAuth2.0, iss, sub, aud, and exp must be present. some are more common than others.

        The signature ensures that the token hasn’t been altered. The party that creates the JWT signs the header and payload with a secret that is known to both the issuer and receiver, or with a private key known only to the sender. When the token is used, the receiving party verifies that the header and payload match the signature. </h1><br /> <br />


      <h1>
        StackOverFlow ::: https://stackoverflow.com/questions/72134063/how-can-i-remove-any-specific-installed-node-package
      </h1><br /> <br />

      <Footer></Footer>
    </div>
  );
};

export default Blogs;
<Header></Header>
