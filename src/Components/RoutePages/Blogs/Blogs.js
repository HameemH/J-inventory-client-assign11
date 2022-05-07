import React from 'react';

const Blogs = () => {
    return (
        <div className='loginPage py-5'>
            <h1>QnA</h1>
            <div className='row container mx-auto g-5 '>
                <div className=" loginContainer col-md-6 col-sm-12">
                    <h4>Q.Difference Between Javascript and Node js</h4>
                    <p>Javascript is a programming language whereas Node js is a Javascript runtime environment means it is not a programming languange.Also js runs in the browser and nodeJs helps js to run in the server.And js can run at any server with their server engine but node js needs google chrome's v8 engine to run js in the server.</p>
                </div>
                <div className="loginContainer col-md-6 col-sm-12">
                    <h4>Q.Differences between sql and nosql databases.</h4>
                    <p>SQL stands for structured query language.And NoSQL stands for not only structured query language. What it means is that in a sql database the data stored are relational or connected together that can manage by query.But in noSql the data are not relational so they cant be manage using a query language. </p>
                </div>
                <div className="loginContainer col-md-6 col-sm-12">
                    <h4>Q.What is the purpose of jwt and how does it work</h4>
                </div>
                <div className="loginContainer col-md-6 col-sm-12">
                    <h4>Q.When should you use nodejs and when should you use mongodb</h4>
                </div>
            </div>
        </div>
    );
};

export default Blogs;