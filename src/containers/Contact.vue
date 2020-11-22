<template>
  <div>
    <div id="home-background" class="uk-height-xlarge uk-background-cover uk-light uk-flex" >
    <div  class="uk-align-center uk-margin-auto uk-margin-medium-top">
        <h1 class="uk-align-center uk-text-center">Contact me</h1>
    </div>
    </div>
        <div class="uk-section uk-section-small">
            <div class="uk-container uk-container-xsmall ">

            <p> 
                Feel free to send me a message about anything using the form below!
                You can also reach me on my LinkedIn, Twitter or directly by emailing me at <a href="mailto:contact@alex-peebles.tech"> contact@alex-peebles.tech</a>.
                I will endevour to get back to you as soon as possible. Feel free to find me on the platforms listed below too!

            </p>
        </div>
    </div>
    <div class="uk-section uk-section-small">
      <div class="uk-container uk-container-xsmall ">

        <form method="POST" action="https://formspree.io/f/mbjpypjl">
            <fieldset class="uk-fieldset">


                <div class="uk-margin">
                    <input class="uk-input" type="text" placeholder="Name" name="name" required>
                </div>
                <div class="uk-margin">
                    <input class="uk-input" type="email" placeholder="Email" name="email" required>
                </div>
                <div class="uk-margin">
                    <input class="uk-input" type="tel" placeholder="Phone Number" name="phone" required>
                </div>
                <div class="uk-margin">
                    <textarea class="uk-textarea" rows="5" placeholder="Message" name="message" required></textarea>
                </div>

                    <button type="submit" class="uk-button uk-button-default uk-width-1-1">Submit</button>


            </fieldset>
        </form>

      </div>
    </div>
  </div>
  
</template>
<script>

export default {
  name: "Home",

}
</script>