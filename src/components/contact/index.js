import React from 'react';
import './style.js'
import bootstrap from 'bootstrap';
import { ContactSection, ContactTitle, FormInput, InputEmail, InputExp, InputSubmit, InputText, Span, TextArea } from './style.js';
import Footer from '../footer/index.js';
const Contact = () =>    {
    return (
        <React.Fragment>
            <ContactSection>
                    <div class="container">
                        <ContactTitle><Span>Drop </Span>Me A line</ContactTitle>
                        <form action="">
                            <FormInput>
                                <InputText type="text" placeholder="Your Name"/>
                                <InputEmail type="email" placeholder="Your Email"/>
                            </FormInput>
                            <InputExp type="text" class="sub" placeholder="Your Subject"/>
                            <TextArea cols="30" rows="10" placeholder="Your Message"></TextArea>
                            <InputSubmit type="submit" value="Send Message"/>
                        </form>
                    </div>
            </ContactSection>
            <Footer></Footer>
        </React.Fragment>
     )
  }

  export default Contact ;