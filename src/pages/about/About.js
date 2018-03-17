var React = require('react');
import Helmet from 'react-helmet';
import { isSSR } from '../../../server/config';     // config function to check if App is being rendered on server-side, so we know to wrap third party libraries in isSSR() conditional so we do not get a 'window is not defined' error or similar
import root from 'window-or-global';              // a simple package that is used in place of the 'window' reference and uses global instead. This works as a temporary fix where you can have SSR handle the reference root.navigator and it returns undefined so that client will just be the one to use it, however, if you wanted root.navigator.appName, it would throw an error since 'navigator' is already undefined, so this method is much more temporary than the 'isSSR()' function above that encapsulates entire code and omits everything inside of it unlike this method with window-or-global


const title = 'About Page';     // 'title' value that we use for both setting the 'title' attr in Helmet to replace our 'defaultTitle' in Header's <Helmet/> with the 'titleTemplate' that requires a 'title' attr to use in place of '%s', and then 'title' will also go into a section of one of our meta tags

module.exports = class extends React.Component {
    render() {

        return (
            <div>
                <Helmet
                    title={title}     // adding the 'title' will allow our string value 'About Page' to be used in the 'titleTemplate' attr, which will be used instead of the 'defaultTitle' now that 'title' is set to place the string in for '%s' and it will look like "About Page | Titan Global Tech"  (this is totally unrelated to where 'title' fits in in meta, which will just change the meta String and that is it)
                    meta={[
                        { name: 'description', content: 'About the company and members.' },
                        { property: 'og:title', content: title }
                    ]}
                />

                <h5>About Page</h5>


                <div id="carouselExampleIndicators" class="carousel slide mt-5 mb-5" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img class="d-block w-100" src="images/large_size_image.jpg" alt="First slide" height='577' />
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100" alt="Second slide" height='577' />
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100" alt="Third slide" height='577' />
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>


                {(global.window === undefined) ?
                    ''
                    : console.log(window.$('body'))         // checks if 'window' is undefined on SSR, then it skips the call inside that uses 'window' (or 'document', 'navigator', etc.)
                }

                {(isSSR()) ?
                    ''
                    : console.log(window.Popper)        // uses isSSR() func to check if App is being rendered on server with SSR, and if so, the SSR skips everything inside the conditional here, letting it all go to the client to be used only for client-side purposes
                }

                {console.log(root.navigator)        // can only use SSR with 'navigator' and cannot actually retrieve any of navigator's inner object's or else SSR will throw an error since it is still rendering this code and not omitting it like above methods
                }
            </div>
        )
    }
};