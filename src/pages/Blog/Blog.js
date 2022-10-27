import React from 'react';
import { Card, Container } from 'react-bootstrap';

const Blog = () => {
    return (
        <Container className='p-2 p-lg-5'>
            <div className='text-center'>
                <h2>Popular Articles</h2>
            </div>
            <div className='mt-5'>
            <Card className='mb-3'>
                <Card.Body>
                    <Card.Title>What is cors?</Card.Title>
                    <Card.Text>
                    Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request. <br />

                    An example of a cross-origin request: the front-end JavaScript code served from https://domain-a.com uses XMLHttpRequest to make a request for https://domain-b.com/data.json. <br />

                    For security reasons, browsers restrict cross-origin HTTP requests initiated from scripts. For example, XMLHttpRequest and the Fetch API follow the same-origin policy. This means that a web application using those APIs can only request resources from the same origin the application was loaded from unless the response from other origins includes the right CORS headers. 
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className='mb-3'>
                <Card.Body>
                    <Card.Title>Why am i using firebase? What other options I have to implement authentication?</Card.Title>
                    <Card.Text>
                        Google Firebase is an application development platform that allows developers to create iOS, Android, and Web apps. <br /> 
                        Firebase is a less technical and time-saving alternative to writing full-fledged backend code for dynamic apps. if anyone wish to host and manage their app in the cloud. Being serverless, Firebase removes the need to worry about the technicalities of cloud server configuration. <br />
                        As a Google Cloud service, it also gives access to other Google products and features, like Google Drive and Sheets. For instance, we can import dummy data from Google Sheets and use it temporarily to serve our app. <br />
                        With Firebase, it's pretty simple to connect and use built-in third-party authentication providers, including Google, Facebook, Twitter, among others. Firebase pricing is equally flexible. <br />
                        Apart From Firebase, there are also some other authentication system exists such as Auth0, MongoDB, Passport, Okta, JSON Web Token, Keycloak, Amazon cognito.


                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className='mb-3'>
                <Card.Body>
                    <Card.Title>How does the private route work?</Card.Title>
                    <Card.Text>
                        The react private route component renders child components (children) by setting up location through useLocation hook; if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property. <br />
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className='mb-3'>
                <Card.Body>
                    <Card.Title>What is Node? How does Node work?</Card.Title>
                    <Card.Text>
                    Node.js is an open-source backend javascript runtime environment. It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node.js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive. <br />
                    Node.js accepts the request from the clients and sends the response, while working with the request node.js handles them with a single thread. To operate I/O operations or requests node.js use the concept of threads. Thread is a sequence of instructions that the server needs to perform. It runs parallel on the server to provide the information to multiple clients. Node.js is an event loop single-threaded language. It can handle concurrent requests with a single thread without blocking it for one request.
                    </Card.Text>
                </Card.Body>
            </Card>
            </div>
        </Container>
    );
};

export default Blog;